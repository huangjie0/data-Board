
export default class DateTimeUtils{
    /**
     * 时间格式方法
     * 
     * @param { Date | Number } time 时间戳，秒级/毫秒级 或者日期型 Date
     * @param { String } format 格式化时间类型，默认  Y-M-D H:I:S
     * @param { string } formatDate 格式化后的时间 例如： 2023-11-06 16:11:22
     */

    static formatDate(time:any,format:any){
        if(!time) return ''
        if(isNaN(parseInt(time)) && !(time instanceof Date)) return time;

        let date = new Date(time);
        let o:any = {
            "M+": date.getMonth() + 1, //月
            "d+": date.getDate(), //日
            "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //时间
            "H+": date.getHours(), //２４时间
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季
            "S": date.getMilliseconds() //毫秒
        };
        let week:any = {
            "0": "日",
            "1": "一",
            "2": "二",
            "3": "三",
            "4": "四",
            "5": "五",
            "6": "六"
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(format)) {
            format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? "周" : "") + week[date.getDay() + ""]);
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }

        return format;
    }
}

