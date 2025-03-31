<template>
    <div class="title-card data-w-h data-fdc">
        <div class="title-card-top">
            <i class="iconfont title-card-top-icon" :class="iconClass"></i>
            <span class="title-card-top-text">
                {{ title }}
            </span>
            <div class="right-value">
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
    title:string,
    iconClass:string
}

defineProps<Params>();
</script>
<style lang="less" scoped>
.title-card{
    &-top{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid var(--vt-c-text-dark-2);
        &-icon{
            font-size: 25px;
            color: #0d867f;
        }
        &-text{
            font-size: 17px;
            font-weight: 550;
        }
    }
    &-content{
        overflow-y: auto;
    }
    .right-value{
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: end;
        align-items: center;
    }
}
</style>