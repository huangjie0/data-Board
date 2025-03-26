<template>
    <div class="data-home data-w-h data-fdc">
        <div class="data-home-top">
            <Top/>
        </div>
        <div class="data-home-center data-fdr">
            <div class="data-home-center-left data-fdc">
                <div class="data-f1 data-home-center-left-top">
                    <CenterLeftTop/>
                </div>
                <div class="data-f1">
                    <CenterLeftBottom/>
                </div>
            </div>
            <div class="data-f1">
                <CenterRight/>
            </div>
        </div>
        <div class="data-home-bottom data-fdr">
            <div class="data-home-bottom-left data-f1">
                <BottomLeft/>
            </div>
            <div class="data-home-bottom-center data-f1">
                <BottomCenter/>
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
import CenterLeftTop from './components/CenterLeftTop.vue';
import CenterLeftBottom from './components/CenterLeftBottom.vue';
import BottomLeft from './components/BottomLeft.vue';
import BottomCenter from './components/BottomCenter.vue';
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