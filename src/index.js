// 引入组件的js
import cdButton from './components/button/index'
import cdSideDialog from './components/sideDialog/index'
import cdCenterDialog from './components/centerDialog/index'
import cdTable from './components/table/index'
import cdSelect from './components/select/index'
import cdOption from './components/option/index'
import cdForm from './components/form/index'
import cdFormItem from './components/form-item/index'
import cdTextarea from './components/textarea/index'

const components = [
  cdButton,
  cdSideDialog,
  cdCenterDialog,
  cdTable,
  cdSelect,
  cdOption,
  cdForm,
  cdFormItem,
  cdTextarea
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
  cdButton,
  cdSideDialog,
  cdCenterDialog,
  cdTable,
  cdSelect,
  cdOption,
  cdForm,
  cdFormItem,
  cdTextarea
}
