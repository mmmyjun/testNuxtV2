<template>
    <div class="test-switch">
       switch当前值:{{ value }}
       <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'rootSwitch',
    props: {
        value: { }
    },
    provide() {
        return {
            obj: {
                rootValue: this.value,
                getRootValue: this.getRootValue,
                childCaseValueArr: []
            }
        }
     
    },
    data: () => ({
        code: ''
    }),
    mounted() {

    },
    methods: {
        getRootValue() {
            return this.value
        }
    },
    beforeDestroy() {
    }
}
</script>
<style scoped>

</style>