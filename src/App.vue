<template>
    <router-view></router-view>
</template>

<script>
  import API from './api'
  import wx from 'weixin-js-sdk'
  import util from './util/index'
  export default {
    name: 'app',
    mounted(){
      //this.checkUserAuth();
    },
    methods: {
      // 检查用户是否授权过
      checkUserAuth(){
        let openId = this.$cookie.get('openId');
        if(!openId){
          window.location.href = API.wechatRedirect;
        }else{
          //this.getWechatConfig();
        }
      },
      // 获取微信配置信息
      // 获取微信配置信息
      getWechatConfig(){
        this.$http.get(API.wechatConfig+'?url='+location.href.split('#')[0])
          .then(response => {
            let res = response.data;
            if(res.code == 0){
              let data = res.data;
              wx.config({
                debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名
                jsApiList: data.jsApiList // 必填，需要使用的JS接口列表
              })
              wx.ready(()=>{
                util.initShareInfo(wx);
              })
            }
        })
      }
    }
  }
</script>

<style>
</style>
