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
        <div class="row4 flexCenter" style="height:40px;" v-for="item in controlBtns" :key="item.num">
          <div class="btn1" :class="`btn_${item.num}`" @click="clickBtn($event,item.switch)">{{item.name}}</div>
        </div>
			</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      controlBtns:[
        {
            num: '1',
            switch: 'main_switch',
            name: '开始灌溉'
        },
        {
            num: '2',
            switch: 'feiliao_switch',
            name: '加压施肥'
        },
        {
            num: '3',
            switch: 'zhushui_switch',
            name: '灌溉阀'
        },
        {
            num: '4',
            switch: 'switch_1',
            name: '注肥阀1'
        },
        {
            num: '5',
            switch: 'switch_2',
            name: '注肥阀2'
        },
        {
            num: '6',
            switch: 'switch_3',
            name: '注肥阀3'
        },
        {
            num: '7',
            switch: 'switch_4',
            name: '注肥阀4'
        },
        {
            num: '8',
            switch: 'switch_5',
            name: '注肥阀5'
        },
        {
            num: '9',
            switch: 'switch_6',
            name: '注肥阀6'
        },
        
      ]
    }
  },
  methods:{
    clickBtn(e,param){
      // if(e.currentTarget.getAttribute("class").includes("active")){
      //     e.target.classList.remove("active")
      //     console.log(param)
      // }
      // else{
      //     e.target.classList.add("active")
      //     console.log(param)
      // }
      this.$bus.$emit('controlBtn',param)
    }
  },
  mounted(){
    this.$bus.$on('code',(code)=>{ // 这里一定要用箭头函数
      // console.log(code)
      var targetBtn = document.getElementsByClassName(`btn_${code}`)[0]
      // console.log(targetBtn)
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