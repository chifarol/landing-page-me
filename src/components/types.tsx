import { StaticImageData } from "next/image";

export type accordionType = {
  title: string;
  body: string;
  contentList?: string[];
};

export type responseType1 = {
  suucess: boolean;
  message: string;
};
export type responseType2 = {
  success: boolean;
  data: any;
};

export type helpType = {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
  updated_at: string;
};
export type faqType = {
  id: string;
  title: string;
  body: string;
  image: string;
  created_at: string;
  updated_at: string;
};
export type careersType = {
  id: string;
  title: string;
  description: string;
  applicationLink: string;
  slug: string;
  created_at: string;
};
export type navType = {
  image: StaticImageData;
  heading: string;
  text: string;
  href: string;
};
