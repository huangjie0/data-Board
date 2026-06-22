<template>
    <div class="data-w-h top-center-1 data-fdc">
        <div class="data-f1 data-fdr data-between">
            <div class="top-center-1-top">
                <GouPiTanSmallCard name="设备状态评价与维护检修"/>
            </div>
            <div class="top-center-1-top">
                <GouPiTanSmallCard name="设备状态评价与维护"/>
            </div>
        </div>
        <div class="data-f1 data-fdr data-between">
            <div class="top-center-1-top">
                <GouPiTanSmallCard name="设备全生命周期管理"/>
            </div>
            <div class="top-center-1-top">
                <GouPiTanSmallCard name="设备状态检修辅助决策"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import GouPiTanSmallCard from './GouPiTanSmallCard.vue'
</script>

<style scoped lang="less">
.top-center-1{
    padding: 10px 15px 5px 15px;
    &-top{
        height:100%;
        width: 49%;
    }
}
</style>