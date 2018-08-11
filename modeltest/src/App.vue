<template>
  <div id="app">
    <my-input v-model="text" />
  </div>
</template>

<script>
import MyInput from './components'
export default {
  name: 'app',
  components: {
    MyInput
  },
  data () {
    return {
      text: 'hello yuer'
    }
  },
  watch: {
    text (val) {
      console.log(val)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
