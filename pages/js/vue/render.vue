<template>
    <div class="render">
        render

        <Csd></Csd>
    </div>
</template>

<script>
import { Csd } from './r.js'
// import { Csd } from './r.js'
console.log(Csd, '啊')
export default {
    layout: 'blog',
    components: { Csd },
    data: () => ({
        code: ''
    }),
    mounted() {

    },
    methods: {

    },
    beforeDestroy() {
    },
    //  render: function (createElement) {
    //     return createElement('div',
    //         Array.apply(null, { length: 20 }).map(function () {
    //             return createElement('p', 'hi')
    //         })
    //     )
    // }
}
</script>
<style scoped></style>