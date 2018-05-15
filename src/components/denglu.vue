<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="denglu">
      <label>
        <span>账号：</span><input type="text" name="username" v-model="usr">
      </label>
      <label>
        <span>密码：</span><input type="password" name="pwd" v-model="pwd" @keyup.enter="denglu">
      </label>
      <label>
        <button class="btn" v-on:click="denglu()">登录</button>
      </label>
    </div>

  <!-- <el-button @click="visible = true">Button</el-button> -->
    <el-dialog :visible.sync="visible" title="登录提示">
      <span>{{diamsg}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false">取 消</el-button>
    <el-button type="primary" @click="visible = false">确 定</el-button>
  </span>
    </el-dialog>
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
      visible:false,
      diamsg:""
    }
  },
  methods:{
    denglu(){
      $.ajax({
        url:"https://zhuangjianlol.cn:20017/users/login",
        type:"post",
        data:{usr:this.usr,pwd:md5(this.pwd)},
        success: (data) =>{
          console.log(data);
          if(data.res){
            localStorage.setItem("isLogin","true");
            localStorage.setItem("LoginName",this.usr);
            this.diamsg="登录成功";
            this.visible=true;
            // alert("登录成功");
            this.$emit('checkLogin');
            this.$router.push({
              path: '/',
              name: 'index',
//              params: {
//                name: 'name',
//                dataObj: this.msg
//              }
              /*query: {
                  name: 'name',
                  dataObj: this.msg
              }*/
            })

          }else{
            this.diamsg="登录失败，请检查用户名和密码";
            this.visible=true;
            // alert("登录失败，请检查用户名和密码")
          }
        }
      })

    },
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
