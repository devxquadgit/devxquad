import { ComponentType } from "react";

export interface Subheading {
  title: string;
  links: string[];
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
