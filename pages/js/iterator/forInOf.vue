<template>
    <div class="iterator-container">
        <h3>for in/of的区别</h3>
一:
for in:适用于【可枚举数据】: 对象 数组 字符串。也就是enumerable:true,可用Object.getOwnPropertyDescriptors()查看。Object.keys()可以检测是否可枚举 
for of:适用于【可迭代数据】: 原生具备 Iterator 接口的数据结构：Array、string、map、 set、nodelist、arguments等。
                          特征是具有Symbol.iterator属性，他对应的值是一个函数，调用该函数后是一个对应的迭代器对象。每次调用对象的next方法能得到目标的每一项，只要符合这个特点就是可迭代的
<br>
二:
for in:不仅限于遍历自身的原型上的也能遍历
for of:一般只能遍历自身的（具体和迭代器的内部实现有关）
<pre v-highlightjs="code1"><code class="javascript"> </code></pre>

演示下目前只能遍历自身的
<pre v-highlightjs="code2"><code class="javascript"> </code></pre>

现在改造一下可以遍历原型
<pre v-highlightjs="code3"><code class="javascript"> </code></pre>



<!-- <template>
  <div class="theme" :style="{ '--bgcolor': color }">
    <input type="color" v-model="color" />
  </div>
</template>

<script>
export default {
  data: () => ({
    color: '#ffffff',
  }),
};
</script>

<style scoped>
.theme {
  height: 150px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bgcolor);
}
</style> -->


    <button @click="theme.toggleTheme">切换主题</button>
  </div>
</template>

<script >
import { vue } from "vue";
import { css } from '@emotion/css'

const styles = {
    container: css`
      padding: 32px;
      background-color: var(--bgcolor);
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: pink;
      }
    `
}
console.log('css in js', styles)
export default {
    layout: 'blog',
     data: () => ({
        styles,
        code1: `
        Array.prototype.foo = 4;
        const arr = 7;
        for (let attr in arr) {
            console.log(arr)
        }
        // 7 4
        for (let value of arr) {
            console.log(arr)
        }
        // 7`,
        code2: `
        Array.prototype.foo = 4;
        const arr = [7];
        arr[Symbol.iterator] = function() {
            const _this = this;
            return {
                i: 0,
                next() {
                    return this.i < _this.length ? { value: _this[this.i++], done: false } : { value: undefined, done: true }
                }
            }
        }
        for (let value of arr) {
            console.log(value)
        }
        // 7`,
        code3: `
        Array.prototype.foo = 4;
        const arr = [7];
        arr[Symbol.iterator] = function() {
            const _this = this;
            Object.keys(this.__proto__).forEach(item => this.push(this.__proto__[item]))
            return {
                i: 0,
                next() {
                    return this.i < _this.length ? { value: _this[this.i++], done: false } : { value: undefined, done: true }
                }
            }
        }
        for (let value of arr) {
            console.log(value)
        }`
     }),
     inject: ['theme'],
     mounted() {
      'abc'.startsWith('a')
     }
}
</script>

<style scoped>
.iterator-container {
  background-color: var(--bgcolor);
  color: var(--text-color);
}
</style>