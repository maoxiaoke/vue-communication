<template>
  <div class="child">
    <h2> {{ ancestorMessage }} </h2>
  </div>
</template>
<script>
export default {
  props: {
    ancestorMessage: {
      type: String,
      required: true
    }
  },
  mounted () {
    this.$emit('descendant', 'hello Wall·E')
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
