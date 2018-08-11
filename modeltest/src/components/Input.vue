<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: 'MyInput',
  props: ['value']
}
</script>

<style scoped>
</style>
