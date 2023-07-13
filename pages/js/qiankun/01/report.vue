<template>
<div class="test-report-qk">吼吼
    <nuxt-link to="/testVueSub">去子应用</nuxt-link>

    <!-- <div id="qiankun-report-container">
        <h3>qiankun</h3>
    </div> -->
</div>
</template>

<script>
import { loadMicroApp } from 'qiankun';
export default {
    layout: 'blog',
    data: () => ({
        microApp: null
    }),
    mounted() {
        // this.$store.commit('changeInMol', 'report')
        // this.microApp = loadMicroApp({
        //     name: 'reports',
        //     entry: '//localhost:8088',
        //     container: '#qiankun-report-container',
        //     props: {
        //         qq: 11111111
        //     }
        // });
            // console.log('啊啊', this.microApp)

    },
    beforeDestroy() {
        // this.microApp.unmount();
    }
}
</script>