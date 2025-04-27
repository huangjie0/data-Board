<template>
    <div class="data-home-center-right data-w-h">
        <TitleCard title="本年在途项目一览" icon-class="icon-dianpu1">
            <div class="data-home-center-right-container data-w-h">

            </div>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';


</script>
<style lang="less" scoped>
.data-home-center-right{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    &-container{
        padding: 10px;
        background-color: pink;
    }
}   
</style>