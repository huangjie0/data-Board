<template>
    <div class="home-board data-w-h">
        <div class="home-board-top data-between">
            <div class="home-board-top-title data-f1 data-w-h data-fdr">
                <i class="iconfont icon-shendusikao home-board-top-title-icon"></i>
                <span class="home-board-top-title-font">上海业扩可研分析管控</span>
            </div>
            <div class="home-board-top-menus data-w-h data-between">
                <SmallCircleCard icon-class="icon-jiantou1"></SmallCircleCard>

                <div class="data-f1 data-w-h">
                    <ParallelogramCard></ParallelogramCard>
                </div>

                <SmallCircleCard icon-class="icon-jiantou"></SmallCircleCard>
            </div>
            <div class="home-board-top-time data-f1 data-w-h data-fdr">
                <el-avatar :size="30" :src="circleUrl" />
                <el-dropdown class="home-board-top-time-dropdown">
                    <div class="el-dropdown-link data-fdr">
                        Adminadm..
                        <el-icon>
                            <arrow-down />
                        </el-icon>
                    </div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>Action 1</el-dropdown-item>
                            <el-dropdown-item>Action 2</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <div class="data-f1 data-w-h home-board-top-time-date">
                    <div class="data-f1 home-board-top-time-date-t1">23:50:24</div>
                    <div class="data-f1 home-board-top-time-date-t2">2025/5/5周一</div>
                </div>
            </div>
        </div>
        <div class="home-board-container">
           
        </div>
    </div>
</template>
<script lang="ts" setup>
import SmallCircleCard from './components/SmallCircleCard.vue';
import ParallelogramCard from './components/ParallelogramCard.vue';

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
</script>
<style lang="less" scoped>
.home-board{
    background-color: var(--common-home-bg );
    &-top{
        width: 100%;
        height: 71px;
        background-color:white;
        border-bottom-right-radius: var(--small-radius);
        border-bottom-left-radius: var(--small-radius);
        box-shadow: 0px 3px 7px 0px rgba(39,114,255,0.13);
        padding: 0 38px;
        &-title{
            align-items: center;
            &-icon{
                font-size: 40px;
                color: var(--common-home-bg-2);
            }
            &-font{
                font-family: 'MyFont';
                font-size: 21px;
                margin-left: 5px;
                color: var(--common-home-bg-3);
            }
        }   
        &-time{
            align-items: center;
            &-date{
                display: flex;
                flex-direction: column;
                margin-left: 33px;
                color: var(--common-home-bg-3);
                &-t1{
                    font-size: 25px;
                    font-weight: 550;
                }
                &-t2{
                    font-size: 16px;
                }
            }
            &-dropdown{
                margin-left: 10px;
                div{
                    align-items: center;
                }
            }
        }
        &-menus{
            width: 70% !important;
            padding: 0 88px;
        }
    }
}
</style> 