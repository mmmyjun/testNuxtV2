<template>
    <div class="difference-container">
        <h3>arr fill null</h3>
        Array.apply(null, {length: 3})
        Array.from({length:3})
        Array(3).fill(null)
    </div>
</template>

<script>
export default {
    layout: 'blog',
}
</script>