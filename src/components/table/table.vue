<template>
  <table class="table">
    <tr>
      <td>姓名</td>
      <td>年龄</td>
      <td>性别</td>
      <td>卡号</td>
    </tr>
    <tr v-for="item in value" :key="item.id">
      <td>{{item.name}}</td>
      <td>{{item.age}}</td>
      <td>{{item.sex}}</td>
      <td>{{item.card}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'table',
  props: ['value'],
  data: function () {
    return {
      data: null
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .table{
    border: 1px solid #cccccc;
  }
</style>
