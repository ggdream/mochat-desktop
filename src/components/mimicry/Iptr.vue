<template>
    <div class="iptr"
        :style="{width, height}"
    >
        <input :type="type" :placeholder="placeholder"
            :value="value"
            @input="e=>$emit('input', e.target.value)"
        >
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    name: 'Iptr',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '40px'
        },
        value: {
            type: [String, Number],
            default: ''
        }
    }
})
</script>

<style lang='scss' scoped>
    .iptr {
        padding: 24px;
        border-radius: 16px;
        box-shadow: inset 2px 2px 4px rgba(0, 0, 0, .4), inset -2px -2px 4px rgba(255, 255, 255, 1);
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            width: inherit;
            height: inherit;
            color: #333;
            border: none;
            outline: none;
            font-size: 16px;
        }


    }
</style>