<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    test数据
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {   //在.vue(组件)中定义data需要return
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--  scoped的作用是声明该样式只作用在当前组件 ，不加会作用到所有组件  -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
