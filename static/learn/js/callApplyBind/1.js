var name = '小王' ,age = 17
var obj = {
    name: '小张',
    objAge: this.age,
    myFun: function(fm, t) {
        console.log(this.name + '年龄' +this.age,'来自'+ fm + '去往' + t)
    }
}
var db = {
    name: '的吗',
    age: 99
}
obj.myFun.call(obj, '成都', '上海')
obj.myFun.apply(obj, ['成都', '上海'])
obj.myFun.bind(obj, '成都', '上海')()