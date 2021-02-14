<template>
    <img
        class="avatar"
        :src="src"
        :alt="alt"
        :style="{width: size, height: size}"
    />
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    name: 'Avatar',
    props: {
        alt: {
            type: String,
            default: ''
        },
        src: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: '48px'
        }
    }
})
</script>

<style lang='scss' scoped>
    .avatar {
        border-radius: 50%;
    }
</style>