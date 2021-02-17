<template>
    <div class="ipt"
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
    name: 'Ipt',
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
    .ipt {
        border-bottom: 2px solid #adadad;

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