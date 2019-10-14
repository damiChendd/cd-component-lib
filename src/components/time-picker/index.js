import cdTimePicker from './time-picker'

cdTimePicker.install = Vue => Vue.components(cdTimePicker.name, cdTimePicker)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdTimePicker)
}

export default cdTimePicker
