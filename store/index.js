import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
    counter: 0,
    user: '苹果',
    inMol: 'js'
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    changeInMol(state, val) {
        state.inMol = val
    }
}
let vuexInstance = new Vuex.Store({
    state: state(),
    mutations,
    actions: {
    },
    modules: {
    }
})
// console.log('vuexInstance')
// console.dir(vuexInstance)
export default () => vuexInstance
