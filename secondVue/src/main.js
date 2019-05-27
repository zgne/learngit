// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
// import VueResource from 'vue-resource'
// import HelloWorld from "./components/HelloWorld"
// import Home from "./components/Home"
import Routes from './routes'
// import Food from "./components/Food";

// axios全局配置
axios.defaults.baseURL='https://vuedemo-1ab4d.firebaseio.com'
// axios.defaults.headers.common['Authorization']='Token'
// axios.defaults.headers.post['Content-type']='application/urlencode'
// axios.defaults.headers.get['Accepts']='application/json'
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(VueResource)

//自定义组件
// Vue.directive("rainbow", {
//   bind(el, binding, vnode) {
//     el.style.color = "#" + Math.random().toString(16).slice(2, 8);
//   }
// })
// Vue.directive("theme",{
//   bind(el,binding,vnode){
//     if(binding.arg=="wide"){
//       el.style.width='1260px';
//     }else{
//       el.style.width="560px";
//     }
//   }
// })
// 全局注册组件 少用
// Vue.component("food",Food);
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
