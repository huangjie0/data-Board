<template>
    <div class="pentagon-score">
        <div class="pentagon-score-left">

        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
    .pentagon-score{
        width: 100%;
        height: 2.5rem;
        margin-bottom: 20px;
        position: relative;
        box-shadow: 0px 3px 7px 1px rgba(36,113,255,0.14);
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
        &-left{
            width: 70px;
            height: 100%;
            background: linear-gradient(75deg, #D4E3FC 0%, #F1F2FC 100%);
        }
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