<template>
    <div class="small-circle-icon data-center" ref="smallCircleIconRef" :style="cicleStyle">
        <i class="iconfont" :class="iconName" :style="style"></i>
    </div>
</template>
<script setup lang="ts">
interface Params{
    circleSize:number
    iconName:string
}

const props = withDefaults(defineProps<Params>(),{
    circleSize: 31
})

const fontSize = ref(14)
const smallCircleIconRef = ref()

onMounted(()=>{
    fontSize.value = smallCircleIconRef.value.offsetWidth * 0.6
})

const style = computed(()=>{
    return {
        fontSize:`${fontSize.value}px`
    }
})

const cicleStyle = computed(()=>{
    return {
        '--small-circle': `${props.circleSize}px`
    }
})

</script>
<style lang="less" scoped>
    .small-circle-icon{
        width: var(--small-circle);
        height: var(--small-circle);
        border-radius: 50%;
        background: linear-gradient(223deg, #DBE6FC, #F8FAFF);
        color: white;
        cursor: pointer;
    }
</style>