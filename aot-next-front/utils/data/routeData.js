import servicesData from './servicesData';

export default [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Services',
    href: '/services',
    children: servicesData,
    childPath: '/service'
  },
  {
    title: 'Rates',
    href: '/rates'
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]