<template>
    <div class="first-card data-between">
        <div class="data-f1 data-w-h data-fdc first-card-box" v-for="(item,index) in d" :key="index">
            <div class="first-card-box-item" v-for="(item2,index2) in item.d" :key="index2">
                <NumberTextCard :img-url="item2.imgUrl" :text="item2.text" :number="item2.number" :unit="item2.unit" :justify-content="item?.justifyContent"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import NumberTextCard from './NumberTextCard.vue';
import i1 from '@/assets/style/image/i1.png';
import i2 from '@/assets/style/image/i2.png';
import i3 from '@/assets/style/image/i3.png';
import i4 from '@/assets/style/image/i4.png';
import i5 from '@/assets/style/image/i5.png';
import i6 from '@/assets/style/image/i6.png';

const d = computed(()=>{
    return [
        {
            d:[
                {
                    imgUrl:i1,
                    text:"本年累计委托可研项目数量",
                    number:213,
                    unit:"个"
                },
                {
                    imgUrl:i2,
                    text:"本年度已批复项目平均时长",
                    number:107,
                    unit:"日"
                },
            ]
        },
        {
            justifyContent:"center",
            d:[
                {
                    imgUrl:i3,
                    text:"本年累计完成评审项目",
                    number:213,
                    unit:"个"
                },
                {
                    imgUrl:i4,
                    text:"当前在途项目平均时长",
                    number:107,
                    unit:"日"
                }
            ]
        },
        {
            justifyContent:"end",
            d:[
                {
                    imgUrl:i5,
                    text:"目前在途超长项目数量",
                    number:213,
                    unit:"个"
                },
                {
                    imgUrl:i6,
                    text:"近三月在途项目结存率",
                    number:100,
                    unit:"%"
                }
            ]
        }
    ]
})
</script> 
<style lang="less" scoped>
.first-card{
    width: 100%;
    height: 134px;
    background-color: white;
    border-radius: var(--small-radius);
    box-shadow: 0px 3px 7px 0px rgba(139,168,213,0.13);
    padding: 20px 46px;
    &-box{
        justify-content: space-between;
        &-item{
            height: 45%;
        }
    }
} 
</style>