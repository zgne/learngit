<template>
  <div>
    <footer>
      <h1>{{copyright}}{{title}}</h1>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        copyright: 'Copyright 2019 Vue Demo'
      }
    }
  }
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px;
    text-align: center;
  }

  h1 {
    color: lightgreen;
  }
</style>
