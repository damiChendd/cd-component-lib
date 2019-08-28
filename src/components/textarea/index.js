import cdTextarea from '../input/textarea'

cdTextarea.install = Vue => Vue.component(cdTextarea.name, cdTextarea)

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdTextarea)
}

export default cdTextarea
