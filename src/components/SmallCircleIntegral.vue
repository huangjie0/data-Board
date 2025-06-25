<template>
    <div class="small-circle-integral data-center">
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
.small-circle-integral{
    padding: .0625rem .5rem;
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px 0px rgba(36,113,255,0.14);
    color: #407CF8;
    font-size: 14px;
    font-weight: 400;
}
</style>