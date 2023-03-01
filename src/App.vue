<template>
  <TopBar />
  <RouterView />
  <Footer />
  <Messages />
</template>

<script lang='ts' setup>
import TopBar from './components/TopBar.vue';
import Footer from './components/Footer.vue';
import Messages from './components/Messages.vue'
</script>

<style lang='scss' scoped>
.app {
  min-width: 1100px;
}
</style>
