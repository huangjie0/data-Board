<template>
    <div class="data-preview-header data-around">
        <div class="data-preview-header-left data-around">
            <i class="iconfont icon-qihang data-preview-header-left-icon"></i>
            <span class="data-preview-header-left-title">上海业扩可研分析管控</span>
        </div>
        <div class="data-f1 data-w-h">
            <Menus/>
        </div>
        <div class="data-preview-header-right data-around">
             <el-avatar :size="35" :src="circleUrl"/>
             <el-dropdown>
                <div class="data-center">
                    Adminadsadasdm..
                    <el-icon :size="20" color="#1F3696">
                        <CaretBottom/>
                    </el-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item disabled>Action 4</el-dropdown-item>
                        <el-dropdown-item divided>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
             </el-dropdown>
             <div class="data-fdc">
                <div class="data-preview-header-right-time">23:50:24</div>
                <div class="data-preview-header-right-date">2025/5/5周一</div>
             </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { CaretBottom } from '@element-plus/icons-vue';
import Menus from './Menus.vue';

const circleUrl = ref("https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png")


</script>
<style lang="less" scoped>
    .data-preview-header{
        height: 71px;
        width: 100%;
        background-color: var(--vt-c-white);
        box-shadow: 0px 3px 7px 0px rgba(39,114,255,0.13);
        border-bottom: 0 0 var(--small-radius) var(--small-radius);
        &-left,&-right{
            height: 100%;
            width: 20%;
            &-time{
                font-size: 25px;
                font-weight: 550;
                color: var(--common-home-bg-3);
            }
            &-date{
                font-size: 15px;
                color: var(--common-home-bg-3);
            }
            &-icon{
                font-size: 35px;
                color: var(--common-home-bg-2);
            }
            &-title{
                font-size: 28px;
                font-family: 'chaozishetulongdaojianfanhuisa';
                color: var(--common-home-bg-3);
            }
        }
    }
</style>