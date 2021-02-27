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
                    avatar: 'https://shitu-query-gz.gz.bcebos.com/2021-02-27/19/02e771eb87872694?authorization=bce-auth-v1%2F7e22d8caf5af46cc9310f1e3021709f3%2F2021-02-27T11%3A00%3A01Z%2F300%2Fhost%2F5b2d8a09210ccd457110edf76c22ce285cb4557490cb02302c147b9ed3d55741',
                    slogan: 'The way up is not crowded, and most chose ease.',
                    name: 'DLG′blog',
                    domain: 'https://www.daalin.top',
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