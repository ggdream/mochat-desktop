<template>
    <div class="typing">
        <textarea name="msg" cols="120" rows="1" placeholder="Write your message..." class="msg" v-model="text"></textarea>

        <div class="addition">
            <a
                href="javascript:void(0)"
                >
                <img class="icon" src="@/assets/addition/emoji.svg" alt="">
            </a>
            <a
                href="javascript:void(0)"
                >
                <img class="icon" src="@/assets/addition/file.svg" alt="">
            </a>
        </div>

        <a
            class="send"
            href="javascript:void(0)"
            @click="sendMsg()"
            >
            <img src="@/assets/addition/flight.svg" alt="">
        </a>
    </div>
</template>


<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
    name: 'Typing',
    data(){
        return {
            text: null as unknown as string
        }
    },
    methods: {
        sendMsg(): void {
            this.$emit('notice', this.text)
            this.text = ''
        }
    }
})
</script>


<style lang='scss' scoped>
    textarea {
        border: none;
        resize: none;
        outline: none;
    }

    .typing {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 40px;
        border-radius: 20px;
        background-color: #eee;

        .msg {
            margin: 0 20px;
        }

        .addition {
            .icon {
                width: 24px;
                margin: 12px 2px;
                vertical-align: middle;
            }
        }

        .send {
            width: 48px;
            height: 48px;
            border-radius: 8px;
            background-color: #00a389;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 20px;
        }
    }
</style>