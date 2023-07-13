
type IArray<T> = T extends (infer U)[] ? U : never
type StrN = [string, number, boolean]
type LastStr = IArray<StrN>

type StrStartsWith<T extends string, U extends string> = T extends `${U}${infer R}` ? R : false
let strSt: StrStartsWith<'abc','a'>
// type ISe<T extends string, U extends string> = T extends U ? U : false
// let IsStr : ISe<'abc', 'a'>



interface Animal {
    type?: string
}
interface Dog extends Animal {
    name: string;
}

interface GreyDog extends Dog {
    readonly color?: 'grey';
}

interface WhiteDog extends Dog {
    readonly color?: 'white';
}

type GetDogName = (transform: (d: Dog) => Dog) => string;

type GetGreyDog = (d: GreyDog) => GreyDog;

const getDogName: GetDogName = (callback) => {
    const dog: WhiteDog = {
        name: 'WhiteDog',
        color: 'white'
    }
    const newDog = callback(dog)
    return 'hello ' + newDog.name
}


const getName: GetGreyDog = (dog) => ({
    ...dog,
    // name: 'new Dog',
})

const result = getDogName(getName)
console.log(result, '结果')

// 协变：animal => dog
// go: list array: array不可变长度元素可变  list是可扩充的
// 总结一下，我们可以允许不变的列表（immutable）在它的参数类型上是协变的，但是对于可变的列表（mutable），其参数类型则必须是不变的（invariant），既不是协变也不是逆变

async function add(): Promise<boolean> {
    return true;
}
var ads
add().then(e => {
     ads = e
    console.log(ads, '哟哟')
})


Promise.resolve(11)