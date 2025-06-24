<template>
    <div class="home-header data-between">
        <div class="home-header-left data-fdr">
            <i class="iconfont icon-shendusikao home-header-left-icon"></i>
            <span class="home-header-left-text">上海业扩可研分析管控</span>
        </div>
        <div class="data-f1 data-w-h" style="display: flex;">
           
        </div>
        <div class="home-header-right">

        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
    .home-header{
        position: fixed;
        top: 0;
        width: 100%;
        height: 4.4375rem;
        background-color: var(--vt-c-white);
        border-bottom-left-radius: var(--small-radius);
        border-bottom-right-radius: var(--small-radius);
        padding:  0 2.375rem;
        &-left{
            align-items: center;
            &-icon{
                font-size: 35px;
                margin-right: 10px;
                color: var(--common-home-bg-2);
            }
            &-text{
                font-family: MyFont;
                font-size: 28px;
                color: var(--common-home-bg-3);
            }
        }
        &-left,&-right{
            width: 20%;
            height: 100%;
        }
    }
</style>