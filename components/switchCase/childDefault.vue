<template>
    <div class="test-default" v-show="!allCaseValue.some(e => e == obj.getRootValue()) ">
        缺省显示内容<slot></slot>
    </div>
</template>

<script>
export default {
    name: 'childDefault',
    data: () => ({
        code: '',
        allCaseValue: []
    }),
    inject: ['obj'],
    mounted() {
        this.allCaseValue = this.obj.childCaseValueArr;
    },
    methods: {

    },
    beforeDestroy() {
    }
}
</script>
<style scoped>

</style>