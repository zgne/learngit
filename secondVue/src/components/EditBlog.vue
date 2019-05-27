<template>
  <div id="edit-blog">
    <form v-if="!submitted">
      <h2>编辑博客</h2>
      <label for="blogTitle">博客标题</label>
      <input type="text" id="blogTitle" v-model="blog.title">
      <label for="blogContent">博客内容</label>
      <textarea id="blogContent" v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label for="Vue">vue.js</label>
        <input type="checkbox" id="Vue" value="Vue.js" v-model="blog.categories">
        <label for="React">React.js</label>
        <input type="checkbox" id="React" value="React.js" v-model="blog.categories">
        <label for="Node">Node.js</label>
        <input type="checkbox" id="Node" value="Node.js" v-model="blog.categories">
        <label for="Angular4">Angular4.js</label>
        <input type="checkbox" id="Angular4" value="Angular4.js" v-model="blog.categories">
      </div>
      <label for="author">作者</label>
      <select id="author" v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">编辑博客</button>
    </form>
    <div v-if="submitted">
      <h3>您的博客发布成功！</h3>
    </div>
    <hr>
    <div id="blogPreview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'edit-blog',
    data() {
      return {
        id: this.$route.params.id,
        blog: {},
        authors: ["A", "B", "C"],
        submitted: false
      }
    },
    methods: {
      featchBlog() {
        // console.log(this.id);
        // this.$http.get("https://vuedemo-1ab4d.firebaseio.com/posts/" + this.id + ".json")
        axios.get("/posts/" + this.id + ".json")
          .then((response) => this.blog = response.data);
        // .then((response) => console.log(response))
      },
      post: function () {
        // this.$http.post("http://jsonplaceholder.typicode.com/posts", {
        // this.$http.put("https://vuedemo-1ab4d.firebaseio.com/posts/"+ this.id+".json",this.blog
        axios.put("https://vuedemo-1ab4d.firebaseio.com/posts/" + this.id + ".json", this.blog
          // {
          // title: this.blog.title,
          // content: this.blog.content,
          // userId: 1

          // }
        )
          .then((data) =>
            // console.log(data.json());
            this.submitted = true
          )
      }
    },
    created() {
      this.featchBlog();
    }
  }
</script>

<style scoped>
  #edit-blog {
    max-width: 960px;
    margin: 0 auto;
  }

  label {
    display: block;
    margin: 20px 0 5px;
  }

  input[type="text"], textarea, select {
    width: 100%;
    height: 30px;
  }

  #blogContent {
    height: 100px;
  }

  #checkboxes label {
    display: inline-block;
  }

  #checkboxes input {
    margin-right: 20px;
  }

  select {
    border-radius: 3px;
  }

  button {
    height: 40px;
    width: 100px;
    color: #fff;
    border: none;
    font-size: 14px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: crimson;
  }

  #blogPreview {
    margin-top: 35px;
    padding: 15px;
    border: 1px #ccc dotted;
  }
</style>
