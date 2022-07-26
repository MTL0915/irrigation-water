<template>
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
                        <!--循环遍历每一个桶-->
                        <div class="pot_box" v-for="item in pots" :key="item.tag" :class="`pot_box${item.num}`">
                            <a><span>{{item.tag}}&nbsp;-&nbsp;</span><span class="boxL">{{item.volume}}L</span></a>
                            <div class="pot_water" :class="`pot_water_${item.EnglishNum}`">
                                <ul class="water_bg">
                                    <li class="water_top" :class="`water_top${item.num}`"></li>
                                    <li class="water_bottom"></li>
                                </ul>
                                <div class="water_scale"></div>
                            </div>
                            <i @click="btnClick($event)" class="btn_s btn_off" :class="`switch_${item.num}`" fn="shuixiang2" :code="`${item.code}`" :shuiliu="`${item.shuiliu}`"></i>
                        </div>
                    </div>
                    <!--底部管道开关定位-->
                    <div class="switch_cont">
                        <a @click="btnClick($event)" class="main_switch btn_s btn_off" code="1" shuiliu="1,2,3"></a>
                        <a @click="btnClick($event)" class="feiliao_switch btn_s btn_off" fn="ylcqg" code="2" shuiliu="4,5,6,7"></a>
                        <a @click="btnClick($event)" class="zhushui_switch btn_s btn_off" code="3" shuiliu="19,20,21,22,23,24,25,26,27,28,29,30,31"></a>
                        <span class="stress_data">0Mpa</span>
                        <span class="ph_data">0</span>
                        <span class="nd_data">0<br>us<br>/cn</span>
                        <div class="hunheji" where="1,2" or="4,5,6,7,8,9,10,11" style="display:none;position:absolute;height:13%;overflow: hidden;">
                            <div class="luoxuan" style="">
                                <img style="display:block;height:100%" class="" src="../assets/images/shuifei/luoxuan1.png">
                                <img style="display:block;height:100%" class="" src="../assets/images/shuifei/luoxuan1.png">
                                <img style="display:block;height:100%" class="" src="../assets/images/shuifei/luoxuan1.png">
                                <img style="height:100%" class="" src="../assets/images/shuifei/luoxuan1.png">
                            </div>
                        </div>
                    </div>
                    <!-- 水流标签 -->
                    <div>
                        <!-- <div class='shuiliu shuiliu1 shuiliuAnimateR' where='1'></div> -->
                        <div class="shuiliu shuiliu1" where="1" style="position:absolute;height:14px;width:60px;overflow: hidden;">
                            <div class="shuiliu_r" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                                <img style="height:50%;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                            </div>
                        </div>
                        <!-- <div class='shuiliu shuiliu2 shuiliuAnimateR' where='1'></div> -->
                        <div class="shuiliu shuiliu2" where="1" style="">
                            <div class="shuiliu_r" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                                <img style="height:50%;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                            </div>
                        </div>
                        <!-- <div class='shuiliu shuiliu3 shuiliuAnimateT' where='1'></div> -->
                        <div class="shuiliu shuiliu3" where="1" style="position:absolute;height:60px;overflow: hidden;">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <!-- <div class='shuiliu shuiliu4 shuiliuAnimateR' where='1,2'></div> -->
                        <div class="shuiliu shuiliu4" where="1,2" style="">
                            <div class="shuiliu_r" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                                <img style="height:50%;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                            </div>
                        </div>
                        <!-- <div class='shuiliu shuiliu5 shuiliuAnimateT' where='1,2'></div> -->
                        <div class="shuiliu shuiliu5" where="1,2" style="position:absolute;height:60px;overflow: hidden;">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <!-- <div class='shuiliu shuiliu6 shuiliuAnimateL' where='1,2'></div> -->
                        <div class="shuiliu shuiliu6" where="1,2" style="">
                            <div class="shuiliu_l" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_l.png">
                                <img style="height:50%;" class="" src="../assets/images/shuifei/shuiliu_l.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu7" where="1,2">
                            <div class="shuiliu_l" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_l.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu8" where="1,2,4">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu9 " where="1,2,5">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu10 " where="1,2,6">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu11 " where="1,2,7">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu12 " where="1,2,8">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu13 " where="1,2,9">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu14 " where="1,2,10">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu15 " where="1,2,11">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>

                        <div class="shuiliu shuiliu16 " where="1,2" or="4,5,6,7,8,9,10,11">
                            <div class="shuiliu_r" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                                <img style="height:50%;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu17" where="1,2" or="4,5,6,7,8,9,10,11">
                            <div class="shuiliu_r" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                                <img style="height:50%;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                            </div>
                        </div>
                        <!-- <div class='shuiliu shuiliu18 shuiliuAnimateB' style='display:none;'  where='1,2' or='4,5,6,7,8,9,10,11'></div> -->
                        <div class="shuiliu shuiliu19" where="1,3">
                            <div class="shuiliu_r" style="width: 200px;">
                                <img style="height:50%;margin: 0px 43px;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                                <img style="height:50%;" class="" src="../assets/images/shuifei/shuiliu_r.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu20" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu21" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu22" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu23 " where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuB" style="">
                                <img style="display:block;height:50%;margin: 0 0" class="" src="../assets/images/shuifei/shuiliu_b.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu24 " where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuB" style="">
                                <img style="display:block;height:50%;margin: 0 0" class="" src="../assets/images/shuifei/shuiliu_b.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu25 " where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuB" style="">
                                <img style="display:block;height:50%;margin: 0 0" class="" src="../assets/images/shuifei/shuiliu_b.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu26" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu27" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu28" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuT" style="">
                                <img style="display:block;height:50%;margin: 55px 0" class="" src="../assets/images/shuifei/shuiliu_t.png">
                                <img style="height:50%;display:block;" class="" src="../assets/images/shuifei/shuiliu_t.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu29 " where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuB" style="">
                                <img style="display:block;height:50%;margin: 0 0" class="" src="../assets/images/shuifei/shuiliu_b.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu30 " where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuB" style="">
                                <img style="display:block;height:50%;margin: 0 0" class="" src="../assets/images/shuifei/shuiliu_b.png">
                            </div>
                        </div>
                        <div class="shuiliu shuiliu31 " where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3">
                            <div class="shuiliuB" style="">
                                <img style="display:block;height:50%;margin: 0 0" class="" src="../assets/images/shuifei/shuiliu_b.png">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧主体 -->
                <div class="right_main">
                    <!--喷灌阀-->
                    <ul class="pg_valve" v-for="item in penguanArr" :key="item.name">
                        <li v-for="liItem in item.list" :key="liItem.number">
                            <span class="valve_icon"></span>
                            <a>{{liItem.dikuaiName}}</a>
                            <a>{{liItem.dichifaName}}</a>
                            <div class="penshui1" where="1,2" or="4,5,6,7,8,9,10,11" where1="1,3" style="display: none;"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'shuifei',
    data(){
        return{
            // 肥料桶
            pots:[
                {
                    tag: 'A',
                    num: '1',
                    EnglishNum: 'one',
                    volume: 300,
                    code: 4,
                    shuiliu: 8
                },
                {
                    tag: 'B',
                    num: '2',
                    EnglishNum: 'two',
                    volume: 300,
                    code: 5,
                    shuiliu: 9
                },
                {
                    tag: 'C',
                    num: '3',
                    EnglishNum: 'three',
                    volume: 300,
                    code: 6,
                    shuiliu: 10
                },
                {
                    tag: 'D',
                    num: '4',
                    EnglishNum: 'four',
                    volume: 300,
                    code: 7,
                    shuiliu: 11
                },
                {
                    tag: 'E',
                    num: '5',
                    EnglishNum: 'five',
                    volume: 300,
                    code: 8,
                    shuiliu: 12
                },
                {
                    tag: 'F',
                    num: '6',
                    EnglishNum: 'six',
                    volume: 300,
                    code: 9,
                    shuiliu: 13
                },
                {
                    tag: 'G',
                    num: '7',
                    EnglishNum: 'seven',
                    volume: 300,
                    code: 10,
                    shuiliu: 14
                },
                {
                    tag: 'H',
                    num: '8',
                    EnglishNum: 'eight',
                    volume: 300,
                    code: 11,
                    shuiliu: 15
                }
            ],
            // 喷灌阀
            penguanArr:[
                {
                    name: 'pg_value1',
                    list:[
                        {
                            number: 1,
                            dikuaiName: '#1地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 2,
                            dikuaiName: '#2地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 3,
                            dikuaiName: '#3地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 4,
                            dikuaiName: '#4地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 5,
                            dikuaiName: '#5地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 6,
                            dikuaiName: '#6地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                },
                {
                    name: 'pg_value2',
                    list:[
                        {
                            number: 7,
                            dikuaiName: '#7地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 8,
                            dikuaiName: '#8地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 9,
                            dikuaiName: '#9地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 10,
                            dikuaiName: '#10地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 11,
                            dikuaiName: '#11地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 12,
                            dikuaiName: '#12地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                },
                {
                    name: 'pg_value3',
                    list:[
                        {
                            number: 13,
                            dikuaiName: '#13地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 14,
                            dikuaiName: '#14地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 15,
                            dikuaiName: '#15地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 16,
                            dikuaiName: '#16地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 17,
                            dikuaiName: '#17地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 18,
                            dikuaiName: '#18地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                },
                {
                    name: 'pg_value4',
                    list:[
                        {
                            number: 19,
                            dikuaiName: '#19地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 20,
                            dikuaiName: '#20地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 21,
                            dikuaiName: '#21地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 22,
                            dikuaiName: '#22地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 23,
                            dikuaiName: '#23地块',
                            dichifaName: '电池阀A'
                        },
                        {
                            number: 24,
                            dikuaiName: '#24地块',
                            dichifaName: '电池阀A'
                        }
                    ]
                }
            ]
        }
    },
    methods:{
        // 控制按钮开关
        btnClick(e){
            console.log(e.target)   
            var targetBtn = e.currentTarget
            this.doubleControl(targetBtn)

        },
        // 具体控制逻辑，为了能双向按钮控制
        doubleControl(targetBtn){
            // 用事件总线把对应按钮的数字传到控制面板组件
            var code = targetBtn.getAttribute("code");
            this.$bus.$emit('code',code)
            if(targetBtn.getAttribute("class").includes("btn_off")){
                targetBtn.classList.add("btn_on")
                targetBtn.classList.remove("btn_off")
            }
            else{
                targetBtn.classList.add("btn_off")
                targetBtn.classList.remove("btn_on")
            }
            // 调整水流，包括水流动画与喷水器动画
            this.tiaozhengshuiliu()
        },
        tiaozhengshuiliu(){
            // 获取所有流水
	        var shuiliuBox = document.getElementsByClassName('shuiliu')

            // 获取目前开关的情况
            var openKey = document.getElementsByClassName("btn_s btn_on"); 
            // 把openKey这个类数组变成真正的数组       
            openKey = Array.prototype.slice.apply(openKey);
            openKey = openKey.map((e)=>{ return e.getAttribute("code"); })
            // console.log(openKey) 
            
            for( var i = 0 ; i < shuiliuBox.length ; i++ ){
                var shuiliuItem = shuiliuBox[i];
                var where = shuiliuItem.getAttribute("where");
                if( !where ) continue;
                where = where.split(",");
                var or = shuiliuItem.getAttribute("or");
                if( or ) or = or.split(",");
                var bool = true;
                for( var ii in where ){
                    if( openKey.indexOf(where[ii]) === -1 ){
                        bool = false;
                        break;
                    }
                } 
                if( or && bool ){
                    bool = false;
                    for( var ii in or ){
                        if( openKey.indexOf(or[ii]) !== -1 ){
                            bool = true;
                            break;
                        }
                    }
                }
                var bool1 = true;
                var where1 = shuiliuItem.getAttribute("where1");
                if( !where1 ) {
                    bool1=false;
                }else{
                    where1 = where1.split(",");
                    var or1 = shuiliuItem.getAttribute("or1");
                    if( or1 ) or1 = or1.split(",");
                    for( var ii in where1 ){
                        if( openKey.indexOf(where1[ii]) === -1 ){
                            bool1 = false;
                            break;
                        }
                    }
                    if( or1 && bool1 ){
                        bool1 = false;
                        for( var ii in or1 ){
                            if( openKey.indexOf(or1[ii]) !== -1 ){
                                bool1 = true;
                                break;
                            }
                        }
                    }
                }
                if( bool || bool1 ){
                    shuiliuItem.style.display = 'block'
                    // shuiliuItem.show();
                }else{
                    shuiliuItem.style.display = 'none'
                    // shuiliuItem.hide();
                }
            }

            // 肥水混合与喷水器动画
            // 所有的噴水器，加上肥水混合器
            var penshui = document.getElementsByClassName('penshui1')
            penshui = Array.prototype.slice.apply(penshui);
            var hunheji = document.getElementsByClassName('hunheji')
            hunheji = Array.prototype.slice.apply(hunheji);

            var penshuiBox = penshui.concat(hunheji)

            for( var i = 0 ; i < penshuiBox.length ; i++ ){
                var penshuiItem = penshuiBox[i];
                var where = penshuiItem.getAttribute("where");
                if( !where ) continue;
                where = where.split(",");
                var or = penshuiItem.getAttribute("or");
                if( or ) or = or.split(",");
                var bool = true;
                for( var ii in where ){
                    if( openKey.indexOf(where[ii]) === -1 ){
                        bool = false;
                        break;
                    }
                } 
                if( or && bool ){
                    bool = false;
                    for( var ii in or ){
                        if( openKey.indexOf(or[ii]) !== -1 ){						
                            bool = true;
                            break;
                        }
                    }
                }
                
                var bool1 = true;
                var where1 = penshuiItem.getAttribute("where1");
                if( !where1 ) {
                    bool1=false;
                }else{
                    where1 = where1.split(",");
                    var or1 = penshuiItem.getAttribute("or1");
                    if( or1 ) or1 = or1.split(",");		
                    for( var ii in where1 ){
                        if( openKey.indexOf(where1[ii]) === -1 ){
                            bool1 = false;
                            break;
                        }
                    }
                    if( or1 && bool1 ){
                        bool1 = false;
                        for( var ii in or1 ){
                            if( openKey.indexOf(or1[ii]) !== -1 ){						
                                bool1 = true;
                                break;
                            }
                        }
                    }
                }
                
                if( bool || bool1 ){
                    penshuiItem.style.display = 'block'
                    // ndcqg(null,true)
                    // phcqg(null,true)
                    // sq(null, true)
                }else{
                    penshuiItem.style.display = 'none'
                    // ndcqg(null,false)
                    // phcqg(null,false)
                    // sq(null, false)
                }
            }

        }
    },
    mounted(){
        this.$bus.$on('controlBtn',(param)=>{
            console.log(param)
            var targetBtn = document.getElementsByClassName(param)[0]
            this.doubleControl(targetBtn)
        })
    }
};
</script>

<style scoped>

.box {
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

/*主体>*/
.main_box {
	width: calc(100% - 74px);
	height: 100%;
	background-image: url(../assets/images/shuifei/00main_pipe.png);
	background-repeat: no-repeat;
	background-size: 100% 100%;
	position: absolute;
}

/*左侧主体*/
.left_main {
	width: 100%;
	height: 100%;
}

/*施肥桶样式*/
.pot_cont {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
	height: 100%;
	width:100%;
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

/*施肥桶顶部文字描述+容量*/
.pot_box a {
	position: relative;
	left: 8px;
	top: 0px;
	color: #e5596b;
	font-weight: bold;
}

.pot_box a span {
	color: #2d94e3;
	font-size: 13px;
}

/*施肥桶填充水*/
/* .pot_water {
	width: 62px;
	height: 93px;
	position: relative;
	left: 9px;
	top: 8px;
	overflow: hidden
} */

.water_bg {
	position: absolute;
	bottom: 0px;
	width: 100%;
}

.water_bg li {
	width: 100%;
}

.water_top {
	height: 65px;
	max-height: 66px;
	background-color: #9bcdf2;
}

.water_bottom {
	height: 22px;
	background-image: url(../assets/images/shuifei/waterbg_bottom.png);
	background-repeat: no-repeat;
	background-size: 100%;
}

/*施肥桶刻度*/
.water_scale {
	position: absolute;
	left: 30px;
	bottom: 0px;
	width: 31px;
	height: 93px;
	background-image: url(../assets/images/shuifei/03scale.png);
	background-repeat: no-repeat;
}
.pot_box1 {
    height: 55%;
}

.water_top1 {
	height: 65px;
}

.pot_box2 {
	left: 7%;
	background-image: url(../assets/images/shuifei/04-2pot_bon.png);
	height: 60.5%;
}

.water_top2 {
	height: 65px;
}

.pot_box3 {
	left: 14%;
	background-image: url(../assets/images/shuifei/04-2pot_bon.png);
	height: 60.5%;
}

.water_top3 {
	height: 65px;
}

.pot_box4 {
	left: 21%;
    background-image: url(../assets/images/shuifei/04-2pot_bon.png);
	height: 60.5%;
}

.water_top4 {
	height: 65px;
}

.pot_box5 {
	left: 28%;
	background-image: url(../assets/images/shuifei/04-2pot_bon.png);
	height: 60.5%;
}

.water_top5 {
	height: 65px;
}

.pot_box6 {
    left: 35%;
    background-image: url(../assets/images/shuifei/04-2pot_bon.png);
	height: 60.5%;
}

.water_top6 {
	height: 65px;
}

.pot_box7 {
    left: 42%;
    background-image: url(../assets/images/shuifei/04-2pot_bon.png);
	height: 60.5%;
}

.water_top7 {
	height: 65px;
}

.pot_box8 {
    left: 49%;
    background-image: url(../assets/images/shuifei/04-2pot_bon.png);
	height: 60.5%;
}

.water_top8 {
	height: 65px;
}

/*底部相关开关+仪表数据定位*/
.switch_cont {
	position: relative;
	height: 100%;
}

.switch_cont a {
	position: absolute;
	top: 0px;
	left: 0px;
}

.switch_cont span {
	position: absolute;
	color: #1f9eff;
	text-align: center;
}

.switch_cont .main_switch {
	left: 2%;
	top: 87%;
}

.switch_1 {
	right: 39%;
	bottom: 4%;
	position: absolute;
}

.switch_2 {
	right: 39%;
	bottom: 13%;
	position: absolute;
}

.switch_3 {
	right: 39%;
	bottom: 13%;
	position: absolute;
}

.switch_4 {
	right: 39%;
	bottom: 13%;
	position: absolute;
}

.switch_5 {
	right: 39%;
	bottom: 13%;
	position: absolute;
}

.switch_6 {
	right: 39%;
	bottom: 13%;
	position: absolute;
}

.switch_7 {
	right: 39%;
	bottom: 13%;
	position: absolute;
}

.switch_8 {
	right: 39%;
	bottom: 13%;
	position: absolute;
}

.switch_cont .feiliao_switch {
	left: 25.8%;
	top: 75.3%;
}

.switch_cont .zhushui_switch {
	left: 35.5%;
	top: 95.5%;
}

.btn_off {
	background-image: url(../assets/images/shuifei/02-4smswitch_off.png);
}

.btn_s {
	width: 22px;
	height: 22px;
	cursor: pointer;
	z-index:9;
	background-size: cover;
}

.btn_on {
	background-image: url(../assets/images/shuifei/02-3smswitch_on.png);
}

.switch_cont .stress_data {
	left: 37%;
	top: 75.5%;
	z-index: 9;
}

.switch_cont .ph_data {
	left: 67.2%;
	top: 61%;
	z-index: 9;
}

.switch_cont .nd_data {
	left: 67%;
	top: 72%;
	z-index: 9;
}

.pg_valve {
	float: left;
	/* margin-left: 25px; */
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
    width: 58px;
}

.pg_valve li {
	/* overflow: hidden; */
	margin-bottom: 15px;
	height: 60px;
	position: relative;
}

.pg_valve li * {
	float: left;
	clear: left;
}

.valve_icon {
	width: 48px;
	height: 30px;
	background-image: url(../assets/images/shuifei/05-1valve_on.png);
	background-position: center;
	background-repeat: no-repeat;
}

.pg_valve li a {
	margin-left: 12px;
	color: #7a8399;
}

.margin_left {
	/* margin-left: 39px; */
}

.pg_valve3 .valve_icon {
	background-image: url(../assets/images/shuifei/05-2valve_off.png);
}

.pg_valve4 .valve_icon {
	background-image: url(../assets/images/shuifei/05-3valve_no.png);
}


.shuiliu {
	position: absolute;
	width:50px;
	height: 13px;
	display: none;
	z-index: 9;
	overflow: hidden;
}

.shuiliu.show {
	display: block;
}

.hunheji {
	left: 66.2%!important;
	top: 37.5%!important;
	width: 36px;
	z-index: 9;
	height: 85px;
	/* background: url(images/luoxuan.png); */
}

.shuiliu1 {
    left: 3%;
    top: 96.5%;
	position: absolute;
	height: 14px;
	width: 60px;
	overflow: hidden;
}

.shuiliu2 {
	left: 24%;
	top: 96.5%;
	position: absolute;
	height: 14px;
	width: 60px;
	overflow: hidden;
}


.shuiliu3 {
	left: 19.4%;
	top: 81%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu4 {
	left: 30%;
	top: 75.96%;
	height: 13px;
	/* background: url(images/shuiliu_r.png); */
	width: 47px;
}

.shuiliu5 {
	left: 55.4%;
	top: 64%;
	width: 13px;
	/* background: url(images/shuiliu_T.png); */
	height: 47px;
}

.shuiliu6 {
	left: 44%;
	top: 60.5%;
	width: 47px;
	/* background: url(images/shuiliu_l.png); */
}

.shuiliu7 {
	left: 20%;
	top: 60.5%;
	width: 47px;
	/* background: url(images/shuiliu_l.png); */
}

.shuiliu8 {
	left: 5.2%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu9 {
	left: 12%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu10 {
	left: 19%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}
.shuiliu11 {
	left: 26%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}
.shuiliu12 {
	left: 33%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}
.shuiliu13 {
	left: 40%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu14 {
	left: 47%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu15 {
	left: 54%;
	top: 40%;
	height: 47px;
	width: 13px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu16 {
	left: 20%;
	top: 25.2%;
	width: 47px;
	/* background: url(images/shuiliu_R.png); */
}

.shuiliu17 {
	left: 57%;
	top: 25.3%;
	width: 47px;
	/* background: url(images/shuiliu_R.png); */
}

.shuiliu18 {
	left: 817px;
	top: 203px;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_B.png); */
}

.shuiliu19 {
	left: 60%;
	top: 96%;
	width: 47px;
	/* background: url(images/shuiliu_r.png); */
}

.shuiliu20 {
	left: 72.9%;
	top: 80%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu21 {
	left: 72.9%;
	top: 50%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu22 {
	left: 72.9%;
	top: 20%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu23 {
	left: 81.5%;
	top: 80%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_b.png); */
}

.shuiliu24 {
	left: 81.5%;
	top: 45%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_b.png); */
}

.shuiliu25 {
	left: 81.5%;
	top: 20%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_b.png); */
}

.shuiliu26 {
	left: 90%;
	top: 80%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu27 {
	left: 90%;
	top: 50%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu28 {
	left: 90%;
	top: 20%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_t.png); */
}

.shuiliu29 {
	left: 98.6%;
	top: 80%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_b.png); */
}

.shuiliu30 {
	left: 98.5%;
	top: 50%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_b.png); */
}

.shuiliu31 {
	left: 98.5%;
	top: 20%;
	width: 13px;
	height: 47px;
	/* background: url(images/shuiliu_b.png); */
}

.penshui1 {
	left: calc(100% - 9px);
	top: 0;
	width: 19px;
	height: 35px;
	background: url(../assets/images/shuifei/penshui.png);
	/* transform: rotateZ(90deg); */
	background-position: 0px 0px;
	background-repeat: no-repeat;
	animation: penshuiAnimate 1.5s infinite linear;
	position: absolute;
	display: none;
}
@keyframes penshuiAnimate{
	from{ background-position: -32px 0px ; }
	to{ background-position: 0px 0px; }
}

.shuiliuAnimateR {
	animation: slr 0.75s infinite;
}
@keyframes slr{
	from{ transform: translateX(0); }
	to{ transform: translateX(50%); }
}

.shuiliuAnimateT {
	animation: slt 0.75s infinite;
}
@keyframes slt{
	from{ transform: translateY(0); }
	to{ transform: translateY(-50%); }
}

.shuiliuAnimateL {
	animation: sll 0.75s infinite;
}
@keyframes sll{
	from{ transform: translateX(0); }
	to{ transform: translateX(-50%); }
}

.shuiliuAnimateB {
	animation: slb 0.75s infinite;
}
@keyframes slb {
	from{ transform: translateY(0); }
	to{ transform: translateY(50%); }
}


/* 水流动画 */
* {
    -ms-user-select: none;
}
@keyframes luoxuan {
    from {
        transform: translateY(-50%);
    }

    to {
        transform: translateY(0%);
    }
}

.luoxuan {
    animation: luoxuan 1s linear infinite;
}

@keyframes shuiliuT {
    from {
        transform: translateY(0px);
    }

    to {
        transform: translateY(-220px);
    }
}

.shuiliuT {
    animation: shuiliuT 3s linear infinite;
}

@keyframes shuiliu_r {
    from {
        transform: translateX(-100px);
    }

    to {
        transform: translateX(50px);
    }
}

.shuiliu_r {
    animation: shuiliu_r 3s linear infinite;
}

@keyframes shuiliu_l {
    from {
        transform: translateX(50px);
    }

    to {
        transform: translateX(-150px);
    }
}

.shuiliu_l {
    animation: shuiliu_l 3s linear infinite;
}

@keyframes shuiliuB {
    from {
        transform: translateY(-100px);
    }

    to {
        transform: translateY(50px);
    }
}

.shuiliuB {
    animation: shuiliuB 3s linear infinite;
}



/* 响应式媒体查询 */
@media screen and (min-width: 1800px) {
	.right_main {
	    position: absolute;
	    top: 0;
	    right: -3.5%;
	    width: 29.5%;
	    display: flex;
	    justify-content: space-between;
	    height: 100%;
	}
	
	.pot_water {
		width: 55%;
		height: 26%;
		position: relative;
		left: 3%;
		/* top: 8px; */
		overflow: hidden;
	}
	
	.pot_water.pot_water_one {
		height: 28.5%;
	}
	
	.hunheji {
		left: 66.7%!important;
	}
	
	.pot_box a {
		top : 8px;
		left: 16px;
	}
	
}

@media (min-width: 1467px) and (max-width: 1799px) {
	/*右侧灌溉阀定位*/
	.right_main {
		position: absolute;
		top: 0;
		right: -55px;
		width: 30.5%;
		display: flex;
		justify-content: space-between;
		height:100%;
        z-index: 2;
	}
	.pot_water {
		width: 55%;
		height: 26%;
		position: relative;
		left: 3%;
		/* top: 8px; */
		overflow: hidden;
	}
	.pot_water.pot_water_one {
		height: 28.5%;
	}
	.hunheji {
		left: 66.5%!important;
	}
}

@media screen and (max-width: 1466px) {
	.pot_box a {
		top : 0px;
		left: 2px;
	}
	.pot_water {
		width: 55%;
		height: 26%;
		position: relative;
		left: 3%;
		/* top: 8px; */
		overflow: hidden;
	}
	.pot_water.pot_water_one {
		height: 28.5%;
	}
	/*右侧灌溉阀定位*/
	.right_main {
		position: absolute;
		top: 0;
		right: -55px;
		width: 32%;
		display: flex;
		justify-content: space-between;
		height:100%;
        z-index: 2;
	}
	.btn_s {
		width: 15px;
		height: 15px;
	}
	.shuiliu8 {
		height: 39px;
	}
	.shuiliu9 , .shuiliu10 , .shuiliu11 , .shuiliu12 , .shuiliu13 {
		top: 40%;
		height: 39px;
	}
	.shuiliu10 {
		
	}
}

@media (min-width: 1399px) and (max-width: 1599px) {
	/*右侧灌溉阀定位*/
	.right_main {
		position: absolute;
		top: 0;
		right: -55px;
		width: 31.5%;
		display: flex;
		justify-content: space-between;
		height:100%
	}
}

</style>