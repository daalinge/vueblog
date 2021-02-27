const Mock = require('mockjs');
export default [
    {
        url: '/focus/list',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'L',
                        img: 'https://p3-tt.byteimg.com/origin/pgc-image/17bbebf7158c41a9bf55425767e06e53?from=pc'
                    },
                    {
                        id: 2,
                        title: 'Z',
                        img: 'https://p3-tt.byteimg.com/origin/pgc-image/876b2b22c7ae4407802dfd5d4725264c?from=pc'
                    },
                    {
                        id: 3,
                        title: 'Q',
                        img: 'https://p3-tt.byteimg.com/origin/pgc-image/0b2434cae84e4f9bb9ab662f82f32c77?from=pc'
                    }
                ]
            }
        }
    }
]