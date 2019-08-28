import cdFormItem from '../form/form-item'

cdFormItem.install = Vue => Vue.components(cdFormItem.name, cdFormItem)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdFormItem)
}

export default cdFormItem
