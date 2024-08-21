import { ComponentType } from "react";

export interface Links {
  slug: string;
  url: string;
}

export interface Subheading {
  title: string;
  links: Links[];
}


export interface SocialMedia {
  svg: ComponentType;
  url: string;
}

export interface IFooterProps {
  subheadingText: string;
  subheadings: Subheading[];
  copyrightText: string;
  socialMedia: SocialMedia[];
}
