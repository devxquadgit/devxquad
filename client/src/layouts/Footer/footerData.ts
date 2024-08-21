import { IFooterProps } from "@/contracts/IFooterProps";

import InstagramIcon from "@/assets/social/instagram.svg";
import GmailIcon from "@/assets/social/gmail.svg";
import LinkedinIcon from "@/assets/social/linkedin.svg";
import WhatsappIcon from "@/assets/social/whatsapp.svg";

const footerData: IFooterProps = {
	subheadingText:
		"Accelerate your online success with DevXquad. We handle web development, digital marketing, and server management to bring your vision to life.",
	subheadings: [
		{
			title: "Landings",
			links: [
				"Sass",
				"Software Company",
				"Finance",
				"Digital Agency",
				"Conference",
				"App Template",
			],
		},
		{
			title: "Landings",
			links: [
				"Sass",
				"Software Company",
				"Finance",
				"Digital Agency",
				"Conference",
				"App Template",
			],
		},
		{
			title: "Landings",
			links: [
				"Sass",
				"Software Company",
				"Finance",
				"Digital Agency",
				"Conference",
				"App Template",
			],
		},
	],
	copyrightText: "© 2024 DevXquad | Crafted with ♥️ by DevXquad",
	socialMedia: [
		{
			svg: InstagramIcon,
			url: "https://www.instagram.com/devxquad",
		},
		{
			svg: WhatsappIcon,
			url: "https://wa.me/1234567890",
		},
		{
			svg: GmailIcon,
			url: "mailto:devxquad@gmail.com",
		},
		{
			svg: LinkedinIcon,
			url: "https://www.linkedin.com/company/devxquad",
		},
	],
};

export default footerData;