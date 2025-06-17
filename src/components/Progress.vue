<template>
     <div class="progress-container">
        <div class="progress-container-item" v-for="(_item,index) in rangeCount" :key="index" :style="{ backgroundColor: index < currentCount ? bgColor : transparentGrid }"></div>
    </div>
</template>
<script lang="ts" setup>
import NumberUtils from '@/utils/number.ts'

interface Params{
    value?:number,
    bgColor?:string
}

const props = withDefaults(defineProps<Params>(),{
    value: 0,
    bgColor: '#2772FF'
})

//设置进度格子数
const rangeCount = 50;
const currentCount = computed(() => Math.floor((props.value / 100) * rangeCount));
const transparentGrid = computed(() => NumberUtils.hexToRgba( props.bgColor,0.5));

</script>
<style lang="less" scoped>
.progress-container {
    width: 100%;
    height: 1rem;
    display: flex;
    overflow: hidden;
    &-item{
        flex: 1;
        margin-right: 0.41rem;
        height: 100%;
    }
}
</style>