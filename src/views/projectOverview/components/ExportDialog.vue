<template>
    <Dialog ref="dialogRef" :title="title" :title-icon="titleIcon" dialog-width="300">
        <div>1111</div>
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

defineExpose({
    openDialog
})
defineProps<Params>()
</script>
<style lang="less" scoped>
    
</style>