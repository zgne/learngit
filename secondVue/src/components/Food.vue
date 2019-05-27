<template>
  <div class="food">
    <ul>
      <li v-for="food in foodList">{{food}}</li>
    </ul>
    <h1>这是Food组件</h1>
  </div>
</template>

<script>
  export default {
    name: 'food',
    data() {
      return {
        foodList: ['葱', '姜', '蒜']
      }
    }
  }
</script>

<style scoped>
  h1{
    color: green;
  }
</style>
