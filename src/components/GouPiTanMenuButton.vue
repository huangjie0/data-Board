<template>
    <div class="gou-pi-tan-menu-button data-center" :style="style" @click="clickMenu">{{ name }}</div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

interface Params{
    menuUrl: string
    name:string
    route:string | undefined
}
const props = defineProps<Params>();
const style = computed(()=>{
    return {
        backgroundImage: `url(${props.menuUrl})`
    }
})
const clickMenu = ()=>{
    router.push(props.route || '')
}
</script>
<style lang="less">
    .gou-pi-tan-menu-button{
        width: 158px;
        height: 45px;
        color:#d4e5fb;
        font-size:20px;
        font-family: MyFont;
        background-size: 100% 100%;
        cursor: pointer;
    }
</style>