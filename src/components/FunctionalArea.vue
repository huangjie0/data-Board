<template>
    <div :style="style" class="functional-area data-fdr">
        11111
    </div>
</template>
<script lang="ts" setup>
interface Params{
    bgColor:string
    functionList:any[]
}

const props = defineProps<Params>()

const style = computed(()=>{
    return {
        '--bg-color':props.bgColor
    }
})

</script>
<style lang="less" scoped>
.functional-area{
    width: 100%;
    height: 2.75rem;
    background-color: var(--bg-color);
    margin-bottom: 1.25rem;
    align-items: center;
    padding: .625rem;
}
</style>