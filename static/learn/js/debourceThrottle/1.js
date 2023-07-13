// 防抖
var debArr = [];
var timer = null;
function getIt(idx) {
    debArr.push(idx + 10)
    clearTimeout(timer)
    timer = setTimeout(() => {
        console.log('防抖看debArr', debArr)
    }, 5000);
}
for (let i = 0; i < 5; i++) {
    getIt(i)
}
// 节流，去掉上述clearTimeout(timer)
var ary = [];
var tr = null;
function setAry(idx) {
    ary.push(idx + 10)
    if (tr) {
        return;
    }
    tr = setTimeout(() => {
        console.log('节流看ary', ary)
        tr = null
    }, 5000);
}
for (let i = 0; i < 5; i++) {
    setAry(i)
}