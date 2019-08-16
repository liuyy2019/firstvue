<!-- App.vue相当于是入口的组件  -->
<template>
  <div id="app">
  	
  	<!--此处下面的部分用来展示页面的公共部分-->
    
    <div class="container" id="app">
			<nav class="navbar navbar-default " role="navigation">
				<div class="container-fluid">
					<div class="navbar-header">
						<!--<router-link to='/'>首页</router-link>-->
						<a class="navbar-brand active" href="#">首页</a>
					</div>
					<div>
						<ul class="nav navbar-nav">
							<li>
								<!--<a href="#">雇员新增</a>-->
								<router-link to='/empadd'>雇员新增</router-link>
							</li>
							<li>
								<router-link to='/emplist'>雇员列表</router-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		
			<!--router-view 用来显示路由的对应的组件内容 -->
    	<router-view/>
		
		</div>
    
    
    
  </div>
</template>

<script>
export default {
  name: 'App'   //组件名（用来标识该组件），template为组件模板，style为组件样式
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
