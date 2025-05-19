import cronTasks from './cron-task'; 

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // corn 定时器
  cron:{
    enabled: true,
    tasks: cronTasks,
  }
});
