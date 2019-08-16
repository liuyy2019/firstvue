//用来定义相应的路由，用来处理请求转发

import Vue from 'vue'     //导入相应的node_modules文件
import Router from 'vue-router'

//导入项目下的components组件
import HelloWorld from '@/components/HelloWorld'
import emplist from '@/components/emplist'
import empadd from '@/components/empadd'


Vue.use(Router)

export default new Router({
  routes: [
  	//定义一个路由规则，点请求path为/，是相应HelloWorld组件中的内容
    {
      path: '/',
      name: 'emplist',
      component: emplist
    },
    {
      path: '/emplist',
      name: 'emplist',
      component: emplist
    },
    {
    	path:'/empadd',
    	name:'empadd',
    	component:empadd
    	
    }
  ]
})
