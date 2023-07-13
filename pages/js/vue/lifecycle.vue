<template>
<div class="lifeCycle">
    <h3>created和mounted的区别</h3>
    1.mounted里是组件挂载成功了用this.$el会得到对应的dom，created时候并没有把dom加载好所以用this.$el获取会得到null
    2.created时候还没挂载子组件，子组件发生在父的beforeMount后。mounted时候子组件已经挂载好了的
    3.created想使用this.$el可以通过this.$nextTick的方式
    <!-- <pre v-highlightjs="code"><code class="javascript"> </code></pre> -->
    <h3>vue3 vs vue2</h3>
    vue3setup等于beforeCreate和created的阶段，
    其余的生命周期:onBeforeMount onMounted onBeforeUnmount onUnmounted 
                   onUpdated onBeforeUpdate
                   onActivated onDeactivated
                   onRenderTracked onRenderTriggered
                   onErrorCaptured onServerPrefetch
    而vue2的生命周期:beforeCreate created
                    beforeMount mounted
                    beforeUpdate updated
                    beforeDestroy destroyed
                    activated deactivated
                    errorCaptured
</div>
</template>

<script>
export default {
    layout: 'blog',
    data: () => ({
        code: `
        `
    }),
    mounted() {
       
    },
    beforeDestroy() {
    }
}
</script>