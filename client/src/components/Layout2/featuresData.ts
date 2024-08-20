import { ICardProps } from "@/contracts/ICardProps";

import TaskIcon from '@/assets/feature/task.svg';
import MilestonesIcon from '@/assets/feature/milestones.svg';
import TimeIcon from '@/assets/feature/time.svg';
import TemplatesIcon from '@/assets/feature/templates.svg';
import AttachmentsIcon from '@/assets/feature/attachments.svg';
import TeammateIcon from '@/assets/feature/teammate.svg';

const featuresData: ICardProps[] = [
  {
    SVG: TaskIcon,
    Heading: 'Tasks',
    Desc: 'Break big projects into chunks 🍕. Tackle tasks one slice at a time and watch your team conquer!',
  },
  {
    SVG: MilestonesIcon,
    Heading: 'Milestones',
    Desc: 'Mark key checkpoints 🗺. Track progress and share wins—your project’s treasure map to success!',
  },
  {
    SVG: TimeIcon,
    Heading: 'Due Dates and Times',
    Desc: 'Set deadlines ⏰ so everyone’s aligned. No more “oops” moments—just smooth sailing!',
  },
  {
    SVG: TemplatesIcon,
    Heading: 'Custom Templates',
    Desc: 'Create templates 🛠 for fast project starts. It’s like having a shortcut to success!',
  },
  {
    SVG: AttachmentsIcon,
    Heading: 'Attachments',
    Desc: 'Add files 📎 from your computer or cloud. All your essentials, right where you need them!',
  },
  {
    SVG: TeammateIcon,
    Heading: 'Teammate',
    Desc: 'Check out who’s doing what 👀. Keep workloads balanced and projects on track!',
  },
];

export default featuresData;