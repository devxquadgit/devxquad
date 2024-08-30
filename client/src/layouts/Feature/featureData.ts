import { IFeatureDataProps } from "@/contracts/IFeatureLayoutProps";

import TaskIcon from "@/assets/feature/task.svg";
import MilestonesIcon from "@/assets/feature/milestones.svg";
import TimeIcon from "@/assets/feature/time.svg";
import TemplatesIcon from "@/assets/feature/templates.svg";
import AttachmentsIcon from "@/assets/feature/attachments.svg";
import TeammateIcon from "@/assets/feature/teammate.svg";

import RoketIcon from "@/assets/feature/rocket.svg";
import RippleIcon from "@/assets/feature/ripple.svg";
import DiamondIcon from "@/assets/feature/diamond.svg";

const featuresData: IFeatureDataProps[] = [
	{
		render: "Landing",
		topic: "FEATURES",
		heading: "Features to make you stand out",
		subheading: "Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when.",
		data: [
			{
				SVG: TaskIcon,
				Heading: "Tasks",
				Desc: "Break big projects into chunks 🍕. Tackle tasks one slice at a time and watch your team conquer!",
			},
			{
				SVG: MilestonesIcon,
				Heading: "Milestones",
				Desc: "Mark key checkpoints 🗺. Track progress and share wins—your project’s treasure map to success!",
			},
			{
				SVG: TimeIcon,
				Heading: "Due Dates and Times",
				Desc: "Set deadlines ⏰ so everyone’s aligned. No more “oops” moments—just smooth sailing!",
			},
			{
				SVG: TemplatesIcon,
				Heading: "Custom Templates",
				Desc: "Create templates 🛠 for fast project starts. It’s like having a shortcut to success!",
			},
			{
				SVG: AttachmentsIcon,
				Heading: "Attachments",
				Desc: "Add files 📎 from your computer or cloud. All your essentials, right where you need them!",
			},
			{
				SVG: TeammateIcon,
				Heading: "Teammate",
				Desc: "Check out who’s doing what 👀. Keep workloads balanced and projects on track!",
			},
		],
	},
  {
    render: "About",
		topic: "FEATURES",
		heading: "Features to make you stand out",
		subheading: "Manage your projects from start to finish. With all of your projects in Block, you’ll always know who’s doing what, by when.",
    data: [
      {
				SVG: RoketIcon,
				Heading: "Our Mission",
				Desc: "With technology at our core, we build global infrastructure and applications to empower businesses to operate anywhere, anytime.",
			},
			{
				SVG: DiamondIcon,
				Heading: "Our Visions",
				Desc: "To be the global economic infrastructure to empower businesses of all sizes to grow without borders.",
			},
			{
				SVG: RippleIcon,
				Heading: "Our Purpose",
				Desc: "To connect the entrepreneurs, business builders, makers and creators with borderless opportunities in every corner of the world.",
			},
    ]
  }
];

export default featuresData;
