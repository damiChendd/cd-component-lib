// 引入组件的js
import cdBUtton from './components/button/index'

const components = [
  cdBUtton
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  cdBUtton
}
