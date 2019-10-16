<template>
  <div>
    <div class="cd-select hand" @click="handleOption()">
      <span v-if="value == null">请选择</span>
      <span v-else>{{value}}</span>
      <i :class="{'row-top':option_show == false,'row-bottom':option_show == true}"></i>
    </div>
    <div>
      <ul v-if="option_show">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
import Emitter from '../../lib/mixins/emitter'
import cdOption from './option'
export default {
  // 混入对象，使组件共享当前混入地内容
  mixins: [Emitter],

  name: 'cd-select',

  provide () {
    return {
      'select': this
    }
  },

  props: {
    value: {
      required: true
    },
    remoteMethod: Function
  },

  components: { cdOption },

  data () {
    return {
      option_show: false,
      created: false,
      cachedOptions: [],
      currentValue: ''
    }
  },

  created () {
    // 监听接收子组件传的信息
    console.log('打印value的变化')
    console.log(this.value)
    console.log('进入监听')
    // console.log(this.$on('getSelectVal', this.handleSelect))
    // this.$on('getSelectVal', this.getSelectVal)
    this.$on('getSelectVal', this.handleSelect)
  },

  mounted () {
  },

  watch: {
  },

  methods: {
    handleOption () {
      this.option_show = !this.option_show
    },
    // getOptionItem (val) {
    //   this.select_label = val
    //   this.option_show = false
    // },
    getSelectVal (val) {
      // 选择的事件
      console.log('打印select组件接收到的信息')
      console.log(val)
      this.select_label = val
    },
    handleSelect (option) {
      console.log('进入父组件接收值')
      console.log(option)
    }
  }
}
</script>
