<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="denglu">
      <label>
        <span>账号：</span><input type="text" name="username" v-model="usr">
      </label>
      <label>
        <span>密码：</span><input type="password" name="pwd" v-model="pwd">
      </label>
      <label>
        <button class="btn" v-on:click="denglu()">登录</button>
      </label>
    </div>


  </div>
</template>

<script>
export default {
  name: 'denglu',
  data () {
    return {
      msg: '登录',
      test: 'hello zero',
      usr: '',
      pwd: '',
    }
  },
  methods:{
    denglu(){
      localStorage.setItem("isLogin","true");
      localStorage.setItem("LoginName",this.usr);
      console.log(md5(this.pwd))
      alert("登录成功");
      // this.$emit('checkLogin');
      this.$router.push({
        path: '/',
        name: 'index',})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
