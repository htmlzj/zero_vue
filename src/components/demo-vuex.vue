<template>
  <div class="hello">
    {{name}}
    <button @click="fun">点击改变msg</button>
    <button @click="checkLogin">test</button>
    <br>
    <br>
    msg: {{msg}}
    <br>
    <h2>filter test</h2>
    <input type="text" v-model="testFilter">
    <h3>{{testFilter|capitalize}}</h3>
  </div>

</template>
<style scoped>

</style>
<script>
  import {mapGetters, mapActions} from 'vuex';
  export default{
    data(){
      return {
        name: "demo-vuex",
        testFilter:""
      }
    },
    
    computed: {...mapGetters(['msg'])
  }
  ,
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
},
  methods: {
    test(){
      console.log(this.$store);
      $("#app").css("background-color","red")
    },
  ...mapActions(['fun',"checkLogin"])
  }
  }

</script>
