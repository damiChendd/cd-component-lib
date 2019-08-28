// 引入组件
import cdTable from './select'

cdTable.install = Vue => Vue.component(cdTable.name, cdTable)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdTable)
}

export default cdTable
