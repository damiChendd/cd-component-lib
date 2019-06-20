// 引入组件
import cdButton from './button'

cdButton.install = Vue => Vue.component(cdButton.name, cdButton);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdButton)
}

export default cdButton
