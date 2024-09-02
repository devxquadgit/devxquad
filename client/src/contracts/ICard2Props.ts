import { StaticImageData } from "next/image";

export interface ICard2Props {
  Img: StaticImageData;
  Name: string;
  Desc: string;
  style?: React.CSSProperties;
}