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
                        href: '/article/ShenZhen'
                    },
                    {
                        id: 2,
                        title: 'H5',
                        href: '/article/H5',
                    },
                ]
            }
        }
    }
]