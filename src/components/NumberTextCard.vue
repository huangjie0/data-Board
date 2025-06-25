<template>
    <div class="data-w-h data-fdr">
        <div class="text-card data-fdr">
            <img :src="imgUrl">
            <span class="text-card-t">{{ text }}</span>
        </div>
        <NumberCard v-for="(item,index) in ns" :key="index" :value="item"/>
        <div class="data-fdr unit">{{ unit }}</div>
    </div>
</template>
<script lang="ts" setup>
import NumberCard from './NumberCard.vue';
import MathUtils from '@/utils/number.ts'

interface Params{
    unit?:string
    text?:string
    number:number
    imgUrl?:string
}

const props = withDefaults(defineProps<Params>(),{
    unit:'个',
    number:100
})

const ns = computed(()=>{
    return MathUtils.singleNumber(props.number)
})
</script>
<style lang="less" scoped>
    .text-card{
        width: 70%;
        height: 90%;
        border-top-left-radius: var(--common-split);
        border-bottom-left-radius: var(--common-split);
        background: linear-gradient(90deg, #DBE6FC 0%, rgba(255,255,255,0.65) 100%);
        align-items: center;
        img{
            padding: 0 5px 0 15px;
        }
        &-t{
            font-weight: 400;
            font-size: 20px;
            color: #283A84;
        }
    }
    .unit{
        align-items: end;
        font-weight: bold;
        color: #407CF8
    }
</style>