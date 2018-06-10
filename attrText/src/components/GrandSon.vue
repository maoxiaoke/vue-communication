<template>
  <div class="grandson">
    <h3>C: I am a child of B, and a father of D</h3>
    <grandgrand-son v-bind="$attrs" v-on="$listeners"></grandgrand-son>
  </div>
</template>
<script>
import GrandgrandSon from './GrandgrandSon'
export default {
  components: {
    GrandgrandSon
  },
  // props: ['message'],
  data () {
    return {}
  },
  inheritAttrs: false,  
  mounted () {
    console.log('grandson $attrs----', this.$attrs)
    console.log('grandson $listens---', this.$listeners)
  }
}
</script>

<style scoped>
  .grandson {
    border: 2px dashed blue;
    margin: 0 20px;
    height: 150px;
    background: rgb(197, 207, 219);  
  }
</style>
