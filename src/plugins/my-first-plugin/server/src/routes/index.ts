import admin from './admin';
import contentAPIRoutes from './content-api';

// content-api：这些是要在管理面板之外使用的路线。
// admin：这些是要在管理面板内使用的路线。

const routes = {
  'content-api': {
    type: 'content-api',
    routes: contentAPIRoutes,
  },

  admin: {
    type: 'admin',
    routes: admin,
  }
};

export default routes;
