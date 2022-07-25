<template>
  <div class="box">
    <div class="bg">
      <div style="position: relative; height: 28px">
        <div class="bg-one"></div>
        <div class="bg-four"></div>
        <div class="bg-six"></div>
      </div>
      <div style="position: relative; height: calc(100% - 56px)">
        <div class="bg-two"></div>
        <div style="width: calc(100% - 200px); height: 100%; margin: auto"></div>
        <div class="bg-seven"></div>
      </div>
      <div style="position: relative; height: 28px">
        <div class="bg-three"></div>
        <div class="bg-five"></div>
        <div class="bg-eight"></div>
      </div>
    </div>
    <div class="title">控制面板</div>
      <div class="boxContont flex flex-warp">
        <div class="row4 flexCenter tab" style="height:40px;">
          <div class="btn1 kaiqiguangaianniu btn_1" @click="clickBtn($event,'main_switch')">开始灌溉</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_jysf btn_2" onclick="clickBtn(&quot;btn_jysf&quot;,&quot;feiliao_switch&quot;)">加压施肥</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_ggf btn_3" onclick="clickBtn(&quot;btn_ggf&quot;,&quot;zhushui_switch &quot;)">灌溉阀</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_zff1 btn_4" onclick="clickBtn(&quot;btn_zff1&quot;,&quot;switch_1&quot;)">注肥阀1</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_zff2 btn_5" onclick="clickBtn(&quot;btn_zff2&quot;,&quot;switch_2&quot;)">注肥阀2</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_zff3 btn_6" onclick="clickBtn(&quot;btn_zff3&quot;,&quot;switch_3&quot;)">注肥阀3</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_zff4 btn_7" onclick="clickBtn(&quot;btn_zff4&quot;,&quot;switch_4&quot;)">注肥阀4</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_zff5 btn_8" onclick="clickBtn(&quot;btn_zff5&quot;,&quot;switch_5&quot;)">注肥阀5</div>
        </div>
        <div class="row4 flexCenter" style="height:40px;">
          <div class="btn1 btn_zff6 btn_9" onclick="clickBtn(&quot;btn_zff6&quot;,&quot;switch_6&quot;)">注肥阀6</div>
        </div>
			</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    clickBtn(e,param){
      if(e.currentTarget.getAttribute("class").includes("active")){
          e.target.classList.remove("active")
      }
      else{
          e.target.classList.add("active")
      }
    }
  },
  mounted(){
      this.$bus.$on('code',(code)=>{ // 这里一定要用箭头函数
      console.log(code)
      var targetBtn = document.getElementsByClassName(`btn_${code}`)[0]
      console.log(targetBtn)
      if(targetBtn.getAttribute("class").includes("active")){
        targetBtn.classList.remove("active")
      }
      else{
        targetBtn.classList.add("active")
      }
    })
  }
};
</script>

<style scoped>
@import '../assets/css/lwz.css';
.box{
    height: calc(33% - 10px);
    position: relative;
    margin: 10px 0;
}

.bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 0;
}

.box .title {
    color: #ffffff;
    height: 25px;
    font-size: 12px;
    margin-left: 14px;
    line-height: 25px;
}

.bg-one {
    background: url(../assets/images/left/center1.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
}
.bg-four {
    background: url(../assets/images/left/center4.png);
    width: calc(100% - 200px);
    height: 100%;
    margin: auto;
}
.bg-six {
    background: url(../assets/images/left/center6.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.bg-two {
    background: url(../assets/images/left/center2.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
}
.bg-seven {
    background: url(../assets/images/left/center7.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.bg-three {
    background: url(../assets/images/left/center3.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
}
.bg-five {
    background: url(../assets/images/left/center5.png);
    width: calc(100% - 200px);
    height: 100%;
    margin: auto;
}
.bg-eight {
    background: url(../assets/images/left/center8.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}

.box .boxContont {
    height: calc(100% - 32px);
    padding: 0 5px;
    position: relative;
}


</style>