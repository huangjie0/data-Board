import dayjs from "dayjs";

export default class DateTimeUtils{

    /**
     * @param { Date | string | number } date 日期对象、日期字符串或时间戳
     * @param { string } format 格式化字符串，例如 'YYYY-MM-DD' 或 'YYYY-MM-DD HH:mm:ss'
     * @returns { string } 格式化后的日期字符串
     */

    static formatDate(date:Date | string | number,format = "YYYY-MM-DD"){
        return dayjs(date).format(format)
    }
    
    /**
     * 
     * @param  { Date | string | number } date 日期对象、日期字符串或时间戳
     * @returns 
     */

    static getDayOfWeek(date:any){
        const days = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
        return days[date.getDay()]
    }
}

