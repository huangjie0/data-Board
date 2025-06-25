<template>
  <MyE :option="o" :is-click="isClick"></MyE>
</template>
<script setup lang="ts">
interface Params {
  isClick?: boolean
  type?:string
  data: any
  center?:any
}

const props = withDefaults(defineProps<Params>(), {
  isClick: false,
  center:["40%","50%"]
});

const o = computed(() => {
  let c:any = ["#DA5111", "#E87A0F", "#F29417" , "#F5B24F", "#FADDB0"];
  let c1:any = [];
  return {
    legend: {
      type: "scroll",
      orient: "vertical",
      right: "0%",
      top: "middle",
      itemWidth: 14,
      itemHeight: 14,
      textStyle: {
        color: "#192C7D",
      },
      icon: "rect",
    },
    series: [
      {
        name: "测试玫瑰图",
        type: "pie",
        radius: [10, 70],
        center: props.center,
        roseType: "area",
        itemStyle: {
          borderRadius: 3,
        },
        color: props.type === '0' ? c : c1,
        label: {
          formatter: "{a|{b}：{c}}\n{hr|}",
          rich: {
            //圆点位置大小配置
            hr: {
              //auto自定义
              backgroundColor: "auto",
              borderRadius: 3,
              width: 3,
              height: 3,
              padding: [3, 3, 0, -12],
            },
            a: {
              padding: [-12, 10, -20, 15],
            },
          },
        },

        //折线图长度
        labelLine: {
          //第一段
          length: 3,
          //第二段
          length2: 20,
        },
        data: props.data,
      },
    ],
  };
});
</script>
<style lang="less" scoped></style>
