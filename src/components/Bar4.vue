<template>
    <MyE :option="option" :is-click="isClick"></MyE>
</template>
<script setup lang="ts">
interface Params{
    data:any
    isClick?:boolean
}

const props = withDefaults(defineProps<Params>(),{
    isClick:false
})

const option = computed(() => {
  return {
    legend: {
      data: ['环比', '指标值']
    },
    grid: {
      bottom: '12%'
    },
    tooltip: {
      trigger: "axis",
      textStyle: {
        color: "#192C7D", //设置文字颜色
        fontSize: 13,
      }
    },
    xAxis: {
      type: "category",
      textStyle: {
        fontWeight: 400,
        fontSize: 12,
        color: "#3D5063",
      },
      data: props.data?.map((item:any) => item.name),
      axisTick: {
        show: false, // 不显示坐标轴刻度
      },
      axisLabel: {
        interval: 0, // 保证所有标签都显示，以便于后续通过 dataZoom 控制
      },
    },
    yAxis: [
      {
        type: "value",
        name: "个",
        position: 'left',
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
      },
      {
        type: "value",
        position: 'right',
        name: "%",
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
          },
        },
      }
    ],
    series: [
      {
        name: "环比",
        type: "bar",
        data: props.data?.map((item: any) => {
          return {
            name: item.name,
            value: item.value1 * 100
          }
        }),
        tooltip: {
          valueFormatter: function(value: string) {
            return parseFloat(value).toFixed(2) + '%';
          }
        },
        yAxisIndex: 1,
        barWidth: 15,
        itemStyle: {
          borderRadius: 5, // 统一设置四个角的圆角大小
          color: "#526BFB",
        },
      },
      {
        name: "指标值",
        type: "bar",
        data: props.data?.map((item: any) => {
          return {
            name: item.name,
            value: item.value2
          }
        }),
        yAxisIndex: 0,
        barWidth: 15,
        itemStyle: {
          borderRadius: 5, // 统一设置四个角的圆角大小
          color: "#5BC49F",
        },
      }
    ],
    dataZoom: [
      {
        // 设置滚动条的隐藏与显示
        show: true,
        // 设置滚动条类型
        type: "inside",
        showDetail: false,
        startValue: 0,
        endValue: 4,
        minValueSpan: 1, // 最小显示数量
        maxValueSpan: 4, // 最大显示数量
        // 滚轮是否触发缩放
        zoomOnMouseWheel: true,
        // 鼠标滚轮触发滚动
        moveOnMouseMove: true,
        moveOnMouseWheel: true,
      },
    ],
  };
});
</script>
<style lang="less" scoped>
    
</style>