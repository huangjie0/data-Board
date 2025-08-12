<template>
    <div class="table-config">
        <TaSe :table-config="tableConfig" :table-data="tableData" @handleSelectionChange="handleSelectionChange" @clickColumn="clickColumn">
            <template #content>     
                <FunctionalArea bg-color="#DFEAFC" :function-list="functionList"/>
                <EditAddDialog ref="editAddDialogRef" :title="dataList.length ? '项目详情总览编辑' : '项目详情总览新增'" title-icon="icon-qihang"/>
                <ExportDialog ref="exportDialogRef" title="项目详情总览导出" title-icon="icon-qihang" @current-page="currentPage"/>
                <ProjectDetails  ref="projectDetailsRef" title="项目详情" title-icon="icon-qihang"></ProjectDetails>
            </template>
        </TaSe>
    </div>
</template>
<script setup lang="tsx">
import EditAddDialog from './components/EditAddDialog.vue';
import ExportDialog from './components/ExportDialog.vue';
import ProjectDetails from './components/ProjectDetails.vue'
import { ElMessage } from 'element-plus';

let tableData = ref([
    { id:'1', hm:'xxx',dz:'xxx',ssdw:'xxx',sbyw:'xx',yyrl:'xx',xtzrl:'xx',hjrl:'xx',mhlrl:'xx',dy:'xxx',gdhl:'xx',slry:'xx',sqrq:'2012-10-12',yhlxr:'xxx',xmxq:'xxx' },
    { id:'2', hm:'xxx',dz:'xxx',ssdw:'xxx',sbyw:'xx',yyrl:'xx',xtzrl:'xx',hjrl:'xx',mhlrl:'xx',dy:'xxx',gdhl:'xx',slry:'xx',sqrq:'2015-08-15',yhlxr:'xxx',xmxq:'qqq' },
    { id:'3', hm:'xxx',dz:'xxx',ssdw:'xxx',sbyw:'xx',yyrl:'xx',xtzrl:'xx',hjrl:'xx',mhlrl:'xx',dy:'xxx',gdhl:'xx',slry:'xx',sqrq:'2015-08-16',yhlxr:'xxx',xmxq:'ttt' },
])

const editAddDialogRef = ref();
const exportDialogRef = ref();
const projectDetailsRef = ref();
const dataList = ref<any[]>([])
const handleSelectionChange = (v:any[])=>{
    dataList.value = v
}
const functionList = computed(()=>{
    return [
        { icon:'icon-canyin', name:'新建', onClick:()=>{
            editAddDialogRef.value.openDialog()
        }},
        { icon:'icon-canjiren', name:'编辑',onClick:()=>{
            if(!dataList.value?.length) return ElMessage({ message:"请勾选数据进行编辑！", type:'warning' })
            if(dataList.value.length > 1) return ElMessage({ message:"只能勾选一条数据进行编辑！", type:'warning' })
             editAddDialogRef.value.openDialog(dataList.value)
        }},
        { icon:'icon-muai', name:'认领',onClick:()=>{
            if(!dataList.value?.length) return ElMessage({ message:"请勾选数据进行认领！", type:'warning' })
        }},
        { icon:'icon-qihang', name:'删除',onClick:()=>{
            if(!dataList.value?.length) return ElMessage({ message:"请勾选数据进行删除！", type:'warning' })
            const ids = dataList.value.map(item=>item.id)
            tableData.value = tableData.value.filter(item=>!ids.includes(item.id))
        }},
        { icon:'icon-qingdan', name:'导入' },
        { icon:'icon-faya', name:'导出',onClick:()=>{
            exportDialogRef.value.openDialog()
        }}
    ]
})
const tableConfig = ref({
    checkbox:true,
    tableHeight: 520,
    searchForm:true,
    searchParams:{

    },
    thead:[
        { prop:'hm', label:'户名' },
        { prop:'dz', label:'地址' },
        { prop:'ssdw', label:'所属单位' },
        { prop:'sbyw', label:'申办业务' },
        { prop:'yyrl', label:'原有容量 (KVA)' },
        { prop:'xtzrl', label:'新/添装容量 (KVA)' },
        { prop:'hjrl', label:'合计容量 (KVA)' },
        { prop:'mhlrl', label:'每回路容量(KVA)' },
        { prop:'dy', label:'电压(KV)' },
        { prop:'gdhl', label:'供电回路' },
        { prop:'slry', label:'受理人员' },
        { prop:'sqrq', label:'首次收件申请日期' },
        { prop:'yhlxr', label:'用户联系人' },
        { prop:'xmxq', label:'项目详情', formatter:(_row:any,_column:any,cellValue:any,_index:any)=>{ return <span class='blue-font-color'>{cellValue}</span> }},
    ],
    pagination:true,
    labelWidth: 120,
    formItem:[
        { prop: 'hm', label:"户名" , rules:[{ required:true , message:'请输入户名', trigger: 'blur' }], type:'Input', placeholder:'请输入户名', disabled: false , width: '300px' },
        { prop: 'dz', label:"地址" , rules:[], type:'Input', placeholder:'请输入地址', disabled: false , width: '300px' },
        { prop: 'ssdw', label:"所属单位" , rules:[], type:'Select', placeholder:'请输入所属单位', disabled: false, width: '300px' , options:[
            { value:'xxx', label:'xxxx' },
            { value:'xx', label:'xxx' },
        ] },
        { prop: 'sbyw', label:"申办业务" , rules:[], type:'Input', placeholder:'请输入申办业务', disabled: false , width: '300px' },
        { prop: 'hls', label:"回路数" , rules:[], type:'Input', placeholder:'请输入回路数', disabled: false , width: '300px' },
        { prop: 'slry', label:"受理人员" , rules:[], type:'Input', placeholder:'请输入受理人员', disabled: false , width: '300px' },
        { prop: 'ssrq', label:"首收日期" , rules:[], type:'Daterange', disabled: false , width: '300px' },
        { prop: 'khjl', label:"客户经理" , rules:[], type:'Select', placeholder:'请输入', width: '300px', disabled: false , options:[
            { value:'xxx', label:'ssss' },
            { value:'xsa', label:'ss' }
        ] },
        { prop: 'dydj', label:"电压等级" , rules:[], type:'Select', placeholder:'请输入', width: '300px', disabled: false , options:[
            { value:'xxx', label:'ssss' },
            { value:'xsa', label:'ss' }
        ]},
        { prop: 'yhlxr', label:"用户联系人" , rules:[], type:'Input', placeholder:'请输入', disabled: false , width: '300px' },
        { prop: 'rlzt', label:"认领状态" , rules:[], type:'Select', placeholder:'请输入', disabled: false , options:[
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
const clickColumn = (c:any)=>{
    if(c.property === 'xmxq'){
        projectDetailsRef.value.openDialog()
    }
}

const currentPage = ()=>{
    alert('111')
}
</script>
<style scoped lang="less">
.table-config{
    padding: 20px;
}
</style>
<style lang="less">
.blue-font-color {
  color: #409eff;
  border-bottom: 1px solid #409eff;
  cursor: pointer;
}
</style>