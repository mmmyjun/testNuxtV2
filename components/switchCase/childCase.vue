<template>
    <div class="test-case" v-show="obj.getRootValue() === value">
       case的值: {{ value }} ;obj.rootValue: {{ obj.getRootValue() }}
    </div>
</template>

<script>
export default {
    name: 'childCase',
    props: {
        value: {}
    },
    inject: ['obj'],
    data: () => ({
        code: ''
    }),
    mounted() {
        this.obj.childCaseValueArr.push(this.value)
    },
    methods: {

    },
    beforeDestroy() {
    }
}
</script>
<style scoped>

</style>