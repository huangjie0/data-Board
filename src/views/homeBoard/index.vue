<template>
    <div class="home-board">
        <FirstBoard></FirstBoard>
        <SecondBoard></SecondBoard>
        <ThirdBoard></ThirdBoard>
        <FourthBoard></FourthBoard>
        <FifthBoard></FifthBoard>
    </div>
</template>
<script setup lang="ts">
import FirstBoard from './components/FirstBoard.vue';
import SecondBoard from './components/SecondBoard.vue';
import ThirdBoard from './components/ThirdBoard.vue';
import FourthBoard from './components/FourthBoard.vue';
import FifthBoard from './components/FifthBoard.vue';
</script>
<style lang="less" scoped>
    .home-board{
        padding: 0 2.375rem;
    }
</style>