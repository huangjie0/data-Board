<template>
    <div class="score-card data-w-h data-fdr">
        <div class="score-card-left data-center">
            <img :src="first" v-if="index === 1">
            <img :src="second" v-else-if="index === 2">
            <img :src="third" v-else-if="index === 3">
            <SmallCircleIntegral :number="index" v-else></SmallCircleIntegral>
        </div>
        <div class="score-card-right data-f1">

        </div>
    </div>
</template>
<script setup lang="ts">
import first from '@/assets/style/image/first.png';
import second from '@/assets/style/image/second.png';
import third from '@/assets/style/image/third.png';

interface Params{
    number:number
    name:string
    index:number
}

defineProps<Params>()


</script>
<style lang="less" scoped>
    .score-card{
        position: relative;
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
        &-left{
            width: 70px;
            background: linear-gradient(75deg, #D4E3FC 0%, #F1F2FC 100%);
        }
        &-right{
            // background-color: pink;
        }
    }
</style>