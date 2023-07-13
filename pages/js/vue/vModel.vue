<template>
<div class="vModel">
    <pre v-highlightjs="domCode"><code class="javascript"> </code></pre>


    vue2版本
    <pre v-highlightjs="vue2Code"><code class="javascript"> </code></pre>
    vue3版本
    <pre v-highlightjs="vue3Code"><code class="javascript"> </code></pre>
</div>
</template>

<script>
export default {
    layout: 'blog',
    data: () => ({
        domCode: `<input type="text" class="form-control" v-demo:qq="qq">`,
        vue2Code: `
        Vue.directive('demo', {
            bind: function (el, binding, vnode) {
                console.log('bind指令',el, binding, vnode) 
                el.value = binding.value
                const { expression } = binding
                const { context } = vnode
                el.oninput = (e) => {
                context[expression] = e.target.value
                }
            },
            update(el, binding, vnode) {
                console.log('update指令',el, binding, vnode) 
                el.value = binding.value
            },
            componentUpdated(el, binding, vnode) {
                console.log('componentUpdated指令',el, binding, vnode) 
            }
        })
        `,
        vue3Code: `
            app.directive('demo', {
                // 在绑定元素的父组件
                // 及他自己的所有子节点都挂载完成后调用
                mounted(el, binding, vnode, prevVnode) {
                    console.log('mounted指令',el, binding, vnode, prevVnode) 
                    el.value = binding.value
                    // 由于binding里没有地方存储变量名，所以这里传入的arg和变量名(比如此处的qq)要一致才能实现双向绑定
                    const { arg } = binding; 
                    el.oninput = (e) => {
                    binding.instance[arg] = e.target.value
                    }
                },
                // 在绑定元素的父组件
                // 及他自己的所有子节点都更新后调用
                updated(el, binding, vnode, prevVnode) {
                    console.log('updated指令',el, binding, vnode, prevVnode)
                    el.value = binding.value
                },
                // 绑定元素的父组件卸载前调用
                beforeUnmount(el, binding, vnode, prevVnode) {},
                // 绑定元素的父组件卸载后调用
                unmounted(el, binding, vnode, prevVnode) {}
            })

            app.mount("#app");
        `
    }),
    mounted() {
       
    },
    beforeDestroy() {
    }
}
</script>