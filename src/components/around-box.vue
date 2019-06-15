<template>
    <div class="center-point">
        <router-link to="/game">
            <div class="center-button">
                <div><v-icon name="dragon" scale="3"/></div>
                <div>开始游戏</div>
            </div>
        </router-link>
        <div class="circle circle1">
            <router-link to="/game">
                <div class="noroutate1 circle-center">
                    <v-icon name="cash-register" scale="1.5"/>
                    <span class="title">交易明细</span>
                </div>
            </router-link>
        </div>
        <div class="circle circle3">
            <div class="noroutate3 circle-center">
                <v-icon name="baby" scale="1.5"/>
                <span class="title">新手教程</span>
            </div>
        </div>
        <div class="circle circle5">
            <div class="noroutate5 circle-center">
                <v-icon name="cannabis" scale="1.5"/>
                <span class="title">提现转账</span>
            </div>
        </div>
        <div class="circle circle7">
            <div class="noroutate7 circle-center">
                <v-icon name="headset" scale="1.5"/>
                <span class="title">联系客服</span>
            </div>
        </div>
        <div class="circle circle9">
            <div class="noroutate9 circle-center">
                <v-icon name="donate" scale="1.5"/>
                <span class="title">游戏充值</span>
            </div>
        </div>
        <div class="circle circle11">
            <div class="noroutate11 circle-center">
                <v-icon name="gem" scale="1.5"/>
                <span class="title">推广赚钱</span>
            </div>
        </div>
    </div>
</template>

<script>
    import 'vue-awesome/icons/cash-register'
    import 'vue-awesome/icons/donate'
    import 'vue-awesome/icons/cannabis'
    import 'vue-awesome/icons/baby'
    import 'vue-awesome/icons/headset'
    import 'vue-awesome/icons/gem'
    import 'vue-awesome/icons/dragon'
    export default {
        
    }
</script>

<style scoped>
    .center-button {
        width:  100px;
        height:  100px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #d89451;
    }
    .title {
        width: 80px;
        text-align: center;
        position: absolute;
        bottom: -40px;
    }
    .center-point{
        position: relative;
        width:  100px;
        height:  100px;
        border-radius: 50%;
        background-color: white;
    }
    .circle{
        /* 这里一定要绝对定位，这样位置才能铺开来 */
        position: absolute;
        left: 20px;
        top: 10px;
        width: 60px;
        height:  60px;
        line-height: 40px;
        border-radius: 50%;
        border: 2px solid #ffffff;
        color: #fff;
    }
    .circle-center {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .circle1{
        /* rotateZ控制方向，每个元素旋转30度，12个元素刚好360度。translateY控制每个元素距中心点的距离 */
        transform: rotateZ(30deg) translateY(120px) ;
    }
    .noroutate1{
        transform: rotateZ(-30deg);
    }
    .circle3{
        transform: rotateZ(90deg) translateY(120px);
    }
    .noroutate3{
        transform: rotateZ(-90deg);
    }
    .circle5{
        transform: rotateZ(150deg) translateY(120px);
    }
    .noroutate5{
        transform: rotateZ(-150deg);
    }
    .circle7{
        transform: rotateZ(210deg) translateY(120px);
    }
    .noroutate7{
        transform: rotateZ(-210deg);
    }
    .circle9{
        transform: rotateZ(270deg) translateY(120px);
    }
    .noroutate9{
        transform: rotateZ(-270deg);
    }
    .circle11{
        transform: rotateZ(330deg) translateY(120px);
    }
    .noroutate11{
        transform: rotateZ(-330deg);
    }
</style>