<template>
    <div class="data-w-h top-left data-fdc">
        <div class="data-f1 data-fdr data-between">
            <div class="top-left-top">
                <GouPiTanSmallCard name="智能控制"/>
            </div>
            <div class="top-left-top">
                <GouPiTanSmallCard name="智能监盘"/>
            </div>
        </div>
        <div class="data-f1">
            <GouPiTanSmallCard name="声纹识别"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import GouPiTanSmallCard from './GouPiTanSmallCard.vue'
</script>

<style scoped lang="less">
.top-left{
    padding: 10px 15px 5px 15px;
    box-sizing: border-box;
    &-top{
        height:100%;
        width: 49%;
    }
}
</style>