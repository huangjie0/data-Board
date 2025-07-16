<template>
    <Dialog ref="dialogRef" :title="title" confirm-title="保存" :title-icon="titleIcon" dialog-width="900" @cancel="cancelRacharge" @confirm="confirm(ruleFormRef)" @cancelRacharge="cancelRacharge">
        <el-form :model="form" label-width="130" ref="ruleFormRef" :rules="rules">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="户名" prop="hm">
                        <el-input v-model="form.hm" clearable placeholder="请输入户名"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="所属单位" prop="ssdw">
                        <el-select v-model="form.ssdw" placeholder="请输入所属单位" clearable>
                            <el-option :label="item.label" :value="item.value" v-for="(item,index) in ssdwOptions" :key="index"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="申办业务" prop="sbyw">
                        <el-input v-model="form.sbyw" clearable placeholder="请输入申办业务"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="原有容量(KVA)" prop="yyrl">
                        <el-input v-model="form.yyrl" clearable placeholder="请输入原有容量"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="新/添装容量(KVA)" prop="xtzrl">
                        <el-input v-model="form.xtzrl" clearable placeholder="请输入新/添装容量"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="合计容量(KVA)" prop="hjrl">
                        <el-input v-model="form.hjrl" clearable placeholder="请输入合计容量"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="每回路容量(KVA)" prop="mhlrl">
                        <el-input v-model="form.mhlrl" clearable placeholder="请输入每回路容量"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="电压" prop="dy">
                        <el-select v-model="form.dy" placeholder="请输入电压" disabled>
                            <el-option :label="item.label" :value="item.value" v-for="(item,index) in dyOptions" :key="index"/>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="供电回路" prop="gdhl">
                        <el-input v-model="form.gdhl" clearable placeholder="请输入供电回路"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="受理人员" prop="slry">
                        <el-input v-model="form.slry" clearable placeholder="请输入受理人员"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="首次收件申请日期" prop="sqrq">
                        <el-config-provider :locale="zhCn">
                            <el-date-picker v-model="form.sqrq" type="date" placeholder="请输入" clearable value-format="YYYY-MM-DD"/>
                        </el-config-provider>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="用户联系人" prop="yhlxr">
                        <el-input v-model="form.yhlxr" clearable placeholder="请输入用户联系人"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="用户联系电话" prop="yhlxdh">
                        <el-input v-model="form.yhlxdh" clearable placeholder="用户联系电话"/>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="客户经理" prop="khjl">
                        <el-input v-model="form.khjl" clearable placeholder="请输入客户经理"/>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="地址" prop="dz">
                        <el-input v-model="form.dz" type="textarea" clearable placeholder="请输入地址"/>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </Dialog>
</template>
<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

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
const form = ref<any>({
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
const openDialog = (v:any)=>{
    if(v){
        for (const k1 in form.value) {
            for (const k2 in v[0]) {
                if(k1 === k2){
                    form.value[k1] = v[0][k1]
                } 
            }
        }
    }
    dialogRef.value.open()
}
const rules = ref<FormRules>({
    hm:[{ required: true, message: '请输入户名', trigger: 'blur' }],
    khjl:[{ required: true, message: '请输入客户经理', trigger: 'blur' }],
})
const cancelRacharge = ()=>{
    form.value.hm = "",
    form.value.ssdw="",
    form.value.sbyw="",
    form.value.yyrl="",
    form.value.xtzrl="",
    form.value.hjrl="",
    form.value.mhlrl="",
    form.value.dy="0",
    form.value.gdhl="",
    form.value.slry="",
    form.value.sqrq="",
    form.value.yhlxr="",
    form.value.yhlxdh="",
    form.value.khjl="",
    form.value.dz=""
}
const confirm = async (formEl: FormInstance | undefined)=>{
    if(!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
  })
}
defineExpose({
    openDialog
})
</script>
<style lang="less" scoped>
    
</style>