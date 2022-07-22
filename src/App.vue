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
  min-width: 1200px;
}
/*重置*/
body,
ul,
p,
br {
	margin: 0px;
	padding: 0px;
}

img {
	display: block;
}

li {
	list-style: none;
}

* {
	font-family: "微软雅黑";
	font-size: 12px;
}
#app {
  background:url('./assets/images/底图.png');
  height: 100%;
}
</style>
