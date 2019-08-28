// 引入组件
import cdSelect from './select'

cdSelect.install = Vue => Vue.component(cdSelect.name, cdSelect)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdSelect)
}

export default cdSelect
