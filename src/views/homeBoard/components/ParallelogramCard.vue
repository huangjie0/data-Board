<template>
    <div class="data-center parallelogram" @click="clickPath" :class="{ active:isActive }">
        <span>{{ pathName }}</span>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const routerPath = computed(()=>{ return router.currentRoute.value.path })
const isActive = computed(()=>{ return props.path === routerPath.value })

interface Params{
    pathName:string
    path:string
}

const props = defineProps<Params>()

const clickPath = ()=>{
    router.push(props.path);
}


</script>
<style lang="less" scoped>
.parallelogram {
    width: 207px;
    height: 51px;
    transform: skew(-50deg); 
    background: linear-gradient(223deg, #F8FAFF, #DBE6FC);
    border-radius: 5px;
    font-size: 18px;
    margin-right: 20px;
    color: var(--common-home-bg-4);
}
.parallelogram span {   
    transform: skew(50deg);
}

.parallelogram:hover{
    background: linear-gradient(223deg, #7484FF, #2772FF);
    color: white;
    cursor: pointer;
}

.active{
    background: linear-gradient(223deg, #7484FF, #2772FF);
    color: white;
}
</style>