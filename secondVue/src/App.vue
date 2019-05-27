<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
    <!--    <nav>这是nav</nav>-->
    <!--    <show-blog></show-blog>-->
    <!--    <add-blog></add-blog>-->
    <!--
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
      <li><a href="/">Home</a></li>
      <li><a href="/helloworld">HelloWord</a></li>
    </ul>
    <router-view></router-view>
    -->
  </div>
</template>

<script>
  import AddBlog from './components/AddBlog'
  import ShowBlog from './components/ShowBlogs'
  import BlogHeader from './components/BlogHeader'

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      'add-blog': AddBlog,
      'show-blog': ShowBlog,
      'blog-header': BlogHeader
    }
  }
</script>

<style scoped>

</style>
