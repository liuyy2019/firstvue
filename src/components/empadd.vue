<template>
  <div>
   <form class="form-horizontal" role="form">
				<div class="form-group">
					<label for="firstname" class="col-sm-1 control-label">姓名</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="name" v-model="emp.name"  placeholder="请输入姓名">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">年龄</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="age" v-model="emp.age" placeholder="请输入年龄">
					</div>
				</div>
				<div class="form-group">
					<label for="lastname" class="col-sm-1 control-label">性别</label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="sex" v-model="emp.sex" placeholder="请输入性别">
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-10 col-sm-offset-1">
						<button type="button" class="btn btn-default" v-on:click="sub" >提交</button>
					</div>
				</div>
			</form>
  </div>
</template>

<script>
export default {
  name: 'empadd',
  //组件中定义数据的方式，需要有return
  data () {
    return {
      emp:{
      	name:'',
      	age:'',
      	sex:''
      }
    }
  },
  //定义方法
  methods:{
  	sub:function(){
  		console.log(this.emp.name);
  		console.log(this.emp.age);
  		console.log(this.emp.sex);
  		this.$http.post("http://localhost:8086/emp",{
  			"name":this.emp.name,
  			"age":this.emp.age,
  			"sex":this.emp.sex
  		}).then(
  			function(){
  				this.emp={
  					name:'',
		      	age:'',
		      	sex:''
  				}
  				alert("新增雇员成功！");
  			},
  			function(){
  				alert("新增雇员失败，请稍后重试！！");
  			}
  		)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
