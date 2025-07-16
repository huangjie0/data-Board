<template>
    <Dialog :show-footer="false" ref="dialogRef" :title="title" :title-icon="titleIcon" dialog-width="300">
        <div class="data-center">
            <el-button @click="currentPage">导出当前页</el-button>
            <el-button type="primary" @click="allPages">导出全部</el-button>
        </div>
    </Dialog>
</template>
<script setup lang="ts">
interface Params{
    title?:string
    titleIcon?:string
}
const dialogRef = ref();

const openDialog = ()=>{
    dialogRef.value.open()
}
const emits = defineEmits(['currentPage','allPages'])
const currentPage = ()=>{ emits('currentPage')}
const allPages = ()=>{ emits('allPages') }

defineExpose({
    openDialog
})
defineProps<Params>()
</script>
<style lang="less" scoped>
    
</style>