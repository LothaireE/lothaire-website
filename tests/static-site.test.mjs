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

const readDistPage = (route) => {
  const filePath = join(dist, route, "index.html");
  assert.equal(existsSync(filePath), true, `Missing generated page: ${route}`);
  return readFileSync(filePath, "utf8");
};

describe("Astro static output", () => {
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
