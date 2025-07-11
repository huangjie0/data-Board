<template>
    <Dialog ref="dialogRef" :title="title" :title-icon="titleIcon" dialog-width="900">
        <el-form :model="form" label-width="130">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="户名">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="所属单位">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="申办业务">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="原有容量(KVA)">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="新/添装容量(KVA)">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="合计容量(KVA)">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="每回路容量(KVA)">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="电压">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="供电回路">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="受理人员">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="首次收件申请日期">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="用户联系人">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="用户联系电话">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="客户经理">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="地址">
                        <el-input v-model="form.name" type="textarea"/>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </Dialog>
</template>
<script setup lang="ts">
interface Params{
    title?:string
    titleIcon?:string
}

const dialogRef = ref()
const form = ref({
    name:""
})
defineProps<Params>()
const openDialog = ()=>{
    dialogRef.value.open()
}
defineExpose({
    openDialog
})
</script>
<style lang="less" scoped>
    
</style>