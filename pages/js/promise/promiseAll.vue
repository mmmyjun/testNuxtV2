<template>
    <div>
    <!-- <div :class="styles.container"> -->
        <h3 @click="method">
            Promise.all用于对多个promise的结果做统计
        </h3>
        如果参数都是resolve后的,那就在then中返回所有结果的集合;
        如果参数里的任意一个是reject(还包括throw new Error和new Promise回调中代码错误导致报错的情况)后的,就在catch中显示第一个reject的值.
        <pre v-highlightjs="sourcecode"><code class="javascript"> </code></pre>
        <div>
            Promise.all只适用于参数都成功的情况, 如果有一个失败了就会进入catch。Promise.allSettled可以弥补这一点,无论成功还是失败都会进入then
        </div>

        <h3>也可用于表单校验</h3>
        <div>比如父组件:
            <pre v-highlightjs="parentCode"><code class="javascript"> </code></pre>
            子组件:
            <pre v-highlightjs="childCode"><code class="javascript"> </code></pre>
        </div>

    </div>
</template>

<script>
import { css } from '@emotion/css'

const method =(e) => {
    console.log('黑河', e)
}

const styles = {
    container: css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: white;
      }
    `
}
export default {
    layout: 'blog',
    data: () => ({
        styles,
        sourcecode: '',
        parentCode: `
        <mul-form ref="mulFormRef" v-for="(item,index) in value" v-model="value[index]" :key="index" :msg="msg" />
        Promise.all(this.$refs.mulFormRef.map(e => e.submitForm())).then(e => {
            console.log('all----', e)
        }).catch(e => {
            console.log('catch====', e)
        })
        console.log(this.$refs.mulFormRef)`,
        childCode: `
        submitForm() {
            return new Promise((resolve,reject) => {
                this.$refs['formRef'].validate((valid) => {
                if (valid) {
                    resolve(valid)
                } else {
                    reject(valid)
                }
                });
            })
        }`
    }),
    methods: {
        method
    },
    created() {
        // console.log('创建把', window)
        console.log('创建--', __dirname)
    },
    async mounted() {
        this.sourcecode = await fetch(
            '/learn/js/promise/promiseAll.code'
       ).then(res => res.text())

        console.log(styles, styles.container, css)

        console.log('挂载呀', window, this)

    }
}
</script>

