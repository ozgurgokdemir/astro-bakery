import contactInfo from '@/data/contact-info';
import openingHours from '@/data/opening-hours';

const footer = {
  info: [contactInfo.phone, contactInfo.email],
  columns: [
    {
      title: 'Browse',
      list: [
        { href: '', text: 'Menu' },
        { href: '', text: 'About' },
        { href: '', text: 'Contact' },
      ],
    },
    {
      title: 'Follow',
      list: [
        { href: '', text: 'Instagram' },
        { href: '', text: 'Twitter' },
        { href: '', text: 'YouTube' },
      ],
    },
    {
      title: 'We are here for you',
      list: [
        ...openingHours
          .filter((opening) => opening.hours !== 'Closed')
          .map(({ days, hours }) => `${days}: ${hours}`),
        contactInfo.address,
      ],
    },
  ],
};

export default footer;
