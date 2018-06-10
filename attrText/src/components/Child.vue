<template>
  <div class="child">
    <h2>B: I am a child of A</h2>
    <grand-son v-bind="$attrs" v-on="$listeners"></grand-son>
  </div>
</template>
<script>
import GrandSon from './GrandSon'
export default {
  components: {
    GrandSon
  },
  inheritAttrs: false,
  mounted () {
    console.log('child $attr----', this.$attrs)
    console.log('child $listener----', this.$listeners)
  }
}
</script>
<style scoped>
  .child {
    border: 2px dotted red;
    height: 250px;
    margin: 0 20px;
    background: rgb(214, 206, 206);    
  }
</style>
