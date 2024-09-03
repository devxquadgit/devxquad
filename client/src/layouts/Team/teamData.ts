import { ITeamDataProps } from "@/contracts/ITeamLayoutProps";

import Adbhut from '@/assets/adbhut.jpeg'

const teamData: ITeamDataProps[] = [
  {
    render: "About",
		topic: "Team",
		heading: "Save your time and money by choosing Our highly performant team.",
		subheading: "Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when.",
    data: [
      {
				Img: Adbhut,
				Name: "Adbhut Mishra",
				Desc: "Full Stack Developer",
			},
			{
				Img: Adbhut,
				Name: "Madhav Singh",
				Desc: "Front-end Developer",
			},
			{
				Img: Adbhut,
				Name: "Surya Teja",
				Desc: "Back-end Developer",
			},
			{
				Img: Adbhut,
				Name: "Narendra Nishad",
				Desc: "Front-end Developer",
			},
    ]
  }
];

export default teamData;
