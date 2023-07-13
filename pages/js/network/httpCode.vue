<template>
    <div class="test">
        200: ok
        401: unauthorized
        403: 服务器拒绝请求。403 forbidden，表示没有权限去请求资源
        405: method is not allowed
        500: 服务器

        <pre v-highlightjs="code"><code class="javascript"> </code></pre>
    </div>
</template>
<script>
export default {
    data: () => ({
        code: ''
    }),
    mounted() {
       
    },
    methods: {

    },
    beforeDestroy() {
    }
}
</script>
<style scoped>

</style>