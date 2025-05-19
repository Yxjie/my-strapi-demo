
import type { Core } from '@strapi/strapi';

const dbService = ({ strapi }: { strapi: Core.Strapi }) => ({

  async demo() {
    const data = await strapi.db.query('api::article.article').findMany();
    strapi.log.info(`yxjie getArticles ${JSON.stringify(data)}`);
    return data;
  },
 
});

export default dbService;
