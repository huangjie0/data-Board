<template>
    <Dialog ref="dialogRef" :title="title" :title-icon="titleIcon" dialog-width="900" @confirm="confirm" @cancelRacharge="cancelRacharge">
        <el-form :model="form" label-width="130" ref="ruleFormRef" :rules="rules">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="户名" prop="hm">
                        <el-input v-model="form.hm" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="所属单位">
                        <el-select v-model="form.ssdw" placeholder="请输入所属单位">
                            <el-option :label="item.label" :value="item.value" v-for="(item,index) in ssdwOptions" :key="index"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="申办业务">
                        <el-input v-model="form.sbyw" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="原有容量(KVA)">
                        <el-input v-model="form.yyrl" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="新/添装容量(KVA)">
                        <el-input v-model="form.xtzrl" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="合计容量(KVA)">
                        <el-input v-model="form.hjrl" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="每回路容量(KVA)">
                        <el-input v-model="form.mhlrl" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="电压">
                        <el-select v-model="form.dy" placeholder="请输入电压" disabled>
                            <el-option :label="item.label" :value="item.value" v-for="(item,index) in dyOptions" :key="index"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="供电回路">
                        <el-input v-model="form.gdhl" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="受理人员">
                        <el-input v-model="form.slry" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="首次收件申请日期">
                        <el-date-picker v-model="form.sqrq" type="date" placeholder="请输入"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="用户联系人">
                        <el-input v-model="form.yhlxr" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="用户联系电话">
                        <el-input v-model="form.yhlxdh" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="客户经理" prop="khjl">
                        <el-input v-model="form.khjl" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="地址">
                        <el-input v-model="form.dz" type="textarea"/>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </Dialog>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';

interface Params{
    title?:string
    titleIcon?:string
}
const ssdwOptions = ref([
    { label:"xxx",value:'0' },
    { label:"xx",value:'2' },
])
const dyOptions = ref([
    { label:'220kV',value:'0' },
    { label:'110kV',value:'1' },
    { label:'80kV',value:'2' }
])
const ruleFormRef = ref<FormInstance>()
const dialogRef = ref()
const form = ref({
    hm:"",
    ssdw:"",
    sbyw:"",
    yyrl:"",
    xtzrl:"",
    hjrl:"",
    mhlrl:"",
    dy:"0",
    gdhl:"",
    slry:"",
    sqrq:"",
    yhlxr:"",
    yhlxdh:"",
    khjl:"",
    dz:""
})

defineProps<Params>()
const openDialog = ()=>{
    dialogRef.value.open()
}
const rules = ref<FormRules>({
    hm:[{ required: true, message: '请输入户名', trigger: 'blur' }],
    khjl:[{ required: true, message: '请输入客户经理', trigger: 'blur' }],
})
const emits = defineEmits(['confirm'])
const cancelRacharge = ()=>{
    ruleFormRef.value?.resetFields()
}
const confirm = ()=>{
    emits('confirm')
}
defineExpose({
    openDialog
})
</script>
<style lang="less" scoped>
    
</style>