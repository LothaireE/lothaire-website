export type ProjectImage = {
  id: string;
  src: string;
  alt: string;
};

export type ProjectLayout = "image-left" | "image-right";

export type Project = {
  id: string;
  title: string;
  slug: string;
  period: string;
  role: string;
  layout?: string; // ProjectLayout
  summary: string;
  description: string[];
  stack: string[];
  mainImage: ProjectImage;
  gallery: ProjectImage[];
  locale?: "fr" | "en";
};

export type SingleExperienceItem = {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  missions: string[];
  stack: string[];
};

export type SingleExperienceProps = {
  stackLabel: string;
  isFirstItem: boolean;
  item: SingleExperienceItem;
};

export type LegalSection = "impressum" | "privacy" | null;
