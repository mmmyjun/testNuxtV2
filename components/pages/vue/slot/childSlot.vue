<template>
    <div class="slot-container">
        <slot v-for="([slot, render]) in Object.entries($slots)" :name="slot" />
        <!-- <template v-for="([slot, render]) in Object.entries($slots)" :key="slot" v-slot:[slot]>
           <component :is="render" />
        </template> -->
    </div>
</template>
<script>
import { h } from 'vue'
export default {
    mounted() {
        console.log(this)
        console.log(this.$slots)
        console.log('哈哈', Object.entries(this.$slots))
    },
    methods: {
        // rr(comp) {
        //     const { tag, data, children } = comp;
        //     return h(
        //         tag,
        //         data,
        //         children
        //     )
        // }

    },
    beforeDestroy() {
    },
}
</script>
<style scoped></style>