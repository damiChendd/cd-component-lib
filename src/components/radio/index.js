import cdRadio from '../input/radio'

cdRadio.install = Vue => Vue.components(cdRadio.name, cdRadio)

if (typeof cdRadio !== 'undefined' && window.Vue) {
  window.Vue.use(cdRadio)
}

export default cdRadio
