<template>
    <div class="gou-pi-tan-common-page data-w-h">
        <div class="gou-pi-tan-common-page-content">
            <slot></slot>
        </div>
        <div class="gou-pi-tan-common-page-menu">
            <div class="gou-pi-tan-common-page-menu-item">
                <GouPiTanMenuButton v-for="(item,index) in menus" :key="index" :name="item.name" :menu-url="item.menuUrl" :route="item.path"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import GouPiTanMenuButton from './GouPiTanMenuButton.vue';
import blueButton from '@/assets/style/image/gouPiTan/blueButton.png'
import blueButton2 from '@/assets/style/image/gouPiTan/blueButton2.png'
import yellowButton from '@/assets/style/image/gouPiTan/yellowButton.png'

const menus = computed(()=>{
    return [
        { name:'系统架构',menuUrl: blueButton,path:'/systemArchitecture' },
        { name:'硬件架构',menuUrl: blueButton },
        { name:'数据流转',menuUrl: yellowButton, path:'/dataFlow' },
        { name:'设备模型',menuUrl: blueButton2 },
        { name:'人工智能',menuUrl: blueButton2 }
    ]
})
</script>
<style lang="less" scoped>
    .gou-pi-tan-common-page{
        background-image: url('@/assets/style/image/gouPiTan/backgroundImage.png');
        background-size: 100% 100%;
        position: relative;
        &-content{
            width: 100%;
            height: calc(100% - 65px);
            position: absolute;
            top: 0;
            box-sizing: border-box;
            padding: 80px 38.81px 23.25px 38.81px;
        }
        &-menu{
            width: 100%;
            height: 65px;
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: center;
            &-item{
                width: 42%;
                padding-bottom: 20px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>