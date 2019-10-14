<template>
  <div class="time-picker-parent">
    时间选择<input type="text" @click="showTimeDialog()" v-model="select_time">
    <div class="time-picker-child" v-if="time_dialog == true">
      <div class="time-dialog">
        <div class="time-dialog-comumn">
          <div v-for="(item, index) in hour" :key="index" @click="selectTime(item,select_minute,select_second)">{{item}}</div>
        </div>
        <div class="time-dialog-comumn">
          <div v-for="(item, index) in minute" :key="index" @click="selectTime(select_hour,item,select_second)">{{item}}</div>
        </div>
        <div class="time-dialog-comumn">
          <div v-for="(item, index) in second" :key="index" @click="selectTime(select_hour,select_minute,item)">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'time-picker',
  data: function () {
    return {
      time_dialog: false,
      hour: [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23' ],
      minute: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
        '51', '52', '53', '54', '55', '56', '57', '58', '59'],
      second: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
        '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
        '41', '42', '43', '44', '45', '46', '47', '48', '49', '50',
        '51', '52', '53', '54', '55', '56', '57', '58', '59'],
      select_time: null,
      select_hour: '00',
      select_minute: '00',
      select_second: '00'
    }
  },
  methods: {
    showTimeDialog () {
      this.time_dialog = !this.time_dialog
    },
    selectTime (hour, minute, second) {
      this.select_hour = hour
      this.select_minute = minute
      this.select_second = second
      this.select_time = this.select_hour + ':' + this.select_minute + ':' + this.select_second
    }
  }
}
</script>

<style scoped>
  .time-picker-parent{
    position: relative;
  }
  .time-picker-child{
    position: absolute;
    top: 20px;
    left: 60px;
  }
  .time-dialog{
    width: 200px;
    border: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
  }
  .time-dialog-comumn{
    text-align: center;
    width: 60px;
    height: 200px;
    overflow: scroll;
  }
</style>
