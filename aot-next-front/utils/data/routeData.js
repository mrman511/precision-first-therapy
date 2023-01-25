import servicesData from './servicesData';

export default [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
    children: servicesData,
    childPath: '/service'
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]