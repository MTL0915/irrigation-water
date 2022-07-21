<template>
    <div class="header">
        <div class="header-left"></div>
        <div class="header-middle">
            <div class="led-box">
                <span class="led-times">{{dateTime}}</span>
                <span class="led-times-info">{{dateYear}}{{dateWeek}}</span>
            </div>
            <div class="progress-title">广东省农业面源污染在线监控物联平台</div>
            <div class="jingbao-box">
                <img class="jingbao" src="../assets/images/header/cb.png">
            </div> 
            <div class="tianqi">
				<div>
					<span>空气湿度 :</span><span class="valChange">18.5</span><span>%</span></div>
				<div>
					<span>空气温度 :</span><span class="valChange">23.0</span><span>℃</span></div>
			</div>        
        </div>
        <div class="header-right"></div>
    </div>
</template>

<script>
// 显示时间
import dayjs from 'dayjs'
export default {
    name:'Header',
    data () {
        return {
            dateTime: null,
            dateYear: null,
            dateWeek: null,
            weekday: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            timer:null
        };
    },
    mounted () {
        this.timer = setInterval(() => {
            const date = dayjs(new Date())
            this.dateTime = date.format('HH:mm:ss');
            this.dateYear = date.format('YYYY-MM-DD' + ' ');
            this.dateWeek = date.format(this.weekday[date.day()]);
        }, 1000)
    },
    beforeDestroy(){
        if(this.timer){
            clearInterval(this.timer)
        }
    }
}
</script>

<style scoped lang="scss">
// $color:pink;
// .header{
// 	background-color:$color;
// }
.header{
    display: flex;
    height: 69px;

    .header-left{
        background: url(../assets/images/header/right3.png);
        background-size: 100%;
        width: 66px;
        height: 69px;
    }

    .header-middle{
        background: url(../assets/images/header/right2.png);
        background-size: clip;
        width: calc(100% - 66px - 74px);
        height: 69px;
        display: flex;

        .led-box {
            height: 65px;
            line-height: 65px;
            width: 205px;

            .led-times {
                font-family: UniDreamLED;
                font-size: 28px;
                margin-right: 15px;
            }
        }

        .progress-title{
            font-size: 32px;
            color: #01f1ff;
            line-height: 68px;
            text-align: center;
            flex-grow: 1;
        }

        .jingbao-box{
            display: flex;
            align-items: center;
            width: 60px;
        }

        .jingbao{
            cursor: pointer;
            width: 32px;
            height: 32px;  
        }

        .tianqi {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            color: #01f1ff;
        }

    }

    .header-right{
        background: url(../assets/images/header/right3.png);
        background-size: 100%;
        width: 66px;
        height: 69px;
        transform: rotateY(180deg);
    }
}
</style>