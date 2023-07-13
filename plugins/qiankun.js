import { registerMicroApps } from 'qiankun';
import * as store from '../store/index'
import * as todo from '../store/todos'
console.log(store, '存储', store.state(), todo)

registerMicroApps([
    {
        name: 'qw',
        entry: '//localhost:8088',
        container: '#test-vue-sub',
        activeRule: '/testVueSub',
        props: {
            parentVuex: store,
            master: 678
        }
    }
]);