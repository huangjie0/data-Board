<template>
    <div class="data-fdr type-buttons" v-for="(item,index) in option" :key="index" @click="changeType(item.type)">
        <div class="type-buttons-btn" :style="{ backgroundColor: item.color }"></div>
        <span :class="{ activated: isActivated.type === item.type }">{{ item.name }}</span>
    </div>
</template>
<script setup lang="ts">
interface Params{
    option:any[]
}

const props =  defineProps<Params>()
const model = defineModel()
const isActivated = computed(()=>{ 
    return props.option.find((item:any)=> item.type == model.value)
}) 
const emits = defineEmits(['change'])
const changeType = (type:string)=>{
    emits('change',type)
}
</script>
<style lang="less" scoped>
.type-buttons{
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    &-btn{
        width: .5625rem;
        height: .5625rem;
        margin-right: 5px;
    }
}
.activated{
    color: var(--common-home-bg-3);
}
</style>