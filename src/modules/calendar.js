import './calendar.less'
import tpl from './calendar.ejs'
import tplItem from './calendarItem.ejs'
import helpers from '../lib/helper'

export default class Calendar{
    get month () {
        return this.thisMonth
    }
    get year () {
        return this.thisYear
    }
    get date () {
        return this.thisDate
    }
    get ele () {
        return this.thisEle
    }
    set month (v) {
        this.thisMonth = v
    }
    set year (v) {
        this.thisYear = v
    }
    set date (v) {
        this.thisDate = v
    }
    set ele (v) {
        this.thisEle = v
    }

    constructor () {
    }

    init (id) {
        let ele = document.getElementById(id)
        this.ele = ele
        this.ele.innerHTML = tpl()
        this.ele.querySelector('#submit').onclick =  () => {
            this.setTime(this.ele.querySelector('input').value)
            this.show()
        }
    }

    setTime (str) {

        if (!helpers.validTimeFormat(str)) {
            console.error('输入参数不合法')
            return
        }
        str = str.split('-')
        this.year = str[0]
        this.month = str[1]
        this.date = str[2]
        console.log(this)
    }

    show () {
        let year = this.year
        let month = this.month
        console.log(year, month)
        let date = this.date
        let begin = 1
        let end = helpers.getEndDate(year, month)
        if (!end) {
            console.error('参数格式错误')
            return
        }
        let html = ''
        for (var i = begin; i <= end; i++)
        html += tplItem({
            year,
            month,
            date: i,
            isToday: i == date
        })
        this.ele.querySelector('.calendarArea').innerHTML = html
    }
}