<!-- <template>
    <div class="it-item-outer">
        <template v-for="item in $slots.default.filter(vnode => vnode.tag)">
            <div class="list-item-container">
                <component :is="getRender(item)" />
            </div>
        </template>
    </div>
</template> -->

<script>
export default {
    name: 'it',
    mounted() {
        console.log(this, 'it的啊')
    },
    // render() {
    //     const t = this.$slots.default.filter(dt => dt.tag).map(v => {
    //         return (
    //             <div class="flex-item list-inner">
    //                 {v}
    //             </div>
    //         )
    //     })
    //     return (<div class="flex list-item-container">
    //         {t}
    //     </div>)
    // },
    // render: function (createElement) {
    //     console.log(this.$slots.default)
    //     return createElement(
    //         'div',   // 标签名称
    //         {
    //             'class': 'fooBar',
    //         },
    //         this.$slots.default.filter(f => f.tag).map(g => createElement('div', { 'class': 'innerP' }, [createElement(g.tag, g.data, g.children)]))
    //     )
    // },

    // Array.apply(null, { length: 20 })
    // Array.from({length: 20})
    // Array(20).fill(null)


    functional: true,
    render: function (createElement, context) {
        return createElement(
            'div',
            context.data,
            context.children.filter(f => f.tag).map(g => createElement('div', { 'class': 'innerP2' }, [createElement(g.tag, g.data, g.children)]))
        )
    },
    methods: {
        getRender(vnode) {
            return {
                render: () => vnode
            }
        }
    },
    beforeDestroy() {
    }
}
</script>
<style scoped>
.list-item-container {
    display: flex;
    width: 600px;
    height: 400px;
    border: 1px solid grey;
}

.list-inner {
    border: 1px solid gainsboro;
    flex: 1;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    width: 100%;
    padding: 10px;

}

.list-inner>div {
    background: pink;

}
</style>