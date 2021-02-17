<template>
    <div class="sign">
        <v-snackbar
            v-model="snackBarControler.show"
            :timeout="snackBarControler.timeout"
            >
            {{ snackBarControler.text }}
            <template v-slot:action>
                <img width="20px" src="@/assets/img/snackbar.png" alt="">
            </template>
        </v-snackbar>

        <div class="box">
            <div class="sidebtn">
                <btn :img="require('@/assets/img/a.jpeg')" @click.native="isLogin = true" />
                <btn :img="require('@/assets/img/b.jpeg')" @click.native="isLogin = false" />
            </div>
            <div class="content">
                <login v-if="isLogin" />
                <register v-else />
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Btn from '@/components/mimicry/Btn.vue'
import Login from './Login.vue'
import Register from './Register.vue'

export default Vue.extend({
    name: 'Sign',
    components: {
        Btn,
        Login,
        Register
    },
    data(){
        return {
            isLogin: true,
            snackBarControler: {
                show: true,
                text: 'hello',
                timeout: 8000
            },
        }
    }
})
</script>

<style lang='scss' scoped>
    .sign {
        height: 100vh;
        background-color: #efeeee;
        display: flex;
        justify-content: center;
        align-items: center;

        .box {
            width: 50vw;
            height: 60vh;
            border-radius: 20px;
            box-shadow: 18px 18px 30px rgba(0, 0, 0, .2), -18px -18px 30px rgba(255, 255, 255, 1);
            display: flex;
            justify-content: space-between;

            .sidebtn {
                margin-left: 20px;
                height: 60vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                flex: 1;
            }

            .content {
                align-self: center;
                flex: 5;
            }
        }
    }
</style>
