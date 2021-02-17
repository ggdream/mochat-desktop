<template>
    <div class="btn"
        :style="{width, height}"
    >
        <div class="img">
            <img :src="img" alt="" draggable="false">
        </div>
        <p></p>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    name: 'Btn',
    props: {
        width: {
            type: String,
            default: '80px'
        },
        height: {
            type: String,
            default: '100px'
        },
        img: {
            type: String,
            required: true
        }
    },

})
</script>

<style lang='scss' scoped>
    .btn {
        .img {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            box-shadow: 16px 16px 24px rgba(0, 0, 0, .2), -16px -16px 24px rgba(255, 255, 255, 1);
            cursor: pointer;
            user-select: none;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 48px;
                border-radius: 50%;
            }

            &:hover {
                box-shadow: 0 0 0 rgba(0, 0, 0, .2), 0 0 0 rgba(255, 255, 255, .8), inset 16px 16px 30px rgba(0, 0, 0, .2), inset -16px -16px 30px rgba(255, 255, 255, 1);
                &>img {
                    width: 44px;
                }
            }
            &:active {
                margin: 5px;
            }
        }

    }
</style>