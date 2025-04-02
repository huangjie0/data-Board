<template>
    <div class="data-w-h" id="gantt_here" :style="style"></div>
</template>
<script lang="ts" setup>
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
import ganttData from '@/assets/json/ganttData.json';

const barHeight = 25;

const style = computed(() => {
  return {
    "--bar-height": barHeight / 2 + "px",
    "--bar-position": -(barHeight / 2) + "px",
  };
});

//初始化甘特图
const initGantt = () => {
  gantt.config.columns = [
    {
      name: "nickName",
      label: "户名",
      // 树模式
      tree: false,
      width: "*",
      align: "center",
    },
    {
      name: "theUnit",
      label: "所属单位",
      width: "*",
      align: "center",
    },
    {
      name: "accountManager",
      label: "客户经理",
      width: "*",
      align: "center",
    },
    {
      name: "designUnit",
      label: "设计单位",
      width: "*",
      align: "center",
      // template: function (obj: any) {
      //   return obj.start_date;
      // }
    },
  ];
  gantt.config.autosize = false; // 自动调整甘特图大小
  gantt.config.show_grid = true; // 是否显示左侧网格区域
  gantt.config.grid_width = 400; // 左侧列表宽度
  gantt.config.min_grid_column_width = 100; // 设置调整网格大小时左侧每一格的最小宽度---优先于grid_width
  gantt.config.add_column = false; //添加符号
  gantt.config.show_links = false; // 隐藏连线
  gantt.config.xml_date = "%Y-%m-%d"; // 日期格式化的匹配格式
  gantt.config.duration_unit = "day"; // 设置时间单位为天
  gantt.config.scales = [{ unit: "month", step: 1, format: "%F" }]; // 配置scale设置，只显示1月至12月
  gantt.config.start_date = new Date(new Date().getFullYear(), 0, 1); // 设置起始日期为2023年1月1日
  gantt.config.end_date = new Date(new Date().getFullYear(), 11, 31); // 设置结束日期为2023年12月31日
  //时间轴图表中，如果不设置，只有行边框，区分上下的任务，设置之后带有列的边框，整个时间轴变成格子状。
  // gantt.config.autofit = true; // 宽度是否自适应
  gantt.config.row_height = 50; // 设置行高
  gantt.config.bar_height = barHeight;
  gantt.config.scale_height = 50; // 设置时间刻度的高度和左侧表格头部高度
  gantt.config.fit_tasks = true; //自动延长时间刻度，以适应所有显示的任务
  gantt.config.auto_types = true; //将包含子任务的任务转换为项目，将没有子任务的项目转换回任务
  gantt.config.show_errors = false; //是否显示invalid datas错误
//   gantt.templates.task_class = function (start, end, task) {
//     switch (task.text) {
//       case '征询答复':
//         return '#0596c6'
//       case '供电方案答复':
//         return '#18bdc2'
//       case '可研送审':
//         return '#9285eb'
//       case '可研评审':
//         return '#57bc6f'
//     }
//   }

  gantt.config.readonly = true; //是否只读
  gantt.i18n.setLocale("cn"); //设置语言
  gantt.init("gantt_here"); //初始化
  gantt.parse(ganttData); //填充数据
};

onMounted(() => {
    window.addEventListener("resize", initGantt)
    initGantt()
})

onBeforeMount(() => {
    window.removeEventListener("resize", initGantt)
})

</script>
<style lang="less" scoped>
    // 去除边线
    :deep(.gantt_task_line) {
        border: 0;
    }

    // 增加箭头
    :deep(.gantt_task_line)::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: var(--bar-position);
        right: var(--bar-position);
        transform: rotate(45deg);
        width: 0;
        height: 0;
        border-left: var(--bar-height) solid transparent;
        border-right: var(--bar-height) solid transparent;
        border-top: var(--bar-height) solid transparent;
        border-bottom: var(--bar-height) solid #fff;
        z-index: 1;
    }
    :deep(.gantt_task_line)::after {
        content: "";
        display: inline-block;
        position: absolute;
        bottom: var(--bar-position);
        right: var(--bar-position);
        transform: rotate(-45deg);
        width: 0;
        height: 0;
        border-left: var(--bar-height) solid transparent;
        border-right: var(--bar-height) solid transparent;
        border-top: var(--bar-height) solid #fff;
        border-bottom: var(--bar-height) solid transparent;
    }

</style>