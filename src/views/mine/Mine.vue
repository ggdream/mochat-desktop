<template>
    <div class="mine">
        <chat />
    </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Chat from '@/views/chat/Chat.vue'

export default Vue.extend({
    name: 'Mine',
    components: {
        Chat
    }
})
</script>

<style lang='scss' scoped>

</style>