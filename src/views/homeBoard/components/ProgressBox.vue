<template>
    <div class="data-fdr progress-box">
        <div class="data-fdr al-end">
            <div class="progress-box-score data-center">
                {{ value }}
            </div>
        </div>
        <div class="data-fdc data-f1">
            <div>{{ text }}</div>
            <div class="data-center">
                <Progress :value="value" :bg-color="bgColor"/>
                <div class="data-center progress-box-score-text" :style="fStyle">{{ value }}分</div>
            </div>
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
        height: 2.7rem;
        margin-bottom: 10px;
        &-score{
            width: 3.125rem;
            height: 2rem;
            border-radius: var(--small-radius);
            color: white;
            background: linear-gradient(0deg, #526BFB 0%, #3F7DF8 100%);
            font-size: 18px;
            font-weight: bold;
            margin-right: 20px;
            &-text{
                width: 6%;
                color: var(--f-c);
            }
        }
    }
    .al-end{
        align-items: end;
    }
</style>