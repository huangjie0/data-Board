<template>
    <div class="menus data-center" @click="goPath" :class="{ activePath: hasRoute }">
        <span class="menus-text">
            {{ text }}
        </span>
    </div>
</template>
<script lang="ts" setup>
import { useRouter,useRoute } from 'vue-router';
interface Params{
    text:string
    path:string
}
const router = useRouter()
const route = useRoute()

// const hasRoute = ref()

// console.log(hasRoute.value);

const hasRoute = computed(()=> { return route.fullPath === props.path })

onMounted(()=>{
    console.log(hasRoute.value);
    
    
    
    
    
})

const props = defineProps<Params>()
const goPath = ()=>{
    router.push(props.path)
}
</script>
<style lang="less" scoped>
    .menus{
        width: 10rem;
        height: 3.1875rem;
        background: linear-gradient(223deg, #F8FAFF, #DBE6FC);
        color: #6674B4;
        transform:skewX(-45deg);
        border-radius: var(--small-radius);
        cursor: pointer;
        margin-right: 1.5625rem;
        &-text{
            display: block;
            transform: skewX(45deg);
            font-size: 18px;
        }
    }
    .menus:hover,.activePath{
        background: linear-gradient(223deg, #7484FF, #2772FF);
        color: white;
    }
</style>