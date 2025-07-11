<template>
    <el-dialog v-model="dialogVisible" :width="dialogWidth" align-center>
        <template #title>
            <div :style="style" class="icon-title">
                <span class="iconfont" :class="titleIcon"></span>
                <span class="icon-title-text">{{ title }}</span>
            </div>
        </template>
        <slot></slot>
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
    color?:string
    dialogWidth?:string
}

const props = withDefaults(defineProps<Params>(),{
    color:'#192C7D',
    dialogWidth:'800'
})
const style = computed(()=>{
    return {
        '--color':props.color
    }
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
.icon-title{
    color: var(--color);
    &-text{
        font-weight: bold;
        margin-left: 10px;
    }
}
    
</style>