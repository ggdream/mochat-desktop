<template>
    <div class="login">
        <div class="enter">
            <iptr class="iptr1" type="text" placeholder="Username" v-model="username" />
            <iptr class="iptr2" type="password" placeholder="Password" v-model="password" />
        </div>

        <div class="submit">
            <v-btn class="btn" dark>Sign in</v-btn>
            <v-btn class="btn" dark>Retrieve</v-btn>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Iptr from '@/components/mimicry/Iptr.vue'

export default Vue.extend({
    name: 'Login',
    components: {
        Iptr
    },
    data(){
        return {
            username: '',
            password: ''
        }
    }
})
</script>

<style lang='scss' scoped>
    .login {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .enter {
            .iptr1 {
                margin-bottom: 10%;
            }
            .iptr2 {
                margin-top: 10%;
            }

            width: 50%;
            margin-bottom: 15%;
        }

        .submit {
            display: flex;
            justify-content: center;

            .btn {
                margin: 0 2%;
                width: 40%;
            }
        }
    }
</style>