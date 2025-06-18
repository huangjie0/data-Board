<template>
    <div class="small-circle-number-card data-center">
        {{ number }}
    </div>
</template>
<script setup lang="ts"> 
interface Params{
    number:number
}
defineProps<Params>()
</script>
<style lang="less" scoped>
    .small-circle-number-card{
        width: 19px;
        height: 19px;
        background: #FFFFFF;
        box-shadow: 0px 2px 1px 0px rgba(36,113,255,0.14);
        border-radius: 50%;
        color:#407CF8;
    }
</style>