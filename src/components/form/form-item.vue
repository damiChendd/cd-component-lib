<template>
  <div>
    <label>{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cd-form-item',
  props: {
    label: String
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
