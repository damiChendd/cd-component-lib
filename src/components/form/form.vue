<template>
  <form action="">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'form',
  props: ['value'],
  data () {
    return {
    }
  },
  created () {
    console.log('打印form的value')
    console.log(this.value)
  }
}
</script>

<style scoped>

</style>
