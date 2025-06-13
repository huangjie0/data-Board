<template>
    <div class="number-card data-center" :class="'num-' + id">
        {{ d.num.toFixed(0) }}
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const id = ref<any>(null)
//初始值
const d = reactive({
    num: 0
})

interface Params{
    value:number,
    duration:number
}

const props = withDefaults(defineProps<Params>(),{
    value:0,
    duration:2
})

const animateToValue = ()=>{
    gsap.to(d,{
        scrollTrigger: ".num-" + id.value,
        duration: props.duration,
        num:props.value

    })
}

const asynchronousRendering = ()=>{
    nextTick(()=>{
         gsap.registerPlugin(ScrollTrigger);
        animateToValue();
    })
} 

onMounted(()=>{
    id.value = Math.random().toString(16).slice(2);
    asynchronousRendering()
})

watch(() => props.value,()=>{ asynchronousRendering() })


</script>
<style lang="less" scoped>
    .number-card{
        width: 26px;
        height: 100%;
        border-radius: 3px;
        background: linear-gradient(0deg, #526BFB 0%, #3F7DF8 100%);
        color: white;
        font-size: 20px;
        font-weight: 550;
        margin-right: 6px;
    }
</style>