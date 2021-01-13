const Mock = require('mockjs');
export default [
    {
        url: '/category',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'ShenZhen',
                        href: '/category/ShenZhen'
                    },
                    {
                        id: 2,
                        title: 'h5',
                        href: '/category/h5',
                    },
                    // {
                    //     id: 3,
                    //     title: 'MySql',
                    //     href: '/category/MySql'
                    // },
                    // {
                    //     id: 4,
                    //     title: '随笔',
                    //     href: '/category/live'
                    // }
                ]
            }
        }
    }
]