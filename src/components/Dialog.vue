<template>
    <el-dialog v-model="dialogVisible" :title="title" width="500" align-center>
        <template #title>
            <span class="iconfont" :class="titleIcon"></span>
        </template>
        <template #footer>
            <!-- <div class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">
                Confirm
                </el-button>
            </div> -->
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
interface Params{
    title?:string
    titleIcon?:string
}

const props = withDefaults(defineProps<Params>(),{
    
})

const dialogVisible = ref(false)

const open = ()=>{
    dialogVisible.value = true
}

defineExpose({
    open
})

</script>
<style lang="less" scoped>
    
</style>