<template>
    <div class="test">
        <pre v-highlightjs="code"><code class="javascript"> </code></pre>


        <button @click="caseValue = 66">改变switch case值为66</button>
        <button @click="caseValue = 55">改变switch case值为55</button>
        <button @click="caseValue = 99">改变switch case值为99</button>
        <button @click="caseValue = 0">改变switch case值为不存在的值</button>
        <SwitchCaseRootSwitch :value="caseValue">
            <SwitchCaseChildCase v-for="(item, index) in caseArr" :key="index" :value="item">值是{{ item }}</SwitchCaseChildCase>
            <SwitchCaseChildDefault>都没匹配到</SwitchCaseChildDefault>
        </SwitchCaseRootSwitch>
        <button @click="caseArr.push(99)">switch case添加一个99</button>

        <hr>
    </div>
</template>

<script>
export default {
    name: 'switchCase',
    layout: 'blog',
    data: () => ({
        code: '',
        caseValue: '88',
        caseArr: [88, 55, 66, 77]
    }),
    mounted() {
        console.log(this)
    },
    methods: {

    },
    beforeDestroy() {
    }
}
</script>
<style scoped>

</style>