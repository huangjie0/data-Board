<template>
    <div class="data-w-h data-fdr number-text-card" :style="style">
        <div class="number-text-card-item data-fdr">
            <div class="image-container">
                <img :src="imgUrl">
            </div>
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
    unit:string,
    justifyContent?:string
}

const props = withDefaults(defineProps<Params>(),{
    unit:'个',
    justifyContent:'start'
})

const n = computed(()=>{ return MathUtils.singleNumber(props.number) })
const style = computed(()=>{
    return {
        justifyContent:props.justifyContent
    }
})

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
.image-container{
    display: inline-block; 
    transition: transform 3s; 
}

.number-text-card:hover .image-container{
    transform: rotate(360deg);
}

</style>