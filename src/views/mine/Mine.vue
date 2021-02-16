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
    },
    data(){
        return {
            show: true,
            from: '',
            to: ''
        }
    },
    methods: {
        submit() {
            if (this.from && this.to) {
                this.show = false
            }
        }
    }
})
</script>

<style lang='scss' scoped>
  .mine {
      width: 100%;
      height: 100%;
      background-color: #000;
  }
</style>