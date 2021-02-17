<template>
    <div class="register">
        <v-overlay
          opacity="1"
          :value="overlayControler.show"
        >
            <div class="code">
                <ipt width="40vw" type="text" placeholder="6-bits Code" v-model="overlayControler.mailcode" />
                <v-btn
                    color="orange lighten-2"
                    @click="overlayControler.show = false"
                >
                    确认
                </v-btn>
            </div>
        </v-overlay>

        <div class="enter">
            <iptr class="iptr1" type="text" placeholder="Username" v-model="username" />
            <iptr class="iptr2" type="password" placeholder="Password" v-model="password" />
            <div class="iptr2 email">
                <iptr type="text" placeholder="E - Mail" v-model="password" />
                <v-btn width="25%" class="ml-2 text--#adadad" @click="sendMetaToRemote()">发送</v-btn>
            </div>
        </div>

        <div class="submit">
            <v-btn dark>Sign Up</v-btn>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Ipt from '@/components/mimicry/Ipt.vue'
import Iptr from '@/components/mimicry/Iptr.vue'

export default Vue.extend({
    name: 'Register',
    components: {
        Ipt,
        Iptr
    },
    data(){
        return {
            username: '',
            password: '',
            email: '',
            overlayControler: {
                show: false,
                mailcode: ''
            }
        }
    },
    methods: {
        sendMetaToRemote(): void {
            this.overlayControler.show = true
        }
    }
})
</script>

<style lang='scss' scoped>
    .register {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .code {
            height: 16vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .enter {
            .iptr1 {
                margin-bottom: 10%;
            }
            .iptr2 {
                margin-top: 10%;
            }

            .email {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            width: 50%;
            margin-bottom: 5%;
        }

        .submit {
            display: flex;
            justify-content: center;
        }
    }
</style>