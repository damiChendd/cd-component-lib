<template>
  <button
    class="cd-button"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'cd-button',
  data: function () {
    return {}
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
