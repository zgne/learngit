<template>
  <div id="home">
    <!-- 第二节
    <h1>这是App组件</h1>
    <food></food>
    -->
    <!-- 第一节
    <div>
      <input type="text" v-model="name">
      <span v-show="name">你的名字:{{name}}</span>
    </div>
    <div>
      <input type="text" v-model="age">
      <span v-show="age">你的年龄:{{age}}</span>
    </div>
    <div>
      <input type="text" v-model="gender">
      <span v-if="gender">你的性别:{{gender}}</span>
    </div>
    -->
    <!--
    <ul>
      <li v-for="food in foodList">{{food}}</li>
    </ul>
    -->
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
    <users v-bind:users="users"></users>
    <users v-bind:users="users"></users>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
  /* 第一节
  export default {
    name: 'app',
    data() {
      return {
        name: null,
        gender: null,
        age: null
      }
    }
  }
   */
  /* 第二节 局部注册组件
  import Food from './components/Food'

  export default{
    name:'app',

    data(){
      return {
        foodList:['葱','姜','蒜']
      }
    }

    components:{
      // 第一种
      // "food":Food
      // 第二种
      Food
    }
  }
   */
  import Header from './Header'
  import Footer from './Footer'
  import Users from './Users'

  export default {
    name: 'home',
    data() {
      return {
        users: [
          /*
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false},
          {name:'Henry',position:'web开发',show:false}
           */
        ],
        title: "传递一个值 (number string boolean)"
      }
    },
    methods: {
      updateTitle: function (title) {
        this.title = title;
      }
    },
    components: {
      'app-header': Header,
      'users': Users,
      'app-footer': Footer,
    },
    created() {
      this.$http.get("http://jsonplaceholder.typicode.com/users")
        .then((data) => {
          // console.log(data);
          this.users=data.body;
        })
    }
  }
</script>

<style scoped>
  /* 第二节
  h1{
    color: purple;
  }
   */
</style>
