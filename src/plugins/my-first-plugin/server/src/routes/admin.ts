export default [
  {
    method: 'GET',
    path: '/demo',
    handler: 'controller.articles',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/',
    // name of the controller file & the method.
    handler: 'controller.index',
    config: {
      policies: [],
    },
  },
];
