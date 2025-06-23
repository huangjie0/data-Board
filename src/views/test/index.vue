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
            <Bar3 :data="d2" :bar-search-name="['同比','环比','指标值']"></Bar3>
        </div>
        <div class="test">
            <Bar3 :data="d3" :bar-search-name="['环比','指标值']"></Bar3>
        </div>
    </div>
</template>
<script setup lang="ts">
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
        { name:'久隆设计', tb:23, hb: 25, zbz:54 },
        { name:'东捷设计', tb:89, hb: 35, zbz:44 },
        { name:'上电设计', tb:23, hb: 25, zbz:54 },
        { name:'上海院', tb:23, hb: 25, zbz:54 },
        { name:'市南设计', tb:23, hb: 25, zbz:54 },
    ]
})

const d3 = computed(()=>{
    return [
        { name:'久隆设计', hb:12 , zbz: 90 },
        { name:'东捷设计', hb:23 , zbz: 40 },
        { name:'上电设计', hb:43 , zbz: 40 },
        { name:'上海院', hb:21 , zbz: 30 },
        { name:'市南设计', hb:9 , zbz: 20 },
    ]
})
</script>
<style lang="less" scoped>
    .test{
        width: 500px;
        height: 250px;
    }
</style>