<template>
  <input type="radio" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      focus: false
    }
  },
  methods: {
    handleFocus (event) {
      this.focus = true
      event.target.checked = true
      console.log('打印focus事件')
      console.log(event)
    },
    handleBlur (event) {
      this.focus = false
      event.target.checked = false
      console.log('打印blur事件')
      console.log(event)
    },
    handleChange (event) {
      console.log('打印change事件')
    }
  }
}
</script>

<style scoped>

</style>
