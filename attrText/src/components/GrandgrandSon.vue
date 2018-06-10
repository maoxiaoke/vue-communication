<template>
  <div class="grandgrandson">
    D: This is a <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  props: ['message'],
  mounted () {
    this.$emit('descendant')
    console.log('sending a msg to ancestor')
    console.log('grandgrandson $attrs----', this.$attrs)
  }
}
</script>

<style scoped>
  .grandgrandson {
    border: 2px dashed green;
    margin: 0 20px;
    height: 50px;
    background: rgb(208, 219, 188);    
  }
  .grandgrandson > span {
    color: red;
    font-weight: 500;
  }
</style>
