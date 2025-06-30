import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

export const NAVIGATION_ITEMS = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "SERVICES", path: "/services" },
  { name: "BLOG", path: "/blogs" },
  { name: "CONTACT", path: "/contact" },
];

export const SOCIAL_LINKS = [
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
  { Icon: FaTwitter, href: '#', label: 'Twitter' },
  { Icon: FaGoogle, href: '#', label: 'Google' },
];

export const CONTACT_INFO = [
  {
    Icon: IoLocationOutline,
    text: 'Maarif casablanca morocco',
    label: 'Address',
  },
  {
    Icon: IoCallOutline,
    text: '+212 631 003 454',
    label: 'Phone',
  },
  {
    Icon: IoMailOutline,
    text: 'cosmomedia@contact.ma',
    label: 'Email',
  },
];
