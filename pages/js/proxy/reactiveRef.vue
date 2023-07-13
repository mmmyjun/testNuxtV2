<template>
    <div class="difference-container">
        <h3>vue3 reactive和ref的区别</h3>
        vue3响应式原理是通过proxy实现的, Proxy({}, {get set})
        reactive只能对引用类型做代理，所以出现了ref
        ref就好比class REF{ _value = null; createReactive()}内部有个私有属性value,如果是基本数据类型就直接丢给value属性，而且为了保持基本数据类型的响应式所以封装成了{value:值}；但是如果这个值是引用类型的，ref内部就有一个createReactive的函数把数据递归处理成ref再.value获取
    </div>
</template>

<script>
export default {
    layout: 'blog',
}
</script>