<template>
    <div class="data-fdr progress-box">
        <div class="data-fdr al-end">
            <div class="progress-box-score data-center">
                {{ value }}
            </div>
        </div>
        <div class="data-fdc data-f1">
            <div>{{ text }}</div>
            <Progress :value="value" :bg-color="bgColor"/>
        </div>
        <div class="data-fdr al-end progress-box-score-item" :style="fStyle"> 
            <span>{{ value }}</span>
            <span class="progress-box-score-item-text">分</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import Progress from '@/components/Progress.vue';

interface Params{
    value?:number,
    text?:string,
    bgColor?:string
}

const props = withDefaults(defineProps<Params>(),{
    value: 10,
    bgColor: '#2772FF'
}) 

const fStyle = computed(()=>{
    return {
        "--f-c": props.bgColor
    }
})

</script>
<style lang="less" scoped>
    .progress-box{
        height: 2.3rem;
        margin-bottom: 15px;
        &-score{
            width: 3.125rem;
            height: 2rem;
            border-radius: var(--small-radius);
            color: white;
            background: linear-gradient(0deg, #526BFB 0%, #3F7DF8 100%);
            font-size: 18px;
            font-weight: bold;
            margin-right: 20px;
            &-item{
                margin-left: 20px;
                color: var(--f-c);
                &-text{
                    font-size: 13px;
                }
            }
        }
    }
    .al-end{
        align-items: end;
    }
</style>