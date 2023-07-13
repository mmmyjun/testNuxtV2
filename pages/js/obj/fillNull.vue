<template>
<div class="obj-fill">
    <pre v-highlightjs="code"><code class="javascript"> </code></pre>
</div>
</template>

<script>
export default {
    layout: 'blog',
    data: () => ({
        code: `
        Array.apply(null, {length: 3})
        Array.from({length:3})
        Array(3).fill(null)`
    }),
    mounted() {
       
    },
    beforeDestroy() {
    }
}
</script>