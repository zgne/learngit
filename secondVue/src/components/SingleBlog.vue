<template>
  <div id="single-blog">
    <h2>{{blogs.title}}</h2>
    <article>{{blogs.content}}</article>
    <p>作者:{{blogs.author}}</p>
    <p>分类</p>
    <ul>
      <li v-for="category in blogs.categories">{{category}}</li>
    </ul>
    <router-link v-bind:to="'/edit/'+id">编辑</router-link>
    <button @click="deleteSingleBlog()">删除</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'single-blog',
    data() {
      return {
        id: this.$route.params.id,
        blogs: {}
      }
    },
    created() {
      // this.$http.get("https://vuedemo-1ab4d.firebaseio.com/posts/" + this.id+".json")
      axios.get("/posts/" + this.id+".json")
        // .then((data) => this.blogs = data.body);
        .then((data) => {
          // console.log(data); //只有一个，所以可以直接用，不需要 data.json()
          this.blogs = data.data
          // console.log(data);
        });
    },
    methods:{
      deleteSingleBlog(){
        // this.$http.delete("https://vuedemo-1ab4d.firebaseio.com/posts/" + this.id+".json")
        axios.delete("/posts/" + this.id+".json")
          .then(function () {
            this.$router.push({path:'/'});
          })
      }
    }
  }
</script>

<style scoped>
  #single-blog{
    max-width:960px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    background-color: #eee;
  }
</style>
