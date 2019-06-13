/**
 * @Description: 公共工具函数定义
 * @author zhangxinyu
 * @date 2019-06-12
*/

export default {

    /**
     * 获取浏览器地址栏参数
     * @param name
     * @returns {string}
     */
    getUrlParam(name){
        let reg = new RegExp('(^|&)'+name+'=([^&]*)');
        let r = window.location.search.substr(1).match(reg);
        if(r!=null)return decodeURIComponent(r[2]);
    },

    initShareInfo(wx){
        let shareInfo = {
            title: '夺宝奇兵', // 分享标题
            desc: '休闲娱乐，尽在夺宝奇兵～', // 分享描述
            link: 'http://weixin.ksmvc.com/#/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
        }
        wx.onMenuShareAppMessage(shareInfo);
        wx.onMenuShareTimeline(shareInfo);
        wx.onMenuShareQQ(shareInfo);
        wx.onMenuShareQZone(shareInfo);

        // wx.updateAppMessageShareData(shareInfo);
        // wx.updateTimelineShareData(shareInfo);
    }
}
