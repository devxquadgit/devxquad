import { IInfoProps } from "@/contracts/IInfoProps";

import Img2 from '@/assets/landing/img2.png';
import Img3 from '@/assets/landing/img3.png';
import Img4 from '@/assets/landing/img4.png';
import Img5 from '@/assets/landing/img5.png';
import Img6 from '@/assets/landing/img6.png';
import Img7 from '@/assets/landing/img7.png';
import Img8 from '@/assets/landing/img8.png';

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
        Image: Img4.src,
        Topic: "ABOUT US",
        Heading: "Who we are",
        Desc: "With our next-generation app platform, teams easily design and deploy flexible and engaging apps that power critical workflows and make valuable data actionable across the enterprise.",
        Points: ["Visualize your goals effortlessly", "Manage tasks with finesse", "Stay on top of every detail", "Achieve your milestones with ease"],
        Url: "www.google.com"
      },
    ]
  },
  {
    render: 'Service',
    data: [
      {
        Image: Img5.src,
        Topic: "STREAMLINE & THRIVE",
        Heading: "Website Design",
        Desc: "We design visually stunning and user- friendly websites that elevate your online presence. We provide client-centric ui/ux that are user-friendly and aesthetic at the same time.",
        Url: "www.google.com"
      },
      {
        Image: Img6.src,
        Topic: "VISION & EXECUTE",
        Heading: "Web Development",
        Desc: "We build reliable, scalable solutions that deliver your vision and exceed your expectations.",
        Points: ["Website Development", "Front/Back-end Development", "Full-stack App Development", "Quality Assurance"],
        Url: "www.google.com"
      },
      {
        Image: Img7.src,
        Topic: "STREAMLINE & THRIVE",
        Heading: "Ecommerce development",
        Desc: "We are at the forefront of modern e-commerce development. Which mainly means adding your logo to the Shopify store template we’ve used for the past six years.",
        Url: "www.google.com"
      },
      {
        Image: Img8.src,
        Topic: "VISION & EXECUTE",
        Heading: "Mobile Development",
        Desc: "Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices.",
        Points: ["Flutter : Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications.", "React Native : React Native lets you create truly native apps and doesn't compromise your users' experiences."],
        Url: "www.google.com"
      },
    ]
  }
];

export default infoData;


