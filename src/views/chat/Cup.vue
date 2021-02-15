<template>
    <div
        class="cup"
        :style="{flexDirection: meta.me ? 'row' : 'row-reverse'}"
        >
        <avatar :src="meta.avatar" class="avatar" />
        <bubble class="bubble" :message="meta.message" />
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Avatar from './Avatar.vue'
import Bubble from './Bubble.vue'

interface CupMeta {
    id: string;         // 唯一识别号 v-for -> key
    me: boolean;        // 是否是自己
    avatar: string;     // 头像地址
    username: string;   // 用户昵称
    message: string;    // 消息
}

export default Vue.extend({
    name: 'Cup',
    props: {
        meta: {
            required: true,
            type: Object as () => CupMeta
        }
    },
    components: {
        Avatar,
        Bubble
    }
})
</script>

<style lang='scss' scoped>
    .cup {
        display: flex;
        .bubble {
            display: inline-block;
        }
    }
</style>