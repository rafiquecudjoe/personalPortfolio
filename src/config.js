module.exports = {
  email: 'rafiqueacudjoe@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/rafiquecudjoe',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rafique4real',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/rafiqueacudjoe',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rafiquecudjoe',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/rafiqueacudjoe',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'FAQ',
      url: '/faq',
    },
    {
      name: 'Testimonials',
      url: '/testimonials',
    },
    {
      name: 'Terms',
      url: '/terms',
    },
    {
      name: 'Privacy',
      url: '/privacy',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
