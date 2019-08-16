// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'    /*导入node_modules下的vue*/
import App from './App'  /*导入项目src下name为App的组件，也就是该项目的App.vue，点代表当前项目*/
import router from './router'   /*导入项目下的自己已经定义好的router，router目录下index.js中的路由*/

Vue.config.productionTip = false

/* eslint-disable no-new */
/*该Vue对象是用来，与index.html中的id=app的div相关联*/
new Vue({
  el: '#app',
  //通过
  router,
  //通过{ App }将定义好的（import App）组件，加入的该组件中（组件定义（‘组件名’，template对象））
  components: { App },
  //将components定义的组件，通过组件名，使用template标签可以将组件名对应的模板添加到el中
  /*template直接将 名字为App的组件 添加到el绑定的盒子中*/
  template: '<App/>'
})
