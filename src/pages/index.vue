<template>
    <div class="surround-box">
        <div class="center-point">
            <div class="circle circle1">1</div>
            <div class="circle circle3">3</div>
            <div class="circle circle5">5</div>
            <div class="circle circle7">7</div>
            <div class="circle circle9">9</div>
            <div class="circle circle11">11</div>
        </div>
    </div>
</template>

<script>
    import API from './../api'
    export default {
        name: "index",
        data(){
            return {
                userInfo:''
            }
        },
        mounted () {
            // if(this.$cookie.get('openId')){
            //     this.getUserInfo();
            // }
        },
        methods: {
            getUserInfo(){
                this.$http.get(API.getUserInfo).then(response => {
                    let res = response.data;
                    this.userInfo = res.data
                });
            },
        }
    }
</script>

<style scoped>
    .center-point{
        position: absolute;
        top:  50%;
        left: 50%;
        width:  100px;
        height:  100px;
        border-radius: 50%;
        margin-left: -50px;
        margin-top: -50px;
        background-color: #fd6251;
    }
    .circle{
        /* 这里一定要绝对定位，这样位置才能铺开来 */
        position: absolute;
        left: 30px;
        top: 30px;
        width: 40px;
        height:  40px;
        line-height: 40px;
        border-radius: 50%;
        border: 1px solid #d5d5d5;
        text-align: center;
        color: #fff;
    }
    .circle1{
        background-color: red;
        /* rotateZ控制方向，每个元素旋转30度，12个元素刚好360度。translateY控制每个元素距中心点的距离 */
        transform: rotateZ(30deg) translateY(80px);
    }
    .circle3{
        background-color: #b99c0a;
        transform: rotateZ(90deg) translateY(80px);
    }
    .circle5{
        background-color: #2d7a47;
        transform: rotateZ(150deg) translateY(80px);
    }
    .circle7{
        background-color: #80044e;
        transform: rotateZ(210deg) translateY(80px);
    }
    .circle9{
        background-color: deeppink;
        transform: rotateZ(270deg) translateY(80px);
    }
    .circle11{
        background-color: #60a560;
        transform: rotateZ(330deg) translateY(80px);
    }
</style>