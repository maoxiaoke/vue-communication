<template>
  <div class="hello">
    <h1>A: I am a father of child, and an ancestor of grandson</h1>
    <child :message="grandsonMessage" v-on:descendant="getMeg"></child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: {
    Child
  },
  data () {
    return {
      grandsonMessage: 'Message from an acenstor'
    }
  },
  methods: {
    getMeg () {
      console.log('message from descendant--')
    }
  },
  mounted () {
    console.log('acenstor $attrs----', this.$attrs)
  }
}
</script>

<style scoped>
  .hello {
    border: 1px solid black;
    height: 400px;
    background: whitesmoke
  }
</style>
