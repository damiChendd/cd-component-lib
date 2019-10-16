// 引入组件
import cdTable from './table'

cdTable.install = Vue => Vue.component(cdTable.name, cdTable)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdTable)
}

export default cdTable
