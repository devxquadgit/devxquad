import { ComponentType } from "react";

export interface ICardProps {
  SVG: ComponentType;
  Heading: string;
  Desc: string;
  style?: React.CSSProperties;
}