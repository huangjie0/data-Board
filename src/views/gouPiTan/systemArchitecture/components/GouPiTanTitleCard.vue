<template>
    <div class="data-w-h data-fdc gou-pi-tan-title-card" :style="style">
        <div class="gou-pi-tan-title-card-title data-center" v-if="title">{{ title }}</div>
        <div class="data-f1">
            <slot/>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Params {
    title?:string | undefined;
    bgUrl:string | undefined;
}
const props = defineProps<Params>()
const style = computed(()=>{
    return {
        backgroundImage:`url(${props.bgUrl})`
    }
})
</script>
<style lang="less" scoped>
.gou-pi-tan-title-card{
    justify-content: space-between;
    background-size:100% 100%;
    &-title{
        width:100%;
        height:25px; 
        color:var(--common-home-bg-7);
        font-size:14px;
    }
}
</style>  