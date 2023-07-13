<template>
    <div class="promiseAll">
        请求到的完整数据:{{dd}}
        <!-- <ul v-if="dd && dd.length">
            <li v-for="(item,i) in dd" :key="item.key">{{item.name || item}}</li>
        </ul> -->
    </div>
</template>

<script>
export default {
    layout: 'blog',
    // https://code-in-life.netlify.app/iptv.json
    // asyncData({ params }) {
    //     return axios.get(`https://code-in-life.netlify.app/iptv.json`).then(res => {
    //         return { title: res.data.title }
    //     })
    // }
    async asyncData({ $axios }) {
        const dd = await $axios.$get('http://icanhazip.com')
        return { dd }
    },
    data: () => ({
      dd: 11
    }),
    // async asyncData({ $axios }) {
    //     console.log('是服务端请求的吗', process.server)
    //     try {
    //         return await $axios.get(`https://code-in-life.netlify.app/iptv.json`).then(e => {
    //             console.log('fetch vedio结果', e)
    //             return {
    //                 dd: e
    //             };
    //         })
    //     } catch(e) {
    //         console.log('捕获到错误',e)
    //     }
    // }

    // https://code-in-life.netlify.app/video/search/api?s=%E4%BA%AE%E5%89%91
    // async fetch() {
    //     this.dd = await this.$axios.$get('https://code-in-life.netlify.app/iptv.json').then(e => {
    //         console.log('fetch vedio结果', e)
    //         return e
    //     })
    // }
    // async fetch() {
    //     try {
    //         const text = await this.$axios.$get('https://code-in-life.netlify.app/video/search/api?s=%E4%BA%AE%E5%89%91')
    //         console.log('类型', typeof text)
    //         const base64 = text.match(/[a-zA-Z\d\/\+\=]{100,}/g)
    //         if (!base64) {
    //             return null;
    //         }
    //         return {
    //             dd: JSON.parse(Buffer.from(base64[0], 'base64').toString('utf-8'))
    //         } 
    //     } catch (e) {
    //         console.log('捕获到的错误', e)
    //         return {
    //             dd: []
    //         } 
    //     }
    // }
}
</script>