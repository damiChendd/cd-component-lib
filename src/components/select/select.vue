<template>
  <div>
    <div class="cd-select hand" @click="handleOption()">
      <span v-if="value == null">请选择</span>
      <span v-else>{{value}}</span>
      <i :class="{'row-top':option_show == false,'row-bottom':option_show == true}"></i>
    </div>
    <div>
      <ul v-if="option_show">
        <el-option
                :value="query"
                created
                v-if="showNewOption">
        </el-option>
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

  name: 'select',

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
    console.log('打印信息')
    console.log(this.broadcast('select'))
    console.log('打印远端地function函数')
    console.log(this.remoteMethod)
  },
  mounted () {
  },

  watch: {
  },

  methods: {
    handleOption () {
      this.option_show = !this.option_show
    },
    getOptionItem (val) {
      this.select_label = val
      this.option_show = false
    },
    getSelectVal (val) {
      this.select_label = val
    }
  },

  setCreated () {
    // 如果有值，就将option创建，否则不创建，显示暂无数据
  }
}
</script>
