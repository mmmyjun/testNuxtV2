<template>
    <theme-provider>
        <div id="app">
            <header>
                <div>theme:<input type="color" v-model="bgcolor"> {{ bgcolor }}</div>
                <div>头部: 所在模块:{{ $store.state.inMol }}</div>
            </header>
            <sideBar />
            <div class="right-container" :style="{ '--bgcolor': bgcolor, '--color-text': colorText }">
                <nuxt :style="{ background: 'var(--bgcolor)' }" />
            </div>
        </div>
    </theme-provider>
</template>

<script>
export default {
    data: () => ({
        bgcolor: 'transparent',
        colorText: 'black',
    })
}
</script>
<style>
#app {
    /*--color-text: red;*/
    height: 100vh;
}

#app>div {
    display: inline-block;
}

.right-container {
    width: calc(100% - 210px);
    height: 100%;
    vertical-align: top;
    color: var(--color-text)
}
</style>

