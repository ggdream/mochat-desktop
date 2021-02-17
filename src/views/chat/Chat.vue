<template>
    <div class="chat">
        <div class="get" v-show="show">
            <div>
                <v-text-field solo v-model="from"></v-text-field>
                <v-text-field solo v-model="to"></v-text-field>
            </div>
            <v-btn @click="submit">确定</v-btn>
        </div>

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
            <typing @notice="sendMsgToRomote" @file="sendFileToRemote" />
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Cup,{CupMeta} from './Cup.vue'
import Typing from './Typing.vue'

export default Vue.extend({
    name: 'Chat',
    components: {
        Cup,
        Typing
    },
    data(){
        return {
            chats: [] as Array<CupMeta>,
            conn: null as unknown as WebSocket,
            show: true,
            from: '',
            to: ''
        }
    },
    methods: {
        sendMsgToRomote(data: string): void {
            if (data === null || data === '') return
            const temp: CupMeta = {
                    id: this.chats.length.toString(),
                    avatar: require('@/assets/avatar.jpg'),
                    username: this.chats.length.toString(),
                    message: data,
                    me: false
                }
            this.conn.send(data)
            this.chats.push(temp)
        },
        sendFileToRemote(form: FormData) {
            fetch('', {
                method: "POST",
                body: form
            }).then(res => res.json()).then(res => {console.log(res)}).catch(err => {console.log(err)})
        },
        initWs(from: string, to: string) {
            const url = `ws://localhost:54639/chat/websocket?from=${from}&to=${to}`
            this.conn = new WebSocket(url)
            this.conn.onmessage = (e: MessageEvent) => {
                const temp: CupMeta = {
                    id: this.chats.length.toString(),
                    avatar: require('@/assets/avatar.jpg'),
                    username: this.chats.length.toString(),
                    message: e.data,
                    me: true
                }
                this.chats.push(temp)
            }
        },
        submit() {
            if (this.from && this.to) {
                this.initWs(this.from, this.to)
                this.show = false
            }
        }
    }
})
</script>

<style lang='scss' scoped>
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .chat {
        height: 100%;
        .shower {
            height: 72%;
            ul {
                height: 100%;
            }
        }

        .sender {
            margin: 0 30px 16px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .get {
          position: absolute;
          left: 20%;
          width: 60%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
      }
    }
</style>