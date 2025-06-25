<template>
    <div class="first-board data-fdr data-between">
        <div v-for="i in 3" class="first-board-item data-fdc">
            <div v-for="(item,index) in d.slice(i,i+2)" :key="index" class="data-f1 first-board-item-i">
                <NumberTextCard :text="item.text" :number="item.number" :img-url="item.imgUrl"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"> 
import NumberTextCard from '@/components/NumberTextCard.vue';
import i1 from '@/assets/style/image/i1.png';
import i2 from '@/assets/style/image/i2.png';
import i3 from '@/assets/style/image/i3.png';
import i4 from '@/assets/style/image/i4.png';
import i5 from '@/assets/style/image/i5.png';
import i6 from '@/assets/style/image/i6.png';

const d = computed(()=>{
    return [
        { text:'本年累计委托可研项目数量',number:213, imgUrl:i1 },
        { text:'本年度已批复项目平均时长',number:213, imgUrl:i2 },
        { text:'本年累计完成评审项目',number:213, imgUrl:i3 },
        { text:'当前在途项目平均时长',number:213, imgUrl:i4 },
        { text:'目前在途超长项目数量',number:213, imgUrl:i5 },
        { text:'近三月在途项目结存率',number:213, imgUrl:i6 },
    ]
})
</script>
<style lang="less">
.first-board{
    height: 8.375rem;
    margin: 2.375rem 0 2.375rem 0;
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    box-shadow: 0px 3px 7px 0px rgba(139,168,213,0.13);
    padding: 1.1875rem 3.5625rem;
    &-item{
        height: 100%;
        width: 25%;
        &-i{
            margin-bottom: .3125rem;
        }
    }
}
</style>