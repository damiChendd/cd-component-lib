import cdInput from './input'

cdInput.install = Vue => Vue.components(cdInput.name, cdInput)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdInput)
}

export default cdInput
