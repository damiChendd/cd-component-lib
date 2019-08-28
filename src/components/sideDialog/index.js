// 引入组件
import cdSideDialog from './sideDialog'

// 安装
cdSideDialog.install = Vue => Vue.components(cdSideDialog.name, cdSideDialog)

// 判断是否使用
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdSideDialog)
}

// 导出
export default cdSideDialog
