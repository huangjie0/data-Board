<template>
    <div class="data-home data-w-h data-fdc">
        <div class="data-home-top">
            <Top/>
        </div>
        <div class="data-home-center data-fdr">
            <div class="data-home-center-left data-fdc">
                <div class="data-f1 data-home-center-left-top">
                    <CommonPie card-title="本年委托可研项目数量" icon-class="icon-pingpangqiu" name="bnwt"/>
                </div>
                <div class="data-f1">
                    <CommonPie card-title="本年已完成可研项目数量" icon-class="icon-muai" name="bnywc"/>
                </div>
            </div>
            <div class="data-f1">
                <CenterRight/>
            </div>
        </div>
        <div class="data-home-bottom data-fdr">
            <div class="data-home-bottom-left data-f1">
                <CommonBar cardTitle="在途项目平均时长" icon-class="icon-qingdan" kytype="ztxm"/>
            </div>
            <div class="data-home-bottom-center data-f1">
                <CommonBar cardTitle="可研批复平均时长" icon-class="icon-qihang" kytype="kypf"/>
            </div>
            <div class="data-f1">
                <BottomRight/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Top from './components/Top.vue';
import CenterRight from './components/CenterRight.vue';
import BottomRight from './components/BottomRight.vue';

</script>
<style lang="less" scoped>
.data-home{
    justify-content: space-between;
    background-color: #c3d6d4;
    padding: var(--common-split);
    &-top{
        height: 17%;
    }
    &-center{
        height: 51%;
        &-left{
            width: 25%;
            margin-right: var(--common-split);
            &-top{
                margin-bottom: var(--common-split);
            }
        }
    }
    &-bottom{
        height: 30%;
        &-left{
            margin-right:  var(--common-split);
        }
        &-center{
            margin-right:  var(--common-split);
        }
    }
}
</style>