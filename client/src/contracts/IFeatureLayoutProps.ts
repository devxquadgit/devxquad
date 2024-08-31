import { ICardProps } from "./ICardProps";

export interface IFeatureLayoutProps {
	render: string;
}

export interface IFeatureDataProps {
	render: string;
	topic: string;
	heading: string;
	subheading: string;
	data: ICardProps[];
}