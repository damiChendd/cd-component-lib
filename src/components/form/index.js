
import cdForm from './form'

cdForm.install = Vue => Vue.component(cdForm.name, cdForm)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdForm)
}

export default cdForm
