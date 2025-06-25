<template>
    <div class="score-card data-w-h data-fdr">
        1111
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
    .score-card{
        position: relative;
        // box-shadow: 0px 3px 7px 1px rgba(36,113,255,0.14);
        border: 1px solid #A5C2FB;
        border-radius: 0 10px 10px 10px; /* 右上、右下、左下圆角，左上无圆角 */
        background-color: #fff;
        overflow: hidden;
        clip-path: polygon(
            12px 0,
            100% 0,
            100% 100%,
            0 100%,
            0 12px
        );
        &:before {
            content: "";
            position: absolute;
            top: 0px;
            left: -15px;
            width: 18px;
            height: 18px;
            transform: rotate(-45deg);
            transform-origin: left top;
            border-right: 1px solid #A5C2FB;
            border-bottom: 1px solid #A5C2FB;
        }
    }
</style>