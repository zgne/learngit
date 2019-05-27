<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
        <router-link to="/test" exact>test</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default{
    name:'blog-header'
  }
</script>

<style scoped>
  nav {
    margin: 0 auto;
    height: 60px;
    /*max-width: 960px;*/
    line-height: 60px;
    background-color: crimson;
  }
  ul{
    list-style: none;
    text-align: center;
  }
  li{
    /*height: 100px;*/
  }
  a {
    color: #fff;
    padding: 12px;
    font-size:16px;
    border-radius: 5px;
    margin-right: 20px;
    text-decoration: none;
  }
  .router-link-active{
    color:#444;
    background: rgba(255,255,255,0.8);
  }
</style>
