import cdDatePicker from './date-picker'

cdDatePicker.install = Vue => Vue.components(cdDatePicker.name, cdDatePicker)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdDatePicker)
}

export default cdDatePicker
