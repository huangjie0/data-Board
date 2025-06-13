<template>
    <div class="data-w-h data-fdr number-text-card">
        <div class="number-text-card-item data-fdr">
            <img :src="imgUrl">
            <div class="number-text-card-item-title data-center">{{ text }}</div>
        </div>
        <NumberCard :value="item" v-for="(item,index) in n" :key="index"/>
        <span class="number-text-card-item-unit">{{ unit }}</span>
    </div>
</template>
<script lang="ts" setup>
import MathUtils from '@/utils/number.ts';

interface Params{
    imgUrl:string
    text:string
    number:number
    unit:string
}

const props = withDefaults(defineProps<Params>(),{
    unit:'个'
})

const n = computed(()=>{ return MathUtils.singleNumber(props.number) })

</script>
<style lang="less" scoped> 
.number-text-card{
    align-items: flex-end;
    &-item{
        width: 58%;
        height: 95%;
        border-radius: var(--common-split);
        background: linear-gradient(90deg, #DBE6FC 0%, rgba(255,255,255,0.65) 100%);
        padding: 8px 19px;
        &-title{
            margin-left: 27px;
            font-size: 20px;
            color: #283A84;
        }
        &-unit{
            color: var(--common-home-bg-2);
            font-weight: 550;
            font-size: 16px;
        }
    }
}
</style>