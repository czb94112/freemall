<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p>{{name}}</p>
    <button @click="update">更新数据</button>
    <HelloWorld msg="Welcome to vue" v-if="show"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  // data: {}, // 该写法为全局变量，尽量不要使用
  data(){
    return {
      name: 'welcome to vue',
      show: true
    }
  },
  beforeCreate(){
    // 组件实例化之前
    console.log('beforeCreate');
    console.log(this.$el);
    console.log(this.$data);
  },
  created(){
    // 组件实例化之后
    console.log('created');
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeMount(){
    // 组件渲染之前
    console.log('beforeMount');
    console.log(this.$el);
    console.log(this.$data);
  },
  mounted(){
    // 组件渲染之后
    console.log('mounted');
    console.log(this.$el);
    console.log(this.$data);
  },
  beforeUpdate(){
    // 数据更新之前
    console.log('beforeUpdate');
  },
  updated(){
    // 数据更新之后
    console.log('updated');
  },
  beforeDestroy(){
    // 组件销毁之前
    console.log('beforeDestroy');
  },
  destroyed(){
    // 组件销毁之后
    console.log('destroyed');
  },
  methods:{
    update(){
      this.name = 'jack';
      this.show = false;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
