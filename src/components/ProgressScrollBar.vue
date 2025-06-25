<template>
    <div class="data-between progress-scroll-bar">
        <div class="progress-scroll-bar-text">{{ text }}</div>
        <div class="data-f1">
            <el-progress color="#407CF8" :percentage="number" :stroke-width="10" striped striped-flow />
        </div>
    </div>
</template>
<script lang="ts" setup>
interface Params{
    text: string
    number?:number
}

withDefaults(defineProps<Params>(),{
    number:100
})
</script>
<style lang="less" scoped>
.progress-scroll-bar{
    margin-bottom: 15px;
    &-text{
        width: 20%;
        font-size: 12px;
    }
}
</style>