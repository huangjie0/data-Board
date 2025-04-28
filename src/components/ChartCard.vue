<template>
    <div class="data-w-h data-fdc">
        <div class="data-center chart-card-title">{{ title }}</div>
        <slot/>
    </div>
</template>
<script lang="ts" setup>
interface Params{
    title:string
}

defineProps<Params>();

</script>
<style lang="less" scoped>
.chart-card-title{
    font-size: 14px;
    color:'#707070';
    font-weight: 550;
}
</style>