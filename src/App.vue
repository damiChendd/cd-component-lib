<template>
  <div id="app">
    <div>
      <!--按钮-->
      <cd-button @click="clickBtn()">按钮</cd-button>

      <!--select-->
      <cd-select v-model="select_value">
        <cd-option v-for="item in select_info" :key="item.id" :value="item.name" :label="item.name"></cd-option>
      </cd-select>

      <!--table-->
      <cd-table style="margin-top: 20px" :value="table_data">
      </cd-table>

      <!--弹窗-->
      <cd-button style="margin-top: 20px"  @click="openSideDialog">打开侧边栏弹窗</cd-button>
      <cd-button style="margin-top: 20px"  @click="openCenterDialog">打开中间弹窗</cd-button>
      <cd-side-dialog :visible.sync="side_dialog">
        <p style="color: rgb(255,0,0)">侧边栏测试信息</p>
      </cd-side-dialog>
      <cd-center-dialog :visible.sync="center_dialog">
        <p style="color: rgb(255,0,0)">中间弹窗</p>
      </cd-center-dialog>

      <!--表单-->
      <cd-form style="margin-top: 15px" v-model="form_data">
        <cd-form-item label="姓名：">
          <cd-input v-model="form_data.name" type="text"></cd-input>
        </cd-form-item>

        <cd-form-item label="性别：">
          <cd-radio v-model="form_data.sex" type="radio"></cd-radio>
          <cd-radio v-model="form_data.sex" type="radio"></cd-radio>
        </cd-form-item>

        <cd-form-item label="备注：">
          <cd-textarea rows="5" cols="15">textarea测试</cd-textarea>
        </cd-form-item>

        <cd-form-item label="是否显示：">
          <cd-checkbox></cd-checkbox>
        </cd-form-item>

        <cd-form-item>
          <cd-button @click="getFormInfo()"> 打印数据 </cd-button>
        </cd-form-item>
      </cd-form>
      <br>

      <!--提示框-->
      <cd-button @click="showAlert()">alert</cd-button>
      <cd-button @click="showConfirm()">confirm</cd-button>
      <cd-button @click="showPrompt()">prompt</cd-button>

      <!--日期选择器-->
      <cd-date-picker></cd-date-picker>
      <!--时间选择器-->
      <cd-time-picker></cd-time-picker>
    </div>
  </div>
</template>

<script>
import cdButton from './components/button/button'
import cdSideDialog from './components/sideDialog'
import cdCenterDialog from './components/centerDialog'
import cdSelect from './components/select/select'
import cdOption from './components/select/option'
import cdTable from './components/table/table'
import cdForm from './components/form/form'
import cdFormItem from './components/form-item'
import cdInput from './components/input'
import cdRadio from './components/radio'
import cdTextarea from './components/textarea'
import cdCheckbox from './components/checkbox'
import cdDatePicker from './components/date-picker'
import cdTimePicker from './components/time-picker'
export default {
  name: 'App',
  components: {
    cdButton,
    cdSideDialog,
    cdCenterDialog,
    cdSelect,
    cdOption,
    cdTable,
    cdForm,
    cdFormItem,
    cdInput,
    cdRadio,
    cdTextarea,
    cdCheckbox,
    cdDatePicker,
    cdTimePicker
  },
  data () {
    return {
      btn_name: '按钮测试',
      side_dialog: false,
      center_dialog: false,
      select_info: [
        {
          id: 0,
          name: '苹果'
        },
        {
          id: 1,
          name: '香蕉'
        },
        {
          id: 2,
          name: '橙子'
        }
      ],
      select_value: '测试select',
      table_data: [
        {
          id: 0,
          name: '陈丹',
          age: 18,
          sex: '女',
          card: 123
        },
        {
          id: 1,
          name: '张晓红',
          age: 18,
          sex: '女',
          card: 456
        },
        {
          id: 2,
          name: '张小明',
          age: 18,
          sex: '男',
          card: 789
        }
      ],
      form_data: {
        name: '',
        age: null,
        sex: null,
        isShow: false,
        test: ''
      },
      nameLabel: '姓名',
      sexLabel: '性别',
      ageLabel: '年龄',
      isShowLabel: '是否显示'
    }
  },
  methods: {
    clickBtn () {
      console.log('点击按钮')
    },
    openSideDialog () {
      this.side_dialog = true
    },
    openCenterDialog () {
      this.center_dialog = true
    },
    getFormInfo () {
      console.log('打印表单数据')
      console.log(this.form_data)
    },
    showAlert () {
      alert('这是alert弹窗')
    },
    showConfirm () {
      confirm('这是confirm弹窗')
    },
    showPrompt () {
      prompt('这是prompt弹窗')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
