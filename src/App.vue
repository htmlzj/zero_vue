<template>
  <div id="app">
    <div id="header">
      <img src="./assets/logo.png"/>
      <div class="header_right">
        <router-link to="/">首页</router-link> |
        <router-link v-if="!isLogin" to="denglu">登录</router-link>
        <router-link v-if="isLogin" to="mine">{{LoginName}}</router-link> |
        <router-link v-if="!isLogin" to="zhuce">注册</router-link>
        <span v-if="isLogin" v-on:click="clearLogin()">注销</span>
      </div>
    </div>
    <div class="body">
      <transition :name="transitionName">
       <router-view v-on:checkLogin="checkLogin" :isLogin="isLogin" class="child-view"/>
    </transition>
    </div>
    
  
    <footer>
      <hr/>
      邮箱：zero10010@foxmail.com
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      isLogin:"false",
      LoginName:"null",
      transitionName:"slide-left",

    }
  },
  watch: {  
    '$route' (to, from) {  
       this.checkLogin()
      if(to.path == '/'){  
        this.transitionName = 'slide-right';  
      }else{  
        this.transitionName = 'slide-left';  
      }  
    }  
  } 
  ,
  mounted(){
    this.checkLogin()
  },
  methods:{
    checkLogin(){
      if(localStorage.getItem("isLogin")){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
      if(localStorage.getItem("LoginName")){
        this.LoginName=localStorage.getItem("LoginName");
      }
    },
    clearLogin(){
      localStorage.clear("LoginName");
      localStorage.clear("isLogin");
      this.checkLogin()
    }

  }
}
</script>

<style>

</style>
