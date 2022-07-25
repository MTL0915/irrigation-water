<template>
  <div id="app">
    <Header></Header>
    <div class="content">
      <div class="left">
        <Shishi></Shishi>
        <Kongzhi></Kongzhi>
        <Shangqing></Shangqing>
      </div>
      <div class="center">
        <Shuifei></Shuifei>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Shuifei from './components/Shuifei'
import Shishi from './components/Shishi'
import Kongzhi from './components/Kongzhi'
import Shangqing from './components/Shangqing'

export default {
  name: 'App',
  components: {
    Header,
    Shuifei,
    Shishi,
    Kongzhi,
    Shangqing
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
.content{
    height: calc(100% - 75px);
    margin-top: 6px;
    position: relative;
}
.center {
    width: calc(100% - 350px);
    margin-left: 350px;
    height: 100%;
    position: relative;
    padding: 15px;
    box-sizing: border-box;
}
.left{
    position: absolute;
    left: 0;
    width: 350px;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
}
</style>
