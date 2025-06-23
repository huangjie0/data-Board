<template>
    <div style="display:flex">
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
            <Bar3></Bar3>
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
</script>
<style lang="less" scoped>
    .test{
        width: 500px;
        height: 250px;
    }
</style>