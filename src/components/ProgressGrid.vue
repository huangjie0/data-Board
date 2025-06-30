<template>
    <div class="progress-grid data-fdr">
        <div class="progress-grid-card data-center" :class="'num-' + id">{{ d.num.toFixed(0) }}</div>
        <div class="data-f1 data-fdc">
            <div class="progress-grid-card-text">{{ text }}</div>
            <div class="data-between">
                <Progress :value="number"></Progress>
                <div class="progress-grid-card-number">{{ number }}{{ unit }}</div>
            </div>
        </div>
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
    text:string
    number?:number
    unit?:string
    duration?:number
}
const props = withDefaults(defineProps<Params>(),{
    number:100,
    unit:'分',
    duration: 1
})
const animateToValue = ()=>{
    gsap.to(d,{
        scrollTrigger: ".num-" + id.value,
        duration: props.duration,
        num:props.number
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
watch(() => props.number,()=>{ asynchronousRendering() })
</script>
<style lang="less" scoped>
    .progress-grid{
        width: 100%;
        height: 2.5rem;
        margin-bottom: 5px;
        &-card{
            background: linear-gradient(0deg, #526BFB 0%, #3F7DF8 100%);
            padding: 10px 20px 10px 20px;
            color: white;
            border-radius: var(--small-radius);
            font-size: 18px;
            font-weight: bold;
            margin-right: 1.25rem;
            &-number{
                width: 10%;
                font-size: 14px;
                padding-left: 20px;
                color: #407CF8;
            }
            &-text{
                font-size: 14px;
                color: #3D5063;
            }
        }
    }
</style>