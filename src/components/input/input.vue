<template>
  <input class="cd-input" type="text" @change="handleChange" @blur="handleBlur" @input="handleInput">
</template>

<script>
export default {
  name: 'input',
  props: ['value'],
  data () {
    return {
    }
  },
  watch: {
    value (val) {
    }
  },
  methods: {
    handleChange (event) {
    },
    handleBlur (event) {
    },
    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
