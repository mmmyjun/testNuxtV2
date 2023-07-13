<template>
    <div class="iterator-container">
        <h3>迭代器</h3>
        疑问:arr.some为何没走return this.i < _this.leng ???
        
        一: for in:适用于【可枚举数据】: 对象 数组、字符串。也就是enumerable:true,可用Object.getOwnPropertyDescriptors()查看。 
            for of:适用于【可迭代数据】: Array、string、map、set、nodelist、arguments等。 特征是具有Symbol.iterator属性，他对应的值是一个函数，调用该函数后是一个对应的迭代器对象。每次调用对象的next方法能得到目标的每一项，只要符合这个特点就是可迭代的
        二: for in:不仅限于遍历自身的原型上的也能遍历 
            for of:一般只能遍历自身的（具体和迭代器的内部实现有关）:

            Array.prototype.foo=4; 
            const arr=7; 
            for (let attr in arr) { 
                console.log(arr) 
            } // 7 4 
            for (let value of arr) { console.log(arr) } // 7 

            演示下目前只能遍历自身的:
            Array.prototype.foo=4; 
            const arr=[7]; 
            arr[Symbol.iterator]=function() { 
                const _this=this; 
                return { 
                    i: 0, 
                    next() {
                        return this.i < _this.length ? { value: _this[this.i++], done: false } : { value: undefined, done: true } 
                    } 
                } 
            } 
            for(let value of arr) { console.log(value) } // 7 
            
            现在改造一下可以遍历原型 
            Array.prototype.foo=4; 
            const arr=[7];
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
            for(let value of arr) { console.log(value) }

    </div>
</template>

<script>
export default {
    layout: 'blog',
}
</script>