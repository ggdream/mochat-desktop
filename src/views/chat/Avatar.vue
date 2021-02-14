<template>
    <img
        :src="src"
        :alt="alt"
        :style="{width: size, height: size, objectFit}"
    />
</template>


<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
    name: 'Avatar',
    props: {
        // 如果图片不能显示则显示此，对应原生的alt
        alt: {
            type: String,
            default: ''
        },
        // 图片地址，对应原生的src
        src: {
            type: String,
            required: true
        },
        // 图片大小，将width和height同时设置为该大小
        size: {
            type: String,
            default: '36px'
        },
        // 图片填充方式，对应原生的object-fit
        objectFit: {
            type: String,
            default: 'cover'
        }
    }
})
</script>


<style lang='scss' scoped>
    img {
        border-radius: 50%;
        vertical-align: middle;
        &[src=""], &:not([src]) {
            opacity: 0;
        }
    }
</style>