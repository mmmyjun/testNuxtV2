<script>
export default {
    name: 'Flex',
    created() {
        console.log()
    },
    render() {
        const t = this.$slots.default.map(v => {
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