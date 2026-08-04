import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import en from "../src/locales/en.json" with { type: "json" };
import fr from "../src/locales/fr.json" with { type: "json" };

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const siteUrl = "https://lothaire-epee.com";

const routes = [
  "/",
  "/fr/",
  ...en.projects.projectList.map((project) => `/projects/${project.slug}/`),
  ...fr.projects.projectList.map((project) => `/fr/projects/${project.slug}/`),
];

const localizedProjectPairs = en.projects.projectList.map((project) => {
  const localizedProject = fr.projects.projectList.find(
    (candidate) => candidate.slug === project.slug,
  );
  assert.ok(localizedProject, `Missing French project for slug: ${project.slug}`);
  return [project, localizedProject];
});

const readDistPage = (route) => {
  const filePath = join(dist, route, "index.html");
  assert.equal(existsSync(filePath), true, `Missing generated page: ${route}`);
  return readFileSync(filePath, "utf8");
};

describe("Astro static output", () => {
  it("keeps English and French project data aligned", () => {
    assert.deepEqual(
      en.projects.projectList.map((project) => project.slug).sort(),
      fr.projects.projectList.map((project) => project.slug).sort(),
    );

    for (const [englishProject, frenchProject] of localizedProjectPairs) {
      assert.equal(frenchProject.gallery.length, englishProject.gallery.length);
      assert.equal(frenchProject.stack.length, englishProject.stack.length);
      assert.equal(frenchProject.detailSections.length, englishProject.detailSections.length);
      assert.equal(Boolean(frenchProject.mainImage.src), true);
      assert.equal(Boolean(frenchProject.mainImage.alt), true);
    }
  });

  it("keeps project SEO detail content complete", () => {
    for (const project of [...en.projects.projectList, ...fr.projects.projectList]) {
      assert.equal(Boolean(project.seoTitle), true, `${project.slug} is missing seoTitle`);
      assert.equal(
        project.seoDescription.length >= 120,
        true,
        `${project.slug} needs a more descriptive SEO description`,
      );
      assert.equal(
        project.seoKeywords.length >= 4,
        true,
        `${project.slug} should expose focused SEO keywords`,
      );
      assert.equal(
        project.detailSections.length >= 3,
        true,
        `${project.slug} should expose detailed project sections`,
      );
    }
  });

  it("references existing public image assets", () => {
    const imagePaths = new Set([
      en.profile.portrait.src,
      fr.profile.portrait.src,
      ...[...en.projects.projectList, ...fr.projects.projectList].flatMap((project) => [
        project.mainImage.src,
        ...project.gallery.map((image) => image.src),
      ]),
    ]);

    for (const imagePath of imagePaths) {
      assert.equal(
        existsSync(join(root, "public", imagePath)),
        true,
        `Missing public image asset: ${imagePath}`,
      );
    }
  });

  it("generates every localized route", () => {
    for (const route of routes) {
      readDistPage(route);
    }
  });

  it("renders required SEO metadata on every page", () => {
    for (const route of routes) {
      const html = readDistPage(route);

      assert.match(html, /<title>[^<]+<\/title>/, `${route} is missing a title`);
      assert.match(
        html,
        /<meta name="description" content="[^"]+">/,
        `${route} is missing a description`,
      );
      assert.match(
        html,
        /<meta name="robots" content="index, follow">/,
        `${route} is missing robots metadata`,
      );
      assert.match(
        html,
        /<link rel="canonical" href="https:\/\/lothaire-epee\.com\//,
        `${route} is missing canonical`,
      );
      assert.match(
        html,
        /<meta property="og:title" content="[^"]+">/,
        `${route} is missing OG title`,
      );
      assert.match(
        html,
        /<meta property="og:description" content="[^"]+">/,
        `${route} is missing OG description`,
      );
      assert.match(
        html,
        /<meta name="twitter:card" content="summary_large_image">/,
        `${route} is missing Twitter card`,
      );
      assert.match(html, /<script type="application\/ld\+json">/, `${route} is missing JSON-LD`);
    }
  });

  it("renders enriched project content on project pages", () => {
    for (const project of en.projects.projectList) {
      const html = readDistPage(`/projects/${project.slug}/`);

      assert.match(html, new RegExp(project.seoTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
      assert.match(html, /Project overview/);
      assert.match(html, /Focus/);
      for (const section of project.detailSections) {
        assert.match(html, new RegExp(section.title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
      }
    }
  });

  it("keeps the home page portfolio UI hooks available", () => {
    const html = readDistPage("/");

    assert.match(html, /id="portfolio-landing"/);
    assert.match(html, /id="portfolio-grid-section"/);
    assert.match(html, /data-settings-dropdown/);
    assert.match(html, /data-mobile-menu/);
    assert.match(html, /data-back-to-top/);
    assert.match(html, /data-project-preview/);
    assert.match(html, /data-legal-trigger="impressum"/);
    assert.match(html, /data-legal-trigger="privacy"/);
  });

  it("publishes crawl discovery files with all routes", () => {
    const sitemapPath = join(dist, "sitemap.xml");
    const robotsPath = join(dist, "robots.txt");
    assert.equal(existsSync(sitemapPath), true, "Missing sitemap.xml");
    assert.equal(existsSync(robotsPath), true, "Missing robots.txt");

    const sitemap = readFileSync(sitemapPath, "utf8");
    const robots = readFileSync(robotsPath, "utf8");

    for (const route of routes) {
      assert.match(sitemap, new RegExp(`<loc>${siteUrl}${route}</loc>`));
    }

    assert.match(robots, /Allow: \//);
    assert.match(robots, new RegExp(`Sitemap: ${siteUrl}/sitemap.xml`));
  });
});
