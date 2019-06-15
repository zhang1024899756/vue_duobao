<template>
    <div class="wrap">
        <TextMarquee></TextMarquee>
        <div>
            <img class="logo" src="../assets/img/duobao_logo_white.png" alt="logo">
        </div>
        <div class="center">
            <AroundBox></AroundBox>
        </div>
        <div class="user-info">
            <UserInfo></UserInfo>
        </div>
    </div>
</template>

<script>
    import API from './../api'
    import AroundBox from '../components/around-box.vue'
    import TextMarquee from '../components/text-marquee.vue'
    import UserInfo from '../components/user-info.vue'
    export default {
        name: "index",
        components: {
            AroundBox,
            TextMarquee,
            UserInfo,
        },
        data(){
            return {
                userInfo:'',
                navData: [
                    "aaaaaaaaaaaaaaaaaaaaa",
                    "aaaaaaaaaaaaaaaaaaaaa",
                    "aaaaaaaaaaaaaaaaaaaaa",
                ],
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
    .user-info {
        width: 95%;
        background-color: rgb(255, 95, 18);
        position: absolute;
        bottom: 40px;
    }
    .logo {
        display: block;
        margin: 5px auto;
    }
    .center{
        width: 100px;
        margin: 160px auto;
    }
    .wrap {
        height: 100vh;
        padding: 10px;
        //background-color: #eca851;
        background-image: linear-gradient(to bottom right, #ec6a08, #eca851);
        position: relative;
    }
</style>