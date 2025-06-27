<template>
    <div style="display:flex;flex-wrap: wrap;">
        <div class="test">
            <Bar2 title-text="可研评审问题评分" bar-color="#407CF8" :data="d" y-name="分"></Bar2>
        </div>
        <div class="test">
            <Bar2 title-text="可研收口问题评分" bar-color="#5BC49F" :data="d" y-name="分"></Bar2>
        </div>
        <div class="test">
            <Bar2 title-text="可研调整评分" bar-color="#FEB64D" :data="d" y-name="分"></Bar2>
        </div>
        <div class="test">
            <Bar3 :data="d2"></Bar3>
        </div>
        <div class="test">
            <Pie2 :data="d"></Pie2>
        </div>
         <div class="test">
            <Test></Test>
        </div>
    </div>
</template>
<script setup lang="ts">
import Test from './test.jsx';

const d = computed(()=>{
    return [
        { name:"上海院",value:89 },
        { name:"久隆设计",value:60 },
        { name:"市南设计",value:20 },
        { name:"上电设计",value:30 },
        { name:"东捷设计",value:56 }
    ]
})

const d2 = computed(()=>{
    return [
        { name:'久隆设计', value:0.5 , value2:0.6 , value3:25 },
        { name:'东捷设计',  value:0.2 , value2:0.5 , value3:60},
        { name:'上电设计',  value:0.4 , value2:0.4 , value3:70},
        { name:'上海院',  value:0.6, value2:0.3 , value3:30},
        { name:'市南设计', value:0.1 , value2:0.2 , value3:19 },
    ]
})
</script>
<style lang="less" scoped>
    .test{
        width: 500px;
        height: 250px;
    }
</style>