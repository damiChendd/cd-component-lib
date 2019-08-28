// 引入组件
import cdOption from '../select/option'

cdOption.install = Vue => Vue.component(cdOption.name, cdOption)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdOption)
}

export default cdOption
