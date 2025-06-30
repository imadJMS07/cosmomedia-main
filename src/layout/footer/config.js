import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoLocationOutline, IoCallOutline, IoMailOutline, IoTimeOutline } from 'react-icons/io5';

export const FOOTER_LINKS = {
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Our Projects', path: '/projects' },
      { name: 'Contact Us', path: '/contact' },
    ],
  },
  services: {
    title: 'Services',
    links: [
      { name: 'Web Development', path: '/services/1' },
      { name: 'Mobile Apps', path: '/services/2' },
      { name: 'UI/UX Design', path: '/services/6' },
      { name: 'Digital Marketing', path: '/services/4' },
    ],
  },
};

export const CONTACT_INFO = [
  {
    Icon: IoLocationOutline,
    text: 'Maarif casablanca morocco',
  },
  {
    Icon: IoCallOutline,
    text: '+212 631 003 454',
  },
  {
    Icon: IoMailOutline,
    text: 'cosmomedia@contact.ma',
  },
  {
    Icon: IoTimeOutline,
    text: 'Mon - Fri: 9:00 - 18:00',
  },
];

export const SOCIAL_LINKS = [
  { Icon: FaFacebookF, href: '#', label: 'Facebook' },
  { Icon: FaInstagram, href: 'https://www.instagram.com/cosmomedia_tech?igsh=MWRyN3h4YmZrejh3bg== ', label: 'Instagram' },
  { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/cosmomedia-tech/', label: 'LinkedIn' },
];
