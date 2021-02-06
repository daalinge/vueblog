<template>
    <div id="app" v-cloak>
        <Player></Player>
        <loading></loading>
        <layout-header></layout-header>
        <layout-body></layout-body>
        <layout-footer></layout-footer>
    </div>
</template>
<script>
    import layoutHeader from '@/components/layout/layout-header'
    import layoutBody from '@/components/layout/layout-body'
    import layoutFooter from '@/components/layout/layout-footer'
    import Loading from '@/components/loading'
    import Player from 'zw-player'
    export default {
        name: "app",
        components: {
            layoutHeader,
            layoutBody,
            layoutFooter,
            Loading,
            Player
        }
    }
</script>
<style lang="less">
    #app {
        font-size: 17px;
        color: #6f6f6f;
    }
    // 音乐播放器移动端
    @media (max-width: 600px){
        .music_search_box {
            left: 130px;
            top: 40px;
        }
        .list_close {
            display: none;
        }
    }
</style>
