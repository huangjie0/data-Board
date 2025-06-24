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
  let min = 0
  let max = 0 
  if (props.data.data?.length) {
      let allValues = [...props.data.data.map((item: any) => item.value * 100), ...props.data.data.map((item: any) => item.value2 * 100), ...props.data.data.map((item: any) => item.value3)] 
      min = Math.floor(Math.min(...allValues) / 10) * 10
      max = Math.ceil(Math.max(...allValues) / 10) * 10
  }
  return {
    legend: {
      data: ['同比', '指标值', '环比', '总平均时长']
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
        name: "日",
        min: min - 60,
        max: max + 60,
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
        min: min - 60,
        max: max + 60,
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
        name: "同比",
        type: "bar",
        data: props.data?.map((item: any) => {
          return {
            name: item.name,
            value: item.value * 100
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
          color: "#FEB64D",
        },
      },
      {
        name: "指标值",
        type: "bar",
        data: props.data?.map((item: any) => {
          return {
            name: item.name,
            value: item.value3
          }
        }),
        yAxisIndex: 0,
        barWidth: 15,
        itemStyle: {
          borderRadius: 5, // 统一设置四个角的圆角大小
          color: "#526BFB",
        },
      },
      {
        name: "环比",
        type: "bar",
        data: props.data?.map((item: any) => {
          return {
            name: item.name,
            value: item.value2 * 100
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
          color: "#5BC49F",
        },
      },
      {
        name: "总平均时长",
        type: "line",
        yAxisIndex: 0,
        markLine: {
            symbol: 'none',
            data: [{
                yAxis: props.data.totalAvgTime || 0,  // 这里设置你的自定义平均值
                label: {
                  show: false,
                  position: 'middle', // 标签位置
                  formatter: '总平均时长: {c}', // 标签内容
                  padding: [5, 5], // 标签内边距
                  backgroundColor: '#fff', // 标签背景色
                  borderColor: '#999', // 标签边框颜色
                  borderWidth: 1, // 标签边框宽度
                  borderRadius: 4, // 标签圆角
                  distance: [0, 5], // 垂直偏移，负值表示向上移动
                  color: '#192C7D' // 文字颜色
                },
                emphasis: {
                  label: {
                    show: true // 鼠标悬停时显示 label
                  },
                },
                lineStyle: {
                    color: '#192C7D',  // 线条颜色
                    width: 1,
                    type: 'dashed'  // 虚线样式
                },
            }]
        }
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