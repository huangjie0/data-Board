<template>
    <div class="data-home-center-right data-w-h">
        <TitleCard title="本年在途项目一览" icon-class="icon-shendusikao">
            <div class="data-home-center-right-container data-w-h data-fdc data-between">
                <div class="search-form">
                    <el-form :model="form" label-width="90px">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="供电公司">
                                    <el-select v-model="form.powerSupplyCompany" placeholder="请输入" popper-class="dropdown">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in powerSupplyCompanyOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="客户经理">
                                    <el-select v-model="form.accountManager" placeholder="请输入" popper-class="dropdown">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in accountManagerOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="设计单位">
                                    <el-select v-model="form.designUnit" placeholder="请输入"  popper-class="dropdown">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in designUnitOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            
                            </el-col>
                            <el-col :span="6">
                                <el-button plain color="#1ba49b">重置</el-button>
                                <el-button color="#1ba49b">查询</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <div class="table-container">
                    <Gantt/>
                </div>
                <div class="sorter data-fdr">
                    <el-pagination 
                        v-model:current-page="currentPage4" 
                        v-model:page-size="pageSize4" 
                        :page-sizes="[10, 20, 30]" 
                        :size="size" :disabled="disabled"
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
import {getGdgsEntry,getSjdwEntry,getKhjlEntry} from '@/api/home/index.ts';

const form = reactive({
    powerSupplyCompany:'',
    accountManager:'',
    designUnit:''
})

const powerSupplyCompanyOption:any[] = ref([])

const accountManagerOption:any[] = ref([])

const designUnitOption:any[] = ref([])

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)
const total = ref(400)

const handleSizeChange = (val: number) => {
  console.log(val)
}
// const handleCurrentChange = (val: number) => {
//   console.log(val)
// }

const commGetFunction = async (fun:Function,optionArray:any)=>{
    const res = await fun();
    if(res.code == 200){
        optionArray.value = res.data
    }
}   

onMounted(()=>{
    commGetFunction(getGdgsEntry,powerSupplyCompanyOption);
    commGetFunction(getKhjlEntry,accountManagerOption);
    commGetFunction(getSjdwEntry,designUnitOption);
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