// b站课程地址: https://www.bilibili.com/video/BV1BD4y1J7pn?p=4&vd_source=59bd26938eebdd53594d9fc21b805bd3

// 联合类型
// let x: number|string

// 引用类型 数组 对象 函数
// 数组 类型+[]
let arr1: number[] =  [1]
let arr2: string[] =  ['1']
let arr3: (string | number)[] =  ['1', 2]
// 数组泛型
let arr5:Array<number|string> = [1, '3']

interface Obj {
    id: number;
    title: string;
    [propName: string]: any;
}
let obj = {
    id:1,
    title: '1',
    age: 18,
    fn: function() { 

    }
}
interface IList {
    id: number;
    text: string;
}
let lists: IList[] = [
    {id: 1, text: '2'}
]
let lists2: Array<IList> = [
    { id: 1, text: '2' }
]

// 泛型
function sum5<T>(n1:T, n2:T):T[] {
    return [n1, n2]
}
sum5<number>(10, 20)
sum5(10, 20) // 类型推断

// T 泛型约束
// function fn2<T>(v:T):number {
//     return v.length // 如果是number类型，就没有length属性
// }
// fn2<string>('hello')
// 改造下
// interface ILength {
//     length: number;
// }
// function fn2<T extends ILength>(v:T):number {
//     return v.length
// }
// fn2<string>('hello')
// fn2<number>(100) // 可以正常红色警告

interface IispectFn {
    (a: number, b: number): boolean
}
let f4 = function(x:number, y:number):boolean {
    return x > y
}
// 加了接口改造后
let f44: IispectFn = function (x, y) {
    return x > y
}
// 整体泛型改造后
interface IispectFn2 {
    <T>(a: T, b: T): boolean
}
let f444: IispectFn2 = function<T>(x, y) {
    return x > y
}
f444(3,6)
// 另一种传T的方式
interface IispectFn22<T> {
    (a: T, b: T): boolean
}
let f4444: IispectFn22<string> = function(x, y) {
    return x > y
}
f4444('3', '6')