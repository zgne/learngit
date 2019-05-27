<template>
  <div id="show-blog" v-theme="'wide'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filterBlogs" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'show-blog',
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    created() {
      // this.$http.get('https://jsonplaceholder.typicode.com/posts')
      // this.$http.get('./../static/posts.json')
      // this.$http.get('https://vuedemo-1ab4d.firebaseio.com/posts.json')
      axios.get('https://vuedemo-1ab4d.firebaseio.com/posts.json')
        .then((data)=>
          // console.log(data); 不止一个博客
          data.data
          // console.log(data.json());
          // this.blogs = data.body.slice(0, 10)
        )
        .then((data) => {
          var blogsArr = [];
          for (let key in data) {
            // console.log(key);
            // data['id'] = key;
            data[key].id = key;
            blogsArr.push(data[key]);
          }
          // console.log(blogsArr);
          this.blogs = blogsArr;
        })
    },
    computed: {
      filterBlogs() {
        return this.blogs.filter((blog) => blog.title.toUpperCase().match(this.search.toUpperCase()));
      }
    },
    filters: {
      snippet(value) {
        return value.slice(0, 150) + "...";
      }
    },
    directives: {
      'theme': {
        bind(el, binding, vnode) {
          // console.log(binding.arg);
          if (binding.value === "wide") {
            el.style.maxWidth = '960px';
          } else {
            el.style.maxWidth = "560px";
          }
        }
      },
      'rainbow': {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      }
    }
  }
</script>

<style scoped>
  #show-blog {
    max-width: 960px;
    margin: 0 auto;
  }

  .single-blog {
    /*width: 100%;*/
    padding: 20px;
    margin-top: 20px;
    border: 1px dotted #aaa;
    background-color: #eee;
  }

  a {
    text-decoration: none;
  }

  input[type="text"] {
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
