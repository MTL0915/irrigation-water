<template>
  <div id="app">
    <Header></Header>
    <Shuifei></Shuifei>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Shuifei from './components/Shuifei.vue'

export default {
  name: 'App',
  components: {
    Header,
    Shuifei
  }
}
</script>

<style>
html,body{
  height: 100%;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 12px;
}
#app {
  background:url('./assets/images/底图.png');
  height: 100%;
}
</style>
