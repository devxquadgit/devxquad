import { ComponentType } from "react";

export interface ICardProps {
  Component?: string;
  SVG: ComponentType;
  Heading: string;
  Desc: string;
  style?: React.CSSProperties;
}