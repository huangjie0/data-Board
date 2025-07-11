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
            <div class="data-center">
                <slot name="buttons"></slot>
                <el-button type="primary" @click="confirm">{{ confirmTitle }}</el-button>
                <el-button @click="cancel">{{ cancelTitle }}</el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
interface Params{
    title?:string
    titleIcon?:string
    color?:string
    dialogWidth?:string
    confirmTitle?:string
    cancelTitle?:string
}

const emits = defineEmits(['confirm'])

const props = withDefaults(defineProps<Params>(),{
    color:'#192C7D',
    dialogWidth:'800',
    confirmTitle:'确定',
    cancelTitle:'取消'
})
const style = computed(()=>{
    return {
        '--color':props.color
    }
})
const cancel = ()=>{
    dialogVisible.value = false
}
const confirm = ()=>{
    emits('confirm')
}
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