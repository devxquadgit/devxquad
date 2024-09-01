import { ICard2Props } from "./ICard2Props";

export interface ITeamLayoutProps {
	render: string;
}

export interface ITeamDataProps {
	render: string;
	topic: string;
	heading: string;
	subheading: string;
	data: ICard2Props[];
}
