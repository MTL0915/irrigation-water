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
    <div class="title">实时监控</div>
    <div class="boxContont flex">
      <iframe src="" style="border:none;"></iframe>
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
</style>