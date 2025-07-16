<template>
    <div class="table-config">
        <TaSe :table-config="tableConfig" :table-data="tableData" @handleSelectionChange="handleSelectionChange">
            <template #content>     
                <FunctionalArea bg-color="#DFEAFC" :function-list="functionList"></FunctionalArea>
                <AddDialog ref="addDialogRef" title="项目详情总览编辑" title-icon="icon-qihang"></AddDialog>
            </template>
        </TaSe>
    </div>
</template>
<script setup lang="ts">
import AddDialog from './components/AddDialog.vue';
import { ElMessage } from 'element-plus';

const tableData = computed(()=>{
    return [
        { a:'xxx',b:'xxx' },
        { a:'xxx',b:'xxx' },
        { a:'xxx',b:'xxx' },
        { a:'xxx',b:'xxx' },
        { a:'xxx',b:'xxx' },
        { a:'xxx',b:'xxx' },
    ]
})
const addDialogRef = ref();
const dataList = ref<any[]>([])
const handleSelectionChange = (v:any[])=>{
    dataList.value = v
}
const functionList = computed(()=>{
    return [
        { icon:'icon-canyin', name:'新建', onClick:()=>{
            addDialogRef.value.openDialog()
        }},
        { icon:'icon-canjiren', name:'编辑',onClick:()=>{
            if(!dataList.value?.length) return ElMessage({ message:"请勾选数据进行编辑！", type:'warning' })
            if(dataList.value.length > 1) return ElMessage({ message:"只能勾选一条数据进行编辑！", type:'warning' })
            
        }},
        { icon:'icon-muai', name:'认领' },
        { icon:'icon-qihang', name:'删除' },
        { icon:'icon-qingdan', name:'导入' },
        { icon:'icon-faya', name:'导出' }
    ]
})
const tableConfig = ref({
    checkbox:true,
    tableHeight: 520,
    searchForm:true,
    searchParams:{

    },
    thead:[
        { prop:'a', label:'户名' },
        { prop:'b', label:'地址' },
        { prop:'b', label:'所属单位' },
        { prop:'b', label:'申办业务' },
        { prop:'b', label:'原有容量 (KVA)' },
        { prop:'b', label:'新/添装容量 (KVA)' },
        { prop:'b', label:'合计容量 (KVA)' },
        { prop:'b', label:'每回路容量(KVA)' },
        { prop:'b', label:'电压(KV)' },
        { prop:'b', label:'供电回路' },
        { prop:'b', label:'受理人员' },
        { prop:'b', label:'首次收件申请日期' },
        { prop:'b', label:'用户联系人' }
    ],
    pagination:true,
    labelWidth: 120,
    formItem:[
        { prop: 'a', label:"户名" , rules:[], type:'Input', placeholder:'请输入户名', disabled: false , width: '300px' },
        { prop: 'a', label:"地址" , rules:[], type:'Input', placeholder:'请输入地址', disabled: false , width: '300px' },
        { prop: 'a', label:"所属单位" , rules:[], type:'Select', placeholder:'请输入所属单位', disabled: false, width: '300px' , options:[
            { value:'xxx', label:'xxxx' },
            { value:'xx', label:'xxx' },
        ] },
        { prop: 'a', label:"申办业务" , rules:[], type:'Input', placeholder:'请输入申办业务', disabled: false , width: '300px' },
        { prop: 'a', label:"回路数" , rules:[], type:'Input', placeholder:'请输入回路数', disabled: false , width: '300px' },
        { prop: 'a', label:"受理人员" , rules:[], type:'Input', placeholder:'请输入受理人员', disabled: false , width: '300px' },
        { prop: 'a', label:"首收日期" , rules:[], type:'Daterange', disabled: false , width: '300px' },
        { prop: 'a', label:"客户经理" , rules:[], type:'Select', placeholder:'请输入', width: '300px', disabled: false , options:[
            { value:'xxx', label:'ssss' },
            { value:'xsa', label:'ss' }
        ] },
        { prop: 'a', label:"电压等级" , rules:[], type:'Select', placeholder:'请输入', width: '300px', disabled: false , options:[
            { value:'xxx', label:'ssss' },
            { value:'xsa', label:'ss' }
        ]},
        { prop: 'a', label:"用户联系人" , rules:[], type:'Input', placeholder:'请输入', disabled: false , width: '300px' },
        { prop: 'a', label:"认领状态" , rules:[], type:'Select', placeholder:'请输入', disabled: false , options:[
            { value:'0', label:'是' },
            { value:'1', label:'否' },
        ], width: '300px' }
    ],
    formConfig:{
        resetButton:true
    },
    formHandler:[

    ]
})

</script>
<style scoped lang="less">
 .table-config{
    padding: 20px;
 }

</style>