export default {

    myjob: {
        task: ({ strapi }) => ({
            task: async () => {
                // console.log('定时任务执行了')
                strapi.log.info('定时任务执行了')
            },
            // only run once after 10 seconds
            options: new Date(Date.now() + 10000),
            // options: {
            //     rule: "0 0 0 * * 1",
            // },

            // only run once after 10 seconds
            // options: {
            //     rule: "* * * * * *",
            //     // start 10 seconds from now
            //     start: new Date(Date.now() + 10000),
            //     // end 20 seconds from now
            //     end: new Date(Date.now() + 20000),
            //   },
        })
    },
}