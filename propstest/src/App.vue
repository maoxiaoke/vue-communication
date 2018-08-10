<template>
  <div id="app">
    <ancestor />
  </div>
</template>

<script>
import Ancestor from './components/Ancestor.vue'

export default {
  name: 'app',
  components: {
    Ancestor
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
