<template>
    <div class="center">
        <div class="box">
            <!-- 背景框 S -->
            <div class="bg">
                <div style="position: relative; height: 28px">
                    <div class="center1"></div>
                    <div class="center4"></div>
                    <div class="center6"></div>
                </div>
                <div style="position: relative; height: calc(100% - 56px)">
                    <div class="center2"></div>
                    <div style="width: calc(100% - 200px); height: 100%; margin: auto"></div>
                    <div class="center7"></div> 
                </div>
                <div style="position: relative; height: 28px">
                    <div class="center3"></div>
                    <div class="center5"></div>
                    <div class="center8"></div>
                </div>
            </div>
            <!-- 背景框 E -->
            <div class="title" style="">地图</div>
            <div class="boxContont">
                <div class="main_box">
                    <!--左侧主体-->
                    <div class="left_main">
                        <!--施肥桶-->
                        <div class="pot_cont">
                            <!--肥桶A-->
                            <div class="pot_box" style="height: 55%;">
                                <a><span>A&nbsp;-&nbsp;</span><span class="boxL">300L</span></a>
                                <div class="pot_water pot_water_one">
                                    <ul class="water_bg">
                                        <li class="water_top"></li>
                                        <li class="water_bottom"></li>
                                    </ul>
                                    <div class="water_scale"></div>
                                </div>
                                <i class="switch_1 btn_s btn_off" fn="shuixiang2" code="4" shuiliu="8"></i>
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
.center {
    width: calc(100% - 350px);
    margin-left: 350px;
    height: calc(100% - 69px);
    position: relative;
    padding: 15px;
    box-sizing: border-box;
}
.center .box {
    position: relative;
    margin: 10px 0;
    height: 100%;
}
/* 背景框 S */
.bg {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    /* z-index: -1; */
}
.bg .center1 {
    background: url(../assets/images/shuifei/center1.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
}
.bg .center4 {
    background: url(../assets/images/shuifei/center4.png);
    width: calc(100% - 200px);
    height: 100%;
    margin: auto;
}
.bg .center6 {
    background: url(../assets/images/shuifei/center6.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.bg .center2 {
    background: url(../assets/images/shuifei/center2.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
}
.bg .center7 {
    background: url(../assets/images/shuifei/center7.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
.bg .center3 {
    background: url(../assets/images/shuifei/center3.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
}
.bg .center5 {
    background: url(../assets/images/shuifei/center5.png);
    width: calc(100% - 200px);
    height: 100%;
    margin: auto;
}
.bg .center8 {
    background: url(../assets/images/shuifei/center8.png);
    background-size: 100% 100%;
    width: 100px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
}
/* 背景框 E */

.box .title {
    color: #ffffff;
    height: 25px;
    font-size: 12px;
    margin-left: 14px;
    line-height: 25px;
    text-indent: 8px;
}

.box .boxContont {
    height: calc(100% - 32px);
    padding: 0 5px;
    position: relative;
}
.main_box {
    width: calc(100% - 74px);
    height: 100%;
    background-image: url(../assets/images/shuifei/00main_pipe.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
}

/* 左侧主体 S */
.left_main {
    width: 100%;
    height: 100%;
}
/* 施肥桶 */
.pot_cont {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    height: 100%;
    width: 100%;
}
.pot_box {
    position: absolute;
    left: 0;
    top: 0px;
    width: 10.5%;
    height: 60.5%;
    background-image: url(../assets/images/shuifei/04-1pot_aon.png);
    background-position: top;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>