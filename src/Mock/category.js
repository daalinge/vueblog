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
                        href: '/article/shenzhen'
                    },
                    {
                        id: 2,
                        title: 'H5',
                        href: '/article/h5',
                    },
                    {
                        id: 3,
                        title: '澳门风云',
                        href: '/article/macao',
                    },
                ]
            }
        }
    }
]