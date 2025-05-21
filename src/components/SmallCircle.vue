<template>
    <div class="small-circle data-center" :style="style">
        <i class="iconfont" :class="icon"></i>
    </div>
</template>
<script lang="ts" setup>

interface Params{
    size?:number,
    icon:string
}


const props = withDefaults(defineProps<Params>(),{
    size:31
})

const style = computed(()=>{
    return {
        '--smallCircle':props.size + 'px'
    }
})

</script>
<style lang="less" scoped>
    .small-circle{
        border-radius: 50%;
        width: var(--smallCircle);
        height: var(--smallCircle);
        background: linear-gradient(223deg, #DBE6FC, #F8FAFF);;
        color: var(--vt-c-white);
    }
</style>