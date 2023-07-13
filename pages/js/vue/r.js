// export const cdd = {
//     render: function (createElement) {
//         return createElement('div',
//             Array.apply(null, { length: 20 }).map(function () {
//                 return createElement('p', 'hi')
//             })
//         )
//     }
// }
const Csd   = {
    render: function (createElement) {
        return createElement('div',
            Array.apply(null, { length: 30 }).map(function () {
                return createElement('p', 'hi')
            })
        )
    }
}
export {
    Csd 
}