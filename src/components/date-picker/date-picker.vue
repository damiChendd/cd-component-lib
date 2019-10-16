<template>
  <div class="date-parent">
    <span>日期选择</span>
    <input type="text" @click="showDateDialog" v-model="select_date">
    <div v-if="show_date_dialog == true" class="date-child">
      <div style="text-align: center">
        <span class="row-left" @click="getBeforeMonth"></span>
        <span>{{year}}-{{month+1}}-{{d}}</span>
        <span class="row-right" @click="getAfterMonth"></span>
      </div>
      <div>
        <span class="week-style">日</span>
        <span class="week-style">一</span>
        <span class="week-style">二</span>
        <span class="week-style">三</span>
        <span class="week-style">四</span>
        <span class="week-style">五</span>
        <span class="week-style">六</span>
      </div>
      <div>
        <span v-for="(itemi,indexi) in monthDay" :key="indexi">
          <span v-for="(itemj,indexj) in monthDay[indexi]" :key="indexj">
            <span :class="{'day-style':monthDay[indexi][indexj]!==d,'this-day-style':monthDay[indexi][indexj]==d}" @click="getSelectDate(monthDay[indexi][indexj])">{{monthDay[indexi][indexj]}}</span>
            <br v-if="indexj==6">
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cd-date-picker',
  data: function () {
    return {
      show_date_dialog: false,
      year: null,
      month: null,
      d: null,
      day: null,
      ymd: null,
      firstDay: null,
      monthDay: null,
      select_date: null
    }
  },
  created () {
    this.initYMD()
    this.initMonthDay()
  },
  methods: {
    initYMD () {
      this.year = new Date().getFullYear()// 年
      this.month = new Date().getMonth()// 月
      this.d = new Date().getDate()// 日
      this.day = new Date(this.year, this.month + 1, 0).getDate()// 日总和
      this.ymd = this.year + ',' + (this.month + 1) + ',' + '01'
      this.firstDay = new Date(this.ymd).getDay() // 当前日是周几
    },

    initMonthDay () {
      this.monthDay = []
      for (let i = 0; i < 6; i++) {
        this.monthDay[i] = []
        for (let j = 0; j < 7; j++) {
          this.monthDay[i][j] = 0
        }
      }
      let count = 0
      let countDay = 1
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (countDay > this.day) break
          if (this.firstDay === count) {
            this.monthDay[i][j] = countDay
            countDay++
          } else {
            count++
          }
        }
      }
    },

    showDateDialog () {
      this.show_date_dialog = !this.show_date_dialog
    },

    getMonthDayCount () {
      this.day = new Date(this.year, this.month + 1, 0).getDate()// 日总和
      this.ymd = this.year + ',' + (this.month + 1) + ',' + '01'
      this.firstDay = new Date(this.ymd).getDay() // 当前日是周几
    },

    setMonthDay () {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          this.monthDay[i][j] = 0
        }
      }
      let count = 0
      let countDay = 1
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          if (countDay > this.day) break
          if (this.firstDay === count) {
            this.monthDay[i][j] = countDay
            countDay++
          } else {
            count++
          }
        }
      }
    },

    getSelectDate (day) {
      this.select_date = this.year + '-' + (this.month + 1) + '-' + day
      this.show_date_dialog = false
    },

    getBeforeMonth () {
      this.month--
      this.getMonthDayCount()
      this.setMonthDay()
    },

    getAfterMonth () {
      this.month++
      this.getMonthDayCount()
      this.setMonthDay()
    }
  }
}
</script>

<style scoped>
  .date-parent{
    position: relative;
  }
  .date-child{
    position: absolute;
    left: 55px;
    top: 30px;
    border: 1px solid #cccccc;
    padding: 10px;
  }
  .week-style{
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px
  }
  .day-style{
    color: white;
    font-size: 12px;
    background-color: #cccccc;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px
  }
  .this-day-style{
    color: white;
    font-size: 12px;
    background-color: red;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    text-align: center;
    line-height: 20px
  }
</style>
