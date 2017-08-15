<template>
  <div class="wrapper" >
    <text class="title">sdfsssssssssssssss</text>
    <text class="title" @click="jump">Profile</text>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'app',
  methods: {
    jump () {
        console.log("-------------")
        router.push('/Hello1')
    }
  }
}
</script>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>
