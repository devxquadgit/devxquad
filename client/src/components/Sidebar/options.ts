import { ISidebarOption } from "@/contracts/ISidebarOption";

const options: ISidebarOption[] = [
  {
    text: 'Projects',
    path: '/project',
  },
  {
    text: 'Services',
    path: '/services',
  },
  {
    text: 'About Us',
    path: '/about',
  },
  {
    text: 'Our Team',
    path: '/team',
  },
];

// Automatically prepend "/home" to paths that don't start with "/"
const sidebarOptions = options.map(option => ({
  ...option,
  path: option.path.startsWith('/') ? option.path : `/home/${option.path}`,
}));

export default sidebarOptions;
