import { useState } from "react";
import { useLanguageContext } from "@/context/appContext";
import type { Project, ProjectImage } from "@/types/portfolioTypes";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ImageModal from "../ImageModal";

export const SingleProject = ({
  isFirstItem,
  project,
}: {
  isFirstItem: boolean;
  project: Project;
}) => {
  const { t } = useLanguageContext();

  const initialImageIndex = Math.max(
    0,
    project.gallery.findIndex((image) => image.id === project.mainImage.id),
  );

  const [activeImageIndex, setActiveImageIndex] = useState(initialImageIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeImage: ProjectImage = project.gallery[activeImageIndex] ?? project.mainImage;

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1));
  };

  const reverseLayout = project.layout === "image-right";

  const spClassName = `grid grid-cols-1 gap-8 md:grid-cols-5 lg:gap-10 xl:gap-10 2:xlgap-14 ${
    reverseLayout ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
  }`;

  const containerClassName = `${isFirstItem ? "" : "border-t border-foreground/20"} pt-5`;

  return (
    <>
      <article id={`project_${project.id}`} className={containerClassName}>
        <div className={spClassName}>
          {/* images  */}
          <div className="space-y-4 md:space-y-10 gap-10 col-span-1 md:col-span-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="aspect-5/3 overflow-hidden bg-foreground/5 hover:cursor-zoom-in shadow-lg "
            >
              <img src={activeImage.src} alt={activeImage.alt} className="w-full object-cover" />
            </button>

            <div className="grid grid-cols-4 xl:grid-cols-2 gap-1 border-t border-foreground/15 pt-5 md:pt-10">
              {project.gallery.map((image, index) => {
                const isActive = activeImage.src === image.src;
                const spBtnClassName = `shadow-md flex items-center justify-center w-full overflow-hidden transition-opacity hover:opacity-70 hover:cursor-pointer ${
                  isActive ? "border-foreground" : "border-foreground/15"
                }`;
                return (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={spBtnClassName}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="aspect-5/3 w-full object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-1 md:col-span-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-7 gap-2 md:gap-2.5 xl:gap-3.5">
            <div className="space-y-5 sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-5 2xl:col-span-5">
              <div className="space-y-2">
                <p className="text-[13px] uppercase tracking-[0.04em] text-foreground/50">
                  {project.period}
                </p>

                <h3 className="max-w-[12ch] text-[2.2rem] font-medium leading-[0.95] tracking-[-0.07em] sm:text-[2.8rem] lg:text-[3.4rem]">
                  {project.title}
                </h3>

                <p className="text-[15px] leading-[1.2] tracking-[-0.03em] text-foreground/75">
                  {project.role}
                </p>
              </div>

              <p className="max-w-[40ch] text-[1.1rem] leading-[1.05] tracking-[-0.05em] text-foreground">
                {project.summary}
              </p>

              <div className="space-y-3">
                {project.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="max-w-[58ch] text-[15px] leading-[1.28] tracking-[-0.03em] text-foreground/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="space-y-3 sm:col-span-1 xl:col-span-5 2xl:col-span-2 pt-2 2xl:pt-0">
              <p className="text-[13px] uppercase tracking-[0.04em] text-foreground/50">
                {t("experience.stackLabel")}
              </p>
              <ul className="flex flex-wrap pt-0.5 gap-1.5 md:gap-0 space-x-1.5 md:flex-col md:space-y-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="text-[15px] leading-[1.2] tracking-[-0.03em] text-foreground/85"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
      <ImageModal
        images={project.gallery}
        activeIndex={activeImageIndex}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
};

const ProjectsSection = () => {
  const { t, locale } = useLanguageContext();

  const projectList = locale === "fr" ? fr.projects.projectList : en.projects.projectList;

  return (
    <section id="projects" data-testid="projects" className="bg-background text-foreground">
      <div className="mx-auto min-h-screen w-full max-w-350 px-6 py-8 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="mx-auto w-full max-w-400 py-4 md:pt-8 border-t border-foreground/15">
          <h2 className="font-black uppercase text-[2.5rem] xl:text-[3.4rem] 2xl:text-[4rem] leading-[0.97] tracking-[-0.02em]">
            {t("projects.title")}
          </h2>
        </div>
        <div className="mx-auto w-full max-w-400 py-8">
          <div className="space-y-20 md:space-y-28">
            {projectList.map((project, index) => {
              const isFirstItem = index === 0;
              return <SingleProject key={project.id} isFirstItem={isFirstItem} project={project} />;
            })}
          </div>
        </div>
      </div>
      {/* "border-t border-foreground/15 flex flex-col gap-8 lg:gap-10" */}
    </section>
  );
};

export default ProjectsSection;
