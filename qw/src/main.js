// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import "./public-path";
// import Vue from 'vue'
// import App from './App'
// import routes from './router'
// import VueRouter from 'vue-router';

// Vue.config.productionTip = false


// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// // new Vue({
// //   el: '#app',
// //   router: routes,
// //   components: { App },
// //   template: '<App/>'
// // })

// // Vue.config.productionTip = false
// let router = null;
// let instance = null;
// function render(props = {}) {
//   const { container } = props;
//   console.log('routes==', routes)
//   router = new VueRouter({
//     base: window.__POWERED_BY_QIANKUN__ ? '/test/' : '/',
//     mode: 'history',
//     routes,
//   });
//   instance = new Vue({
//     router,
//     // store,
//     render: (h) => h(App),
//   }).$mount(container ? container.querySelector('#app') : '#app');
// }
// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//   render();
// } else {
//   // new Vue({
//   //   el: '#app',
//   //   router: routes,
//   //   components: { App },
//   //   template: '<App/>'
//   // })
// }
// export async function bootstrap() {
//   console.log('哈哈[vue] vue app bootstraped');
// }
// export async function mount(props) {
//   console.log('哈哈[vue] props from main framework', props);
//   render(props);
// }
// export async function unmount() {
//   instance.$destroy();
//   instance.$el.innerHTML = '';
//   instance = null;
//   router = null;
// }
import './public-path';
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
// import store from './store';

Vue.config.productionTip = false;

// Vue.use(ElementUI);

let router = null;
let instance = null;

function render(props = {}) {
  // debugger
  const { container, parentVuex } = props;
  // props.parentVuex
  // this.$root.parentVuex.state.commonData
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/testVueSub' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    // store,
    data(){
      return {
        // parentRouter: data.router,
        parentVuex: parentVuex,
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('8088888[vue] props from main framework', props);
  // storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
