import { ITeamDataProps } from "@/contracts/ITeamLayoutProps";

import Adbhut from '@/assets/adbhut.jpeg'

const teamData: ITeamDataProps[] = [
  {
    render: "About",
		topic: "Team",
		heading: "Features to make you stand out",
		subheading: "Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when.",
    data: [
      {
				Img: Adbhut,
				Name: "Adbhut Mishra",
				Desc: "Full Stack Developer",
			},
			{
				Img: Adbhut,
				Name: "Adbhut Mishra",
				Desc: "Project Manager",
			},
			{
				Img: Adbhut,
				Name: "Adbhut Mishra",
				Desc: "AI/ML Expert",
			},
    ]
  }
];

export default teamData;
