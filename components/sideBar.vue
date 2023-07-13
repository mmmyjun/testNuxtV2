<template>
    <div class="menuBar">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu :default-active="$route.path == '/' ? '/js/promise/promiseAll' : $route.path"
            class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router  @select="handleSelect">
            <el-submenu v-for="(item, index) in menus" :index="item.path" :key="item.path">
                <span slot="title">{{ item.label }}</span>
                <el-submenu v-for="(secondMenu, index) in item.children" :index="secondMenu.path"
                    :key="secondMenu.path">
                    <span slot="title">{{ secondMenu.label }}</span>
                    <el-menu-item v-for="({ label, path }, index) in secondMenu.children"
                        :index="`${item.path}${secondMenu.path}${path}`" :key="`${item.path}${secondMenu.path}${path}`">
                        {{ label }}
                    </el-menu-item>
                </el-submenu>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            menus: [{
                label: 'js',
                path: '/js',
                children: [
                    {
                        label: 'promise',
                        path: '/promise',
                        children: [
                            {
                                label: 'promiseAll',
                                path: '/promiseAll',
                            },
                            {
                                label: 'async await',
                                path: '/asyncAwait',
                            }
                        ]
                    },
                    {
                        label: 'iterator',
                        path: '/iterator',
                        children: [
                             {
                                label: 'for in/of',
                                path: '/forInOf',
                            }
                        ]
                    },
                    {
                        label: 'obj',
                        path: '/obj',
                        children: [
                             {
                                label: 'arr fill null',
                                path: '/fillNull',
                            }
                        ]
                    },
                    {
                        label: 'vue',
                        path: '/vue',
                        children: [
                             {
                                label: 'ref reactive',
                                path: '/ref',
                            },
                            {
                                label: 'lifecycle',
                                path: '/lifecycle',
                            },
                            {
                                label: 'v-model',
                                path: '/vModel',
                            },
                            {
                                label: 'switch case',
                                path: '/switchCase',
                            },
                            {
                                label: 'render',
                                path: '/render',
                            },
                            {
                                label: 'router',
                                path: '/router/testRoute',
                                // children: [
                                //     {
                                //         label: 'router event',
                                //         path: '/testRoute',
                                //     }
                                // ]
                            },
                            {
                                label: 'listContainer',
                                path: '/listContainer/page',

                            }
                            
                        ]
                    },
                    {
                        label: 'qiankun',
                        path: '/qiankun',
                        children: [
                             {
                                label: 'qiankun 01',
                                path: '/01/report',
                            }
                        ]
                    }
                ]
            }]
        };
    },
    computed: {

    },
    mounted() {
        console.log('去了子应用后的菜单')
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log('handleOpen',key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log('handleClose',key, keyPath);
        },
        handleSelect(key, keyPath) {
            console.log('handleSelect',key, keyPath);
            this.$store.commit('changeInMol', key);
        }
    }
}
</script>
    
<style>
.menuBar, .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>