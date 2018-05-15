<template>
  <div class="hello">
    <h1>{{ test }}</h1>
    <h3 v-if="!isLogin">developing ，please waiting</h3>
    <h3  v-if="isLogin">感谢您的来访，我的初步计划是开发发帖功能，个人中心，socket.io聊天室等等功能，旨在开发一个vue+node+mongo的个人娱乐项目</h3>
    <div class="tit_box">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>精选</th>
            <th>标题</th>
            <th>作者</th>
            <th>发布时间</th>
            <th>更新时间</th>
            <th>回复</th>
            <th>点击</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>原创工具</td>
          <td>python办公小利器，当前文件夹内所有文件名收入到excel </td>
          <td>作者</td>
          <td>发布时间</td>
          <td>更新时间</td>
          <td>回复</td>
          <td>点击</td>
        </tr>
        <tr>
          <td>原创工具</td>
          <td> LuaStudio v9.67无限试用工具（有图有真相）</td>
          <td>作者</td>
          <td>发布时间</td>
          <td>更新时间</td>
          <td>回复</td>
          <td>点击</td>
        </tr>
        <tr>
          <td>原创汉化</td>
          <td> Okdo Document Converter Professional 5.6汉化</td>
          <td>作者</td>
          <td>发布时间</td>
          <td>更新时间</td>
          <td>回复</td>
          <td>点击</td>
        </tr>
        <tr>
          <td>精选</td>
          <td>标题</td>
          <td>作者</td>
          <td>发布时间</td>
          <td>更新时间</td>
          <td>回复</td>
          <td>点击</td>
        </tr>
        </tbody>


      </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props:["isLogin"],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: 'hello zero'
    }
  },
  methods:{

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
