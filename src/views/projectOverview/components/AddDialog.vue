<template>
    <Dialog ref="dialogRef" :title="title">

    </Dialog>
</template>
<script setup lang="ts">
interface Params{
    title?:string
    titleIcon?:string
}

const dialogRef = ref()

const props = withDefaults(defineProps<Params>(),{

})

const openDialog = ()=>{
    dialogRef.value.open()
}

defineExpose({
    openDialog
})


</script>
<style lang="less" scoped>
    
</style>