<template>
    <div class="number-card data-center">
        {{ value }}
    </div>
</template>
<script setup lang="ts">
interface Params{
    value:number
}

withDefaults(defineProps<Params>(),{
    value:0
})
</script>
<style lang="less" scoped>
    .number-card{
        width: 26px;
        height: 100%;
        border-radius: 3px;
        background: linear-gradient(0deg, #526BFB 0%, #3F7DF8 100%);
        color: white;
        font-size: 20px;
        font-weight: 550;
        margin-right: 6px;
    }
</style>