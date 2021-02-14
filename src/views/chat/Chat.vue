<template>
    <div class="chat">
        <div class="shower">
            <ul>
                <li
                    class="message"
                    v-for="chat in chats"
                    :key="chat.id"
                    >
                    <cup :meta="chat" />
                </li>
            </ul>
        </div>
        <div class="sender">
            <typing @notice="sendMsgToRomote" />
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Cup from './Cup.vue'
import Typing from './Typing.vue'

export default Vue.extend({
    name: 'Chat',
    components: {
        Cup,
        Typing
    },
    data(){
        return {
            chats: [
                {
                    id: 0,
                    avatar: require('@/assets/avatar.jpg'),
                    username: '0',
                    message: '0',
                    me: true
                },
                {
                    id: 1,
                    avatar: require('@/assets/avatar.jpg'),
                    username: '1',
                    message: '1'
                },
                {
                    id: 2,
                    avatar: require('@/assets/avatar.jpg'),
                    username: '2',
                    message: '2'
                },
            ]
        }
    },
    methods: {
        sendMsgToRomote(data: string): void {
            console.log(data);
        }
    }
})
</script>

<style lang='scss' scoped>
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .chat {
        .sender {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
        }
    }
</style>