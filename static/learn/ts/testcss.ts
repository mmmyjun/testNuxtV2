export interface EmotionInserted {
    inserted: {
        [key: string]: string | true
    }
}
let ed: EmotionInserted
ed = {  inserted: { 'aa': true, 'bb':'66' } }


// 枚举联合类型的key ?
type Name = { name: string }
type Age = { age: number }
type Union = Name | Age
type UnionKey<P> = P extends infer P ? keyof P : never
type T = UnionKey<Union>



// ???? ts中?.、??、!.、_、** 等符号的含义

// ??
// let x = foo ?? bar();
// 等价于
// let x = foo !== null && foo !== undefined ? foo : bar();

// !.
// let a: string | null | undefined
// a.length // error
// a!.length // ok
                                                           

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!??????????????????????????????????????????
// https://blog.51cto.com/u_15503053/5049538  钉钉前端面试题~TypeScript相关问题及解答

