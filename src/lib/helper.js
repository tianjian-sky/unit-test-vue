export default {
    validTimeFormat (str) { // 判断输入日期格式是否符合'yyyy-mm-dd'
        if (!str || typeof str !== 'string') {
            console.error('格式错误')
            return false
        }
        str = str.split('-')
        let [year, month, date] = [...str]
        if (isNaN(parseFloat(year, 10)) || isNaN(parseFloat(month, 10)) || isNaN(parseFloat(date, 10))) {
            console.error('格式错误,年月日必须是数字')
            return false
        }
        if (year < 0 || year > 3000) {
            console.error('年份范围不合理')
            return false
        }
        if (month > 12 || month <= 0) {
            console.error('月份范围不合理')
            return false
        }
        if (date > 31 || date <= 0) {
            console.error('日期范围不合理')
            return false
        }
        if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) >= 0 && date >30) {
            console.error('日期范围不合理,该月没有31号')
            return false
        }
        if (month == 2 && date > 29) {
            console.error('日期范围不合理,2月份日期不能大于29')
            return false
        }
        let isLeap = ((year % 4 == 0) && ( year % 100 != 0) ||(year % 400 == 0))
        if (!isLeap && month == 2 && date > 28) {
            console.error('日期范围不合理,非闰年2月日期不能大于28')
            return false
        }
        return true
    },
    getEndDate (year, month) { // 根据输入年份月份返回当月天数
        if (isNaN(parseFloat(year, 10)) || isNaN(parseFloat(month, 10))) {
            console.error('格式错误,年月必须是数字')
            return false
        }
        if (year < 0 || year > 3000) {
            console.error('年份范围不合理')
            return false
        }
        if (month > 12 || month <= 0) {
            console.error('月份范围不合理')
            return false
        }
        if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) >= 0) {
            return 31
        } else if (month == 2) {
            let isLeap = ((year % 4 == 0) && ( year % 100 != 0) ||(year % 400 == 0))
            if (!isLeap) {
                return 28
            } else {
                return 29
            }
        } else {
            return 30
        }
      
    },
    getCurrentDate() { // 模拟接口请求返回当天日期字符串
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('2018-10-03')
            }, 3000)
        })
    },
    getWindowSize () {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
}