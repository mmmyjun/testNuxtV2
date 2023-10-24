<template>
    <div class="render">
        <childSlot>
            <template>
               <div style="background: pink;">默认</div>
            </template>
            <template #header>
                头部
            </template>
            <template #center>
                中间
            </template>
            <template #footer>
                脚部
            </template>
        </childSlot>
    </div>
</template>

<script>
import childSlot from "@/components/pages/vue/slot/childSlot";
export default {
    layout: 'blog',
    components: {
        childSlot
    },
    data: () => ({
        rules: {
        },

    }),
    mounted() {

    },
    methods: {
        submitForm(ruleForm) {

        }

    },
    beforeDestroy() {
    },
}
</script>
<style scoped></style>