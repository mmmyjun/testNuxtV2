<template>
    <div class="theme-provider" :class="this.theme">
        <slot />
    </div>
</template>

<script>
export default {
    data() {
        return {
            theme: 'light'
        }
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
        }
    },
    provide() {
        return {
            theme: {
                toggleTheme: this.toggleTheme
            }
        }
    }
}
</script>

<style scoped>
.light {
    --bgcolor: #fff;
    --text-color: #222;
}
.dark {
    --bgcolor: #000;
    --text-color: #aaa;
}
</style>
