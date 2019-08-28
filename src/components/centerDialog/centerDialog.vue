<template>
  <div v-if="show">
    <div class="mask" @click="close()"></div>
    <div class="center-dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'centerDialog',
  props: ['visible'],
  data () {
    return {
    }
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (val) {
        return this.$emit('update:visible', val)
      }
    }
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style scoped>

</style>
