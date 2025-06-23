<template>
    <MyE :option="o" :is-click="isClick"></MyE>
</template>
<script setup lang="ts">
interface Params{
    isClick?:boolean
    data:any
    barSearchName:any
    yName?:string
    showSplitLine?:boolean
    axisTick?:boolean
    barBorderRadius?:any
    barWidth?:number
}

const props = withDefaults(defineProps<Params>(),{
    yName:'日',
    showSplitLine:false,
    axisTick:false,
    barBorderRadius: [7, 7, 7, 7],
    barWidth:12
})

const source = computed(()=>{
    let a:any[] = []
    a.push(['product',...props.barSearchName])
    props.data?.forEach((item:any) => { 
        a.push([item?.name, item?.tb , item?.hb, item?.zbz ])
    })
    return a.map(item => item.filter((item2:any)=> item2 !== undefined))
})

const series = computed(()=>{
    let s:any[] = []
    for (let index = 0; index < props.barSearchName.length; index++) {
        s.push({ type:'bar', itemStyle:{ normal: {  barBorderRadius: props.barBorderRadius } },  barWidth: props.barWidth })
    }
    return s
})

const o = {
    legend: {},
    tooltip: {},
    dataset: {
        source: source.value
    },
    xAxis: { 
        type: 'category',
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
        name:props.yName,
        splitLine:{
            show: props.showSplitLine
        }
    },
    series: series.value
}

</script>
<style lang="less" scoped>
    
</style>