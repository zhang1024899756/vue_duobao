<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">使用测试号开发在哪里</div>
            <div class="swiper-slide">或许是刚开始用redux的原因</div>
            <div class="swiper-slide">就是抽取需要通信的state</div>
        </div>
    </div>
</template>
<script>
    import Swiper from "swiper"
    export default {
        data() {return {
            mySwiper:null,
        }},
        methods: {
            //初始化swiper
            _initSwiper () {
                this.mySwiper = new Swiper('.swiper-container',{
                    direction: 'horizontal',
                    loop: true,
                    autoplay: true,
                    autoHeight: true,
                })
            }
        },
        mounted() {
            this._initSwiper()
        }
    }
</script>

<style scoped>
    @import "~swiper/dist/css/swiper.css";
    .swiper-container {
        height: 30px;
        background-color: rgba(255, 255, 255, 0.24);
        border-radius: 5px;
    }
    .swiper-slide {
        line-height: 30px;
        text-align: center;
        color: white;
    }
</style>