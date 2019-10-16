<template>
  <div>
    <div  @click="getOptionItem(value)">{{value}}</div>
  </div>
</template>

<script>
import Emitter from '../../lib/mixins/emitter'
export default {
  name: 'cd-option',
  inject: ['select'],
  props: ['label', 'value', 'visible'],
  mixins: [Emitter],
  data: function () {
    return {
      optionShow: null,
      options: []
    }
  },
  computed: {
    show: {
      get: function () {
        return this.visible
      },
      set: function (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  created () {
  },

  // 查看默认的传值信息
  watch: {
    key (val) {
      console.log('打印key')
      console.log(val)
    },
    label (val) {
      console.log(val)
    },
    visible (val) {
      console.log('visible')
      console.log(val)
    }
  },
  methods: {
    getOptionItem (val) {
      // // 获取选中的信息并传值，关闭弹窗
      // console.log('打印选择的信息')
      // console.log(val)
      // this.$emit('getSelectVal', val)
      // this.$emit('update:visible', false)

      // 关闭子组件向父组件传值不好使使用emitter通过广播向父组件传值
      // console.log('走进入父组件')
      // this.dispatch('select', 'getSelectVal', [this, true])

      // 通过provide的注入直接改变父组件的值
      // console.log('打印父组件的this')
      // console.log(this.select)
      this.select.option_show = false
      this.select.value = val
    }
  }
}
</script>

<style scoped>

</style>
