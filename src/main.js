/**
 * @Description: 项目入口文件
 * @author zhangxinyu
 * @date 2019-06-12
*/
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import Icon from 'vue-awesome/components/Icon'
import router from './router/index'
import './assets/css/base.css'

Vue.config.productionTip = false

//使用VueAxios挂载axios
Vue.use(VueAxios,axios)
//缓存
Vue.use(VueCookie)
// 全局注册vue-awesome
Vue.component('v-icon', Icon)
//网络请求axios公共拦截处理
axios.interceptors.request.use(() => {
  //loading,请求地址替换，修改
})
axios.interceptors.response.use(response => {
  let res = response.data
  if (res.code !== 0) {
    alert(res.message)
  }
  return response
},error => {
  return Promise.reject(error)
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
