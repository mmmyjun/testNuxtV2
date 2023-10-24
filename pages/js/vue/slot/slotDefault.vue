<template>
    <flex>
        <div>Hello</div>
        <div>World</div>
        test
    </flex>
    <!-- <div class="flex">
        <div class="flex-item">
            <div>Hello</div>
        </div>
        <div class="flex-item">
            <div>World</div>
        </div>
    </div> -->
</template>
<script>
import flex from "@/components/pages/vue/slot/flex";
export default {
    layout: 'blog',
    components: {
        flex
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