<template>
    <div class="pentagon-score data-fdr">
        <div class="pentagon-score-left data-center">
            <img :src="f" v-if="index+1 === 1">
            <img :src="s" v-else-if="index+1 === 2">
            <img :src="t" v-else-if="index+1 === 3">
            <SmallCircleNumberCard :number="index + 1" v-else/>
        </div>
        <div class="data-between data-w-h data-f1">
            <div class="pentagon-score-item data-center">
                {{ grade }} 分
            </div>
            <div class="data-f1 data-between data-w-h">
                <div class="pentagon-score-item-left">
                    <el-progress :percentage="grade" :show-text="false" color="#4F6EFA" :stroke-width="10"/>
                </div>
                <div class="data-f1 data-w-h data-center">{{ text }}</div>
                <div class="pentagon-score-item-right">
                    <el-progress :percentage="grade"  :show-text="false" color="#5BC49F" :stroke-width="10"/>
                </div>
            </div>
            <div class="pentagon-score-item data-center">
                {{ grade }} 分
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import SmallCircleNumberCard from './SmallCircleNumberCard.vue';
import f from '@/assets/style/image/first.png';
import s from '@/assets/style/image/second.png';
import t from '@/assets/style/image/third.png';

interface Params{
    text:string
    grade:number
    index:number
}

withDefaults(defineProps<Params>(),{
    grade:0
})

</script>
<style lang="less" scoped>
    .pentagon-score{
        width: 100%;
        height: 2.5rem;
        margin-bottom: 15px;
        position: relative;
        box-shadow: 0px 3px 7px 1px rgba(36,113,255,0.14);
        border: 1px solid #A5C2FB;
        border-radius: 0 10px 10px 10px; /* 右上、右下、左下圆角，左上无圆角 */
        background-color: #fff;
        overflow: hidden;
        clip-path: polygon(
            12px 0,
            100% 0,
            100% 100%,
            0 100%,
            0 12px
        );
        &-item{
            height: 100%;
            width: 8%;
            &-left{
                transform: rotate(180deg);
            }
            &-left,&-right{
                width: 40%;
            }
        }
        &-left{
            width: 70px;
            height: 100%;
            background: linear-gradient(75deg, #D4E3FC 0%, #F1F2FC 100%);
        }
        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: -15px;
            width: 18px;
            height: 18px;
            transform: rotate(-45deg);
            transform-origin: left top;
            border-right: 1px solid #A5C2FB;
            border-bottom: 1px solid #A5C2FB;
        }
    }
</style>