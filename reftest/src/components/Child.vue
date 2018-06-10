<template>
  <button @click="clickSon">I am a SON</button>
</template>
<script>
export default {
  data () {
    return {
      childMsg: 'I am a Child'
    }
  },
  methods: {
    clickSon () {
      console.log('this.$parents.parentMsg', this.$parent.parentMsg)
    }
  }
}
</script>
