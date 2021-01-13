const Mock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4200474896,1957610758&fm=26&gp=0.jpg',
                    slogan: 'The way up is not crowded, and most chose ease.',
                    name: 'FZY′blog',
                    domain: 'https://www.fengziy.cn',
                    notice: '我一定要改掉遇到不会的问题时挠后脑勺的坏毛病',
                    desc: '一个It技术的探索者'
                }
            }
        }
    },
    // 站点社交信息
    {
        url: '/social',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'QQ',
                        icon: 'iconqq',
                        color: '#1AB6FF ',
                        href: 'https://user.qzone.qq.com/515773148/infocenter'
                    },
                    // {
                    //     id: 2,
                    //     title: 'Gitee',
                    //     icon: 'icongitee',
                    //     color: '#d81e06',
                    //     href: 'https://gitee.com/fengziy'
                    // },
                    {
                        id: 3,
                        title: 'GitHub',
                        icon: 'icongithub',
                        color: '',
                        href: 'https://github.com/daalinge'
                    },
                    {
                        id: 4,
                        title: 'CSDN',
                        icon: 'iconcsdn',
                        color: 'red',
                        href: 'https://blog.csdn.net/qq_45952585?spm=1000.2115.3001.5343'
                    }
                ]
            }
        }
    }
]