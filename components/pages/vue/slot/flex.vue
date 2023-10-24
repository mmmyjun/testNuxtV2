<script>
export default {
    name: 'Flex',
    created() {
        console.log()
    },
    render() {
        const t = this.$slots.default.filter(e => e.tag).map(v => {
            console.log(v, '哈哈哈哈')
            return (
                <div class="flex-item">
                    {v}
                </div>
            )
        })
        return (<div class="flex">
            {t}
        </div>)
    }
}
</script>