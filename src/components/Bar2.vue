<template>
    <MyE :option="o" :is-click="isClick"></MyE>
</template>
<script setup lang="ts">
import MathUtils from '@/utils/number.ts'

interface Params{
    isClick?:boolean
    titleText?:string
    titleLeft?:string
    titleTop?:string
    barColor?:string //柱子的颜色
    barBorderRadius?:any
    barWidth?:number
    showSplitLine?:boolean
    axisTick?:boolean
    yName?:string
    showLabelText?:boolean
    data:any[]
}

const props = withDefaults(defineProps<Params>(),{
    titleLeft:'center',
    titleTop:'10%',
    barBorderRadius: [7, 7, 7, 7],
    barWidth:18,
    showSplitLine:false,
    axisTick:false,
    yName:"日",
    showLabelText:true
})

const o = {
    tooltip:{
        trigger: 'axis',
        axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params:any) { // 自定义提示框内容
            return params[0].name + ":" + params[0].value;
        }
    },
    title: {
        text:props.titleText,
        left:props.titleLeft,
        top:props.titleTop,
        textStyle:{
            fontSize:13,
            color: '#192C7D' 
        }
    },
    xAxis: {
        type: 'category',
        data: props.data?.map((item)=>item.name),
        axisTick: {
            show: props.axisTick,  // 隐藏X轴的刻度线
        },
        axisLine:{
            lineStyle:{
                color:"#DBE6FC",
                width: 1 
            }
        },
        axisLabel:{
            textStyle:{
                color:'#3D5063'
            }
        }
    },
    yAxis: {
        type: 'value',
        name:props.yName,
        splitLine:{
            show: props.showSplitLine
        }
    },
    series: [
        {
            data: props.data.map((item)=>item.value),
            type: 'bar',
            label:{
                show:props.showLabelText,
                position: 'top',
                color: MathUtils.darkenColor(props.barColor,.5),
                textStyle:{
                    fontSize: 12,
                    fontWeight: 'bold'
                },
                formatter: (params:any)=> `${params.value}${props.yName}`
            },
            barWidth: props.barWidth,
            itemStyle:{
                normal:{
                    color: props.barColor,
                    barBorderRadius: props.barBorderRadius
                }
               
            }
        }
    ]
}
</script>
<style lang="less" scoped>
    
</style>