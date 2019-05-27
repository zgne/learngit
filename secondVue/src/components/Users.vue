<template>
  <div class="users">
    <h1>Hello Users</h1>
    <ul>
      <li v-for="user in users" >
        <h2>{{user.name}}</h2>
        <h3>{{user.email}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteUsers">删除</button>
  </div>
</template>

<script>
  export default{
    name:'users',
    // props:["users"],
    props:{
      users:{
        type:Array,
        required:true
      }
    },
    data(){
      return{
      }
    },
    methods:{
      deleteUsers:function () {
        this.users.pop();
      }
    }
  }
</script>

<style scoped>
  .users{
    width: 100%;
    max-width:1200px;
    padding: 0 20px;
    margin: 40px auto;
    box-sizing:content-box;
  }
  ul{
    display:flex;
    display:-webkit-flex;
    flex-wrap:wrap;
    padding: 0;
    list-style:none;
  }
  li{
    flex-grow:1;
    flex-basis:200px;
    margin: 10px;
    padding: 30px;
    cursor:default;
    flex-wrap:wrap;
    text-align: center;
    border: 1px solid #222;
  }
</style>
