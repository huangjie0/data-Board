<template>
    <div class="data-fdr progress-box">
        <div class="data-fdr al-end">
            <div class="progress-box-score data-center" :style="style">
                {{ value }}
            </div>
        </div>
        <div class="data-fdc data-f1">
            <div>{{ text }}</div>
            <Progress :value="value" :bg-color="bgColor"/>
        </div>
        <div class="data-fdr al-end progress-box-score-item" :style="fStyle"> 
          <div class="progress-box-score-item-value">{{ value }}</div>
          <div class="progress-box-score-item-text">分</div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Progress from '@/components/Progress.vue';
import NumberUtils from '@/utils/number.ts';

interface Params{
    value?:number,
    text?:string,
    bgColor?:string
}

const props = withDefaults(defineProps<Params>(),{
    value:10,
    bgColor: '#2772FF'
})

const style = computed(()=>{
    return {
        "--bg-color": props.bgColor
    }
})

const fStyle = computed(()=>{
    return {
        "--f-c":  NumberUtils.hexToRgba( props.bgColor,0.9)
    }
})

</script>
<style lang="less" scoped>
    .progress-box{
        height: 2.3rem;
        margin-bottom: 20px;
        &-score{
            width: 3.125rem;
            height: 2rem;
            border-radius: var(--small-radius);
            color: white;
            background-color: var(--bg-color);
            font-size: 18px;
            font-weight: bold;
            margin-right: 20px;
            &-item{
                margin-left: 20px;
                color: var(--f-c);
                &-value{
                    font-size: 18px;
                }
                &-text{
                    font-size: 14px;
                }

            }
        }
    }
    .al-end{
        align-items: end;
    }
</style>