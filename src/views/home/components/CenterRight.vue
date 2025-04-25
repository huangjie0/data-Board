<template>
    <div class="data-home-center-right data-w-h">
        <TitleCard title="本年在途项目一览" icon-class="icon-dianpu1">
            <div class="data-home-center-right-container data-w-h data-fdc data-between">
                <div class="search-form">
                    <el-form :model="form" label-width="90px">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="供电公司">
                                    <el-select v-model="form.gdgs" placeholder="请输入" popper-class="dropdown">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in powerSupplyCompanyOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="客户经理">
                                    <el-select v-model="form.khjl" placeholder="请输入" popper-class="dropdown">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in accountManagerOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="设计单位">
                                    <el-select v-model="form.sjdw" placeholder="请输入"  popper-class="dropdown">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in designUnitOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            
                            </el-col>
                            <el-col :span="6">
                                <el-button plain color="#1ba49b" @click="resetForm">重置</el-button>
                                <el-button color="#1ba49b" @click="getGanttData">查询</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <div class="table-container" v-loading="ganttLoading">
                    <Gantt :gantt-data="ganttData" v-if="ganttData.data?.length"/>
                </div>
                <div class="sorter data-fdr">
                    <el-pagination 
                        v-model:current-page="pageIndex" 
                        v-model:page-size="pageSize" 
                        :page-sizes="[5, 10, 15]" 
                        :size="size"
                        :background="background"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                    />
                </div>
            </div>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import type { ComponentSize } from 'element-plus';
import TitleCard from '@/components/TitleCard.vue';
import Gantt from '@/components/Gantt.vue';
import {getGdgsEntry,getSjdwEntry,getKhjlEntry,getKyxmData} from '@/api/home/index.ts';

const form = reactive({ khjl:'', sjdw:'', gdgs:''})

const powerSupplyCompanyOption:any[] = ref([])

const accountManagerOption:any[] = ref([])

const designUnitOption:any[] = ref([])

const pageIndex = ref(1)
const pageSize = ref(5)
const size = ref<ComponentSize>('default')
const background = ref(false)
const total = ref(0)
const ganttData = ref({}) 
const ganttLoading = ref(false)

const handleSizeChange = (val: number) => {
    pageSize.value = val
}
const handleCurrentChange = (val: number) => {
    pageIndex.value = val
}

const commGetFunction = async (fun:Function,optionArray:any)=>{
    const res = await fun();
    if(res.code == 200){
        optionArray.value = res.data
    }
}   

const resetForm = ()=>{
    for (const key in form) {
        form[key] = ''
    }
}

const getGanttData = async ()=>{
    let params:any = {
        params:form,
        pageSize: pageSize.value,
        pageIndex: pageIndex.value
    }
    ganttLoading.value = true;
    ganttData.value = {}
    const res = await getKyxmData(params);
    if(res.code === 200){
        total.value = res.data.total;
        let o:any = {}
        let a:any[] = [];
        let l:any = res.data.list.map((item:any) => {
            return { nickName:item.hm, theUnit:item.gdgs, accountManager:item.khjl, designUnit:item.sjdw, render:"split", text:"", id:item.id }
        })
        res.data.list.forEach((item:any) => {
            a.push({ id: `${item.id}-1`, text:"征询答复", start_date:item.zxdfStDate, end_date:item.zxdfEndDate, parent:item.id, color:"#0596c6"})
            a.push({ id: `${item.id}-2`, text:"供电方案答复", start_date:item.gddfStDate, end_date:item.gddfEndDate, parent:item.id, color:"#18bdc2"})
            a.push({ id: `${item.id}-3`, text:"可研送审", start_date:item.kyssStDate, end_date:item.kyssEndDate, parent:item.id, color:"#9285eb"})
            a.push({ id: `${item.id}-4`, text:"可研评审", start_date:item.kypsStDate, end_date:item.kypsEndDate, parent:item.id, color:"#57bc6f"})
        })
        o.data = [...l,...a];
        ganttData.value = o;
        ganttLoading.value = false;
    } 
}

onMounted(()=>{
    commGetFunction(getGdgsEntry,powerSupplyCompanyOption);
    commGetFunction(getKhjlEntry,accountManagerOption);
    commGetFunction(getSjdwEntry,designUnitOption);
    getGanttData();
})

</script>
<style lang="less" scoped>
.data-home-center-right{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    &-container{
        position: relative;
        .search-form{
            width: 100%;
            height: 50px;
            padding-top: 10px;
            &-row{
                height: 100%;
            }
        }
        .sorter{
            height: 50px;
            width: 100%;
            padding: 5px 10px;
            align-items: center;
            justify-content: end;
        }
        .table-container{
            width: 100%;
            top: 50px;
            bottom: 50px;
            padding: 5px 10px;
            position: absolute;
            overflow-y: auto;
        }
    }
}   
</style>