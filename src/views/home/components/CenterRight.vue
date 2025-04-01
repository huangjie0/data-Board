<template>
    <div class="data-home-center-right data-w-h">
        <TitleCard title="本年在途项目一览" icon-class="icon-shendusikao">
            <div class="data-home-center-right-container data-w-h data-fdc data-between">
                <div class="search-form">
                    <el-form :model="form" label-width="90px">
                        <el-row :gutter="20">
                            <el-col :span="6">
                                <el-form-item label="供电公司">
                                    <el-select v-model="form.powerSupplyCompany" placeholder="请输入">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in powerSupplyCompanyOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="客户经理">
                                    <el-select v-model="form.accountManager" placeholder="请输入">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in accountManagerOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="6">
                                <el-form-item label="设计单位">
                                    <el-select v-model="form.designUnit" placeholder="请输入">
                                        <el-option :label="item.label" :value="item.value" v-for="(item,index) in designUnitOption" :key="index"/>
                                    </el-select>
                                </el-form-item>
                            
                            </el-col>
                            <el-col :span="6">
                                <el-button>重置</el-button>
                                <el-button type="primary">查询</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
                <div class="table-container">
                  111111111111
                </div>
                <div class="sorter">222</div>
            </div>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';

const form = reactive({
    powerSupplyCompany:'',
    accountManager:'',
    designUnit:''
})

const powerSupplyCompanyOption = ref(
    [
        {
            label:'江苏供电公司',
            value: '1'
        },
        {
            label:'上海供电公司',
            value: '3'
        },
        {
            label:'安徽供电公司',
            value: '9'
        }
    ]
)

const accountManagerOption = ref(
    [
        {
            label:'黄凯',
            value:'32323'
        },
        {
            label:'吴建阳',
            value:'32'
        }
    ]
)

const designUnitOption = ref([
    {
        label:'安徽建工集团',
        value:'223232'
    },
    {
        label:'江苏建工集团',
        value:'22'
    }
])

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