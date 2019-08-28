// 引入组件
import cdCenterDialog from './centerDialog'

// 安装
cdCenterDialog.install = Vue => Vue.component(cdCenterDialog.name, cdCenterDialog)

// 判断window的情况
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(cdCenterDialog)
}

// 引出
export default cdCenterDialog
