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
    <div class="title">墒情检测数据</div>
      <div class="boxContont flex">
        <div class="nyy_device">
          <div class="pluginBox" style="width: 100%; height: 100%; font-size: 16px; z-index: 2;">
            <div class="moisturize">
              <div class="shendu">
                <div class="shendu_name">10cm</div>
                <div class="shendu_info">
                  <img src="http://121.32.129.19:8100/picture/iot/upload/sensor/2020-03-21/39e43551-a552-4e84-8151-b96f2c837c5f.png">
                  <span>湿度 </span>
                  <span class="valChange sd1" val="14" random="0.5">14.1</span>
                  <span>%</span>
                  <img src="http://121.32.129.19:8100/picture/iot/upload/sensor/2020-03-21/d8a8ac60-f98f-4f26-8e10-9fc9a220f6cf.png">
                  <span>温度 </span>
                  <span class="valChange wd1" val="24" random="0.5">23.8</span>
                  <span>℃</span>
                </div>
              </div>
              <div class="shendu">
                <div class="shendu_name">20cm</div>
                <div class="shendu_info">
                  <img src="http://121.32.129.19:8100/picture/iot/upload/sensor/2020-03-21/39e43551-a552-4e84-8151-b96f2c837c5f.png">
                  <span>湿度 </span>
                  <span class="valChange sd2" val="13" random="0.5">13.0</span>
                  <span>%</span>
                  <img src="http://121.32.129.19:8100/picture/iot/upload/sensor/2020-03-21/d8a8ac60-f98f-4f26-8e10-9fc9a220f6cf.png">
                  <span>温度 </span>
                  <span class="valChange wd2" val="22" random="0.5">22.0</span>
                  <span>℃</span>
                </div>
              </div>
              <div class="shendu" style="border-bottom: none;">
                <div class="shendu_name">40cm</div>
                <div class="shendu_info">
                  <img src="http://121.32.129.19:8100/picture/iot/upload/sensor/2020-03-21/39e43551-a552-4e84-8151-b96f2c837c5f.png">
                  <span>湿度 </span>
                  <span class="valChange sd3" val="16" random="0.5">16.0</span>
                  <span>%</span>
                  <img src="http://121.32.129.19:8100/picture/iot/upload/sensor/2020-03-21/d8a8ac60-f98f-4f26-8e10-9fc9a220f6cf.png">
                  <span>温度 </span>
                  <span class="valChange wd3" val="19" random="0.5">19.2</span>
                  <span>℃</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
    z-index: 1;
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

.flex {
    display: flex;
}
/* 原来的代码S */
.nyy_device {
  border-width: 0px;
  border-style: solid;
  border-color: #000000;
  width: 100%;
  height: 96%;
  flex-wrap: wrap;
  overflow-y: auto;
}

.nyy_device .model {
  width: 25%;
  height: 50%;
  float: left;
  cursor: pointer;
  color: #ffffff;
  font-size: 12px;
  display: flex;
  text-align: center;
}

.nyy_device .model:hover {
  background: #00000022;
  border-radius: 4px;
}

.nyy_device .model.active {
  background: #00000022;
  border-radius: 4px;
}

.nyy_device .model img {
  width: 22px;
  height: 22px;
  margin-top: 7px;
}

.nyy_device .model>div {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
}

.nyy_device .valueBox {
  color: #ffffff;
  display: flex;
  font-size: 16px;
}

.nyy_device .valueBox>div {
  width: 100%;
  text-align: center;
}

.nyy_device .img_box {
  align-items: center;
  display: flex;
  justify-content: center;
}

.nyy_device .name {
  margin: 8px 0;
}

.nyy_device .zhi {
  font-family: normal;
  font-size: 12px;
  color: #ffffff;
}

.nyy_device .nm {
  font-family: normal;
  font-size: 12px;
  color: #ffffff;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 原来的代码E */

.moisturize { 
  font-family: normal;
  font-size: 20px;
  color: #ffffff;
  border-width: 0px;
  border-style: solid;
  border-color: #000000;
  width: calc(100% - 33px);
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: auto;
  padding: 10px;
}
.moisturize .shendu { 
  position:relative; 
  height: 33%; 
  border-bottom: solid 1px #333333; 
}
.moisturize .shendu_info {
  font-family: normal; 
  font-size: 20px; 
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 12px 0;
}
.moisturize .shendu_info img { 
  height: 22px; 
}
.moisturize_line { 
  position: absolute;
  left: 5px; 
  width: 3px;
  background: #A9A9A9;
  border-radius: 15px;
  height: calc(100% - 15px) 
}
.moisturize .shendu_name:after { 
  position: absolute;
  left: -18px;
  top: 6px;
  padding: 5px;
  border-radius: 50%;
  background: #4bd3fd; 
}
</style>