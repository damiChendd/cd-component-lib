<template>
  <div>
    <table class="table">
      <thead style="background-color: #cccccc">
        <th align="left">头1</th>
        <th align="left">头2</th>
        <th align="left">头3</th>
        <th align="left">头4</th>
        <th align="left">头5</th>
      </thead>
      <tbody>
        <tr v-for="item in value" :key="item.id" style="background-color: #eeeeee">
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>{{item.card}}</td>
          <td><button @click="testAlert">测试按钮</button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>角标1</td>
          <td>角标2</td>
          <td>角标3</td>
          <td>角标4</td>
          <td>角标5</td>
        </tr>
      </tfoot>
    </table>
    <!--<tableHeader>测试</tableHeader>-->
  </div>
</template>

<script>
import tableHeader from './table-header'
export default {
  name: 'cd-table',
  props: ['value'],
  components: {tableHeader},
  data: function () {
    return {
      data: null
    }
  },
  methods: {
    testAlert () {
      alert('表格弹出')
    }
  }
}
</script>

<style scoped>
  .table{
    border: 1px solid #cccccc;
    width: 100%;
  }
</style>
