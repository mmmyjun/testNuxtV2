<script lang="jsx">
import { defineComponent, h } from 'vue'
const TestComponent = defineComponent({
    name: 'test',
    setup() {
        return () => h('div', '111')
    }
})
const AboutComponent = defineComponent({
    name: 'about',
    setup() {
        return () => h('div', '222')
    }
})
</script>

<script lang="jsx" setup>
import { ref } from 'vue'
const routes = {
    '/test': TestComponent,
    '/about': AboutComponent
}
const routeName = ref('/test');
window.addEventListener('hashchange', (e) => {
    console.log('hashchange',e)
    // console.log('result', routes[window.location.hash.slice(1) || '/'])
    routeName.value = window.location.hash.slice(1) || '/';
    // console.log('routeName', routeName, routeName.value)
})
window.addEventListener('popstate', (e) => {
    console.log('popState啊', e)
})
window.addEventListener('pushstate', (e) => {
    console.log('pushState呀', e)
})

function goTo(path) {
    let state = {
        title: '66' + path,
        url: '/qq'
    }
    if (path == '#yy') {
        window.history.pushState(state, "title", path);
    } else {
        window.history.replaceState(state, "title", path);
    }

}
</script>
<template>
    <div class="vue-js-router">
        <button @click="goTo('#xx')">替代成xx地址</button><br>
        <button @click="goTo('#yy', 'push')">push yy地址</button><br>
        <a href="#/test">test</a><br>
        <a href="#/about">about</a>

         当前组件内容展示如下:
        <component :is="routes[routeName]" />
        <!--
            <hr> 
            <TestComponent />
           <AboutComponent /> -->
    </div>
</template>