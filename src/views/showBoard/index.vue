<template>
    <div class="home-board data-w-h data-fdc">
        <Header/>
        <div class="home-board-box">
            <el-scrollbar>
                <router-view v-slot="{ Component , route }">
                    <keep-alive v-if="route.meta.keepAlive">
                        <component :is="Component"></component>
                    </keep-alive>
                    <component :is="Component" v-else></component>
                </router-view>
            </el-scrollbar>
        </div>
    </div>
</template>
<script setup lang="ts">
import Header from './components/Header.vue';

</script>
<style lang="less" scoped>
.home-board{
    background-color: var(--common-home-bg);
    &-box{
        margin-top: 4.4375rem;
        height: 100% - 4.4375rem;
    }
}
</style>