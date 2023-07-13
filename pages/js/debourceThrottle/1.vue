<template>
    <div class="test">
        防抖
        <pre v-highlightjs="code"><code class="javascript"> </code></pre>

        节流

    </div>
</template>
<script>
export default {
    data: () => ({
        code: `
        var arrs = [];
        var timer = null;
        function getIt(idx) {
        arrs.push(idx + 10)
        clearTimeout(timer)
        timer = setTimeout(() => {
        console.log('时间啊', arrs)
        }, 2000);
        }
        for (let i = 0; i < 5; i++) { getIt(i) } `
    })
}
</script>
<style>

</style>
