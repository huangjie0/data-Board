<template>
    <div class="data-w-h">
        <div class="number-text-card data-fdr">
            <img :src="imgUrl">
            <div class="number-text-card-title data-center">{{ text }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
interface Params{
    imgUrl:string
    text:string
    number:number
    unit:string
}

withDefaults(defineProps<Params>(),{
    unit:'个'
})

</script>
<style lang="less" scoped> 
.number-text-card{
    width: 70%;
    height: 95%;
    border-radius: var(--common-split);
    background: linear-gradient(90deg, #DBE6FC 0%, rgba(255,255,255,0.65) 100%);
    padding: 8px 19px;
    &-title{
        margin-left: 27px;
        font-size: 20px;
        color: #283A84;
    }
}
</style>