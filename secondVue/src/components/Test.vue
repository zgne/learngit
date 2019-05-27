<template>
  <div id="test">
    <div id="good" v-bind:class="{burst:ended}"></div>
    <div class="progress-bar">
      <div v-bind:style="{width: health+'%'}"></div>
    </div>
    <div class="control">
      <button @click="cutWidth" v-show="!ended">接着按</button>
      <button v-on:click="restart">重新开始</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        health: 100,
        ended: false,
      }
    },
    methods: {
      cutWidth() {
        this.health -= 10;
        if (this.health <= 0) {
          this.ended = true;
        }
      },
      restart() {
        this.health = 100;
        this.ended = false;
      }
    }
  }
</script>

<style scoped>
  #good {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    background-size: 80%;
    background: url("../../static/images/2.jpg") center no-repeat;
  }

  #good.burst {
    background: url("../../static/images/1.jpg") center no-repeat;
  }

  div.progress-bar {
    width: 300px;
    margin: 10px auto;
    box-sizing: border-box;
    border: 1px solid #444;
  }

  div.progress-bar div {
    height: 20px;
    background-color: crimson;
  }

  div.control {
    width: 300px;
    margin: 10px auto;
  }
</style>
