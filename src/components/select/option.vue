<template>
  <div>
    <div  class="cd-option hand" v-cloak v-show="show">
      <li @click="getOptionItem(value)">
      {{label}}
    </li>
    </div>
    <!--<li @click="getOptionItem(value)">-->
      <!--{{label}}-->
    <!--</li>-->
  </div>
</template>

<script>
export default {
  name: 'option',
  inject: ['select'],
  props: ['label', 'value', 'visible'],
  data: function () {
    return {
      optionShow: null,
      options: []
    }
  },
  computed: {
    show: {
      get: function () {
        console.log('打印显示的信息')
        console.log(this.visible)
        return this.visible
      },
      set: function (val) {
        this.$emit('update:visible', val)
      }
    }
  },
  created () {
    // console.log('option')
    // console.log(this.visible)
    console.log('打印option的this')
    console.log(this)
    // this.select.options.push(this)
    console.log('打印select中的option')
    console.log(this.select.options)
    console.log('打印attrs属性')
    console.log(this.attrs)
  },
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
      this.$emit('getSelectVal', val)
      this.show = false
    }
  }
}
</script>

<style scoped>

</style>
