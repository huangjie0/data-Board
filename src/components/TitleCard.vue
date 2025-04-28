<template>
    <div class="title-card data-w-h data-fdc">
        <div class="title-card-top">
            <i class="iconfont title-card-top-icon" :class="iconClass"></i>
            <span class="title-card-top-text">
                {{ title }}
            </span>
            <div class="right-value data-f1">
                <slot name="rightValue"></slot>
            </div>
        </div>
        <div class="title-card-content data-f1">
            <slot/>
        </div>
    </div>
</template>
<script setup lang="ts">
interface Params{
    title:string;
    iconClass:string
}

defineProps<Params>();
</script>
<style lang="less" scoped>
.title-card{
    &-top{
        display: flex;
        justify-content: start;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid var(--vt-c-text-dark-2);
        &-icon{
            font-size: 25px;
            color: #0d867f;
            padding: 0 10px;
        }
        &-text{
            font-size: 17px;
            font-weight: 550;
        }
    }
    &-content{
        overflow-y: auto;
        overflow-x: hidden;
    }
    .right-value{
        height: 100%;
        padding-right: 10px;
        display: flex;
        justify-content: end;
        align-items: center;
    }
}
</style>