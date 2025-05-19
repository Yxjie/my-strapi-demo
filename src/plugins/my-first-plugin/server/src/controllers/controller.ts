import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('first-plugin')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },

   articles(ctx) {

    return strapi
      .plugin('first-plugin')
      .service('dbService')
      .demo();
  },
});

export default controller;
