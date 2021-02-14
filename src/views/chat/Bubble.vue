<template>
    <div
        class="bubble"
        :style="{color, backgroundColor, fontSize}"
    >
        {{ message }}
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    name: 'Bubble',
    props: {
        color: {
            type: String,
            default: '#fff'
        },
        backgroundColor: {
            type: String,
            default: '#512DA8'
        },
        fontSize: {
            type: String,
            default: '12px'
        },
        message: {
            type: String,
            required: true
        }
    }
})
</script>

<style lang='scss' scoped>
    .bubble {
        margin: 8px 20px 10px 20px;
        padding: 6px;
        border-radius: 6px;
        font-family: 'DFShaoNvW5-GB';
    }
</style>