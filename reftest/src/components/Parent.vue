<template>
  <div class="hello">
    <h1 ref="maybeATitle">{{ parentMsg }}</h1>
    <button @click="clickParent">I am a FATHER</button>
    <child ref="myChild"></child>
    <another-child></another-child>
  </div>
</template>

<script>
import Child from './Child'
import AnotherChild from './AnotherChild'
export default {
  components: {
    Child,
    AnotherChild
  },
  name: 'HelloWorld',
  data () {
    return {
      parentMsg: 'I am a Father'
    }
  },
  methods: {
    clickParent () {
      console.log('this.$refs', this.$refs)
      console.log('this.$refs.myChild', this.$refs.myChild.childMsg)
      console.log('this.$children', this.$children)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
