<template>
    <div class="data-fdr type-buttons" v-for="(item,index) in option" :key="index" @click="changeType(item.type)">
        <div class="type-buttons-btn" :style="{ backgroundColor: item.color }"></div>
        <span>{{ item.name }}</span>
    </div>
</template>
<script setup lang="ts">
interface Params{
    option:any[]
}

defineProps<Params>()
const emits = defineEmits(['change'])
const changeType = (type:string)=>{
    emits('change',type)
}

</script>
<style lang="less" scoped>
.type-buttons{
    align-items: center;
    margin-right: 10px;
    &-btn{
        width: .5625rem;
        height: .5625rem;
        margin-right: 5px;
    }
}
</style>