import cdCheckbox from '../input/checkbox'

cdCheckbox.install = Vue => Vue.components(cdCheckbox.name, cdCheckbox)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdCheckbox)
}

export default cdCheckbox
