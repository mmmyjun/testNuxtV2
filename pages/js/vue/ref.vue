<template>
<div class="ref">
    <h3>ref和reactive</h3>
    vue3响应式原理reactive是通过proxy实现的, 只能对引用类型做代理。
    所以出现了ref,ref就好比class REF{ _value = null; createReactive() }内部有个私有属性value,如果是基本数据类型就直接丢给value属性，
    而且为了保持基本数据类型的响应式所以封装成了{value:值 }；
    但是如果这个值是引用类型的，ref内部就有一个createReactive的函数把数据递归处理成ref再.value获取
    <pre v-highlightjs="code"><code class="javascript"> </code></pre>

    <h3>vue2和ve3响应式的区别</h3>
    vue2的响应式是通过Object.defineProperty实现的，它主要劫持对象的属性，不能观测到对象属性的添加和删除；
    vue3的Proxy是对整个对象做劫持，能规避掉vue2存在的问题。但是兼容性没有很好。

    vue3
    一:v-model
       有多个v-model去掉了v-model修饰符.sync,v-model的默认prop值是modelVaue
    二.没有了filters,
    三、computed可以多个，
    四、根元素可以有多个. 
    五、插槽是把vue2的$scopedSlots和this.$slots合二为一了只有$slots的形式了;vue2里$attrs $listeners，vue3里合并成$attrs了
    六、生命周期: 
    setup等于beforeCreate和created的阶段，
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
    七、vue3移除了$on $off $once等。如果想要实现event bus就引入mitt包。bus.on bus.emit bus.off
                    

    <h3>vue3 watch watchEffect</h3>
    vue3 watch watchEffect的flush?: 'pre' | 'post' | 'sync' // 默认：'pre'. 默认情况下，侦听器将在组件渲染之前执行。设置 flush: 'post' 将会使侦听器延迟到组件渲染之后再执行。
    在某些特殊情况下 (例如要使缓存失效)，可能有必要在响应式依赖发生改变时立即触发侦听器。这可以通过设置 flush: 'sync' 来实现
    <pre v-highlightjs="sourcecode"><code class="javascript"> </code></pre>

</div>
</template>

<script>
import { loadMicroApp } from 'qiankun';
export default {
    layout: 'blog',
    data: () => ({
        microApp: null,
        code: `
        class RefImpl<T> {
            private _value: T

            public readonly __v_isRef = true 

            constructor(private _rawValue: T, public readonly _shallow = false) {
                this._value = _shallow ? _rawValue : convert(_rawValue)
            }

            get value() {
                track(toRaw(this), TrackOpTypes.GET, 'value)
                return this._value
            }
            set value(newVal) {
                if (hasChanged(toRaw(newVal), this._rawValue)) {
                    this._rawValue = newVal;
                    this._value = this._shallow ? newVal : convert(newVal)
                    trigger(toRaw(this), TriggerOpTypes.SET, 'value', newVal)
                }
            }

            ...
            const convert = <T extends unknown>(val: T) : T => 
                isObject(val) ? reactive(val) : val
        }
       `,
       sourcecode: ''
    }),
    async mounted() {
        this.sourcecode = await fetch(
            '/learn/js/vue/ref.code'
       ).then(res => res.text())

        console.log('ref code', this.sourcecode)

    },
    beforeDestroy() {
    }
}
</script>