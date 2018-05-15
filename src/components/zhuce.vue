<template>
  <div class="hello">
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
          </div>
          <div class="modal-body">
            内容
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <h1>{{ msg }}</h1>
    <div class="zhuce">
      <label>
        <span>账号：</span><input type="text" name="username" v-model="usr" placeholder="请输入账号">
      </label>
      <p class="tishi">
        <span v-show="checkUsr" class="c-red">用户名格式为4到16位（字母，数字，下划线）</span>
      </p>
      <label>
        <span>密码：</span><input type="password" name="pwd" v-model="pwd" placeholder="请输入密码">
      </label>
      <p class="tishi">
        <span v-show="checkPwd" class="c-red">最少6位，包括至少1个大写字母，1个小写字母，1个数字</span>
      </p>
      <label>
        <span>密码：</span><input type="password" name="repwd" v-model="repwd" placeholder="请再次输入密码">
      </label>
      <p class="tishi">
        <span v-show="pwd!=repwd" class="c-red">两次密码不一致</span>
      </p>
      <label>
        <span>邮箱：</span><input type="email" name="email" v-model="mail" placeholder="请输入邮箱">
      </label>
      <p class="tishi">
        <span v-show="checkMail" class="c-red">请检查邮箱格式是否正确</span>
      </p>
      <label>
        <button class="btn" v-on:click="atest()">注册</button>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zhuce',
  data () {
    return {
      msg: '注册',
      usr: '',
      pwd: '',
      repwd: '',
      mail: '',
      checkMail:false,
      checkPwd:false,
      checkUsr:false,
    }

  },
  methods:{
    atest(){
      if(!this.mail||!this.usr||!this.pwd){
        alert("内容不能为空");
        return
      }
      if(!this.checkMail&&!this.checkUsr&&!this.checkPwd&&this.pwd==this.repwd){
        this.zhuce()

      }else{
        alert("请填写完整后提交")
      }
    },
    zhuce(){
      $.ajax({
        url:"https://zhuangjianlol.cn:20017/users/createU",
        type:"post",
        data:{usr:this.usr,pwd:this.pwd,mail:this.mail},
        success: (data) =>{
          console.log(data);
          if(data.res){
            localStorage.setItem("isLogin","true");
            localStorage.setItem("LoginName",this.usr);
            alert("注册成功");
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
            alert("注册失败，用户名或邮箱已注册")
          }
        }
      })

    },

  },
  watch:{
    mail:function(val){
      if(!val) return
      if(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(val)){
            this.checkMail=false
          }else{
        this.checkMail=true
      }
      },
    usr:function(val){
      if(!val) return
      if(/^[a-zA-Z0-9_-]{4,16}$/.test(val)){
        this.checkUsr=false
      }else{
        this.checkUsr=true
      }
    },
    pwd:function(val){
      if(!val) return
      if(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(val)){
        this.checkPwd=false
      }else{
        this.checkPwd=true
      }
    },

  },

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
  .c-red{
    color: red;
    font-size: 10px;
  }

</style>
