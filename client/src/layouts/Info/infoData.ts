import { IInfoProps } from "@/contracts/IInfoProps";

import Img2 from '@/assets/landing/img2.png';
import Img3 from '@/assets/landing/img3.png';

const infoData: IInfoProps[] = [
  
  {
    render: 'Landing',
    data: [
      {
        Image: Img2.src,
        Topic: "STREAMLINE & THRIVE",
        Heading: "Transform Chaos into Clarity",
        Desc: "Ready to make your projects less of a jigsaw puzzle and more of a well-oiled machine? Our easy-to-use tools will turn confusion into control, with visuals so clear you’ll think you’re seeing a magic trick. 🎩✨",
        Url: "www.google.com"
      },
      {
        Image: Img3.src,
        Topic: "VISION & EXECUTE",
        Heading: "From Dreams to Reality in No Time",
        Desc: "Got big dreams? Our tools turn them into reality faster than you can say “goal achieved!” With crystal-clear views and easy management, your project will be cruising toward success. 🌈🚗",
        Points: ["Visualize your goals effortlessly", "Manage tasks with finesse", "Stay on top of every detail", "Achieve your milestones with ease"],
        Url: "www.google.com"
      },
    ]
  },
  {
    render: 'About',
    data: [
      {
        Image: Img3.src,
        Topic: "ABOUT US",
        Heading: "Who we are",
        Desc: "With our next-generation app platform, teams easily design and deploy flexible and engaging apps that power critical workflows and make valuable data actionable across the enterprise.",
        Points: ["Visualize your goals effortlessly", "Manage tasks with finesse", "Stay on top of every detail", "Achieve your milestones with ease"],
        Url: "www.google.com"
      },
    ]
  }
];

export default infoData;


