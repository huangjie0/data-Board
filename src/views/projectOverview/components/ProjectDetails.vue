<template>
    <Dialog ref="dialogRef" :title="title" :title-icon="titleIcon" :show-footer="false">
        <TaSe :table-config="tableConfig" :table-data="tableData" ></TaSe>
    </Dialog>
</template>
<script lang="ts" setup>
interface Params{
    title?:string
    titleIcon?:string
}

defineProps<Params>()
const dialogRef = ref()
const openDialog = ()=>{
    dialogRef.value.open()
}

defineExpose({
    openDialog
})

const tableConfig = ref({
    checkbox:false,
    tableHeight: 400,
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
        { prop:'yhlxr', label:'用户联系人' }
    ],
    pagination:true
})

let tableData = ref([
    { id:'1', hm:'xxx',dz:'xxx',ssdw:'xxx',sbyw:'xx',yyrl:'xx',xtzrl:'xx',hjrl:'xx',mhlrl:'xx',dy:'xxx',gdhl:'xx',slry:'xx',sqrq:'2012-10-12',yhlxr:'xxx',xmxq:'xxx' },
    { id:'2', hm:'xxx',dz:'xxx',ssdw:'xxx',sbyw:'xx',yyrl:'xx',xtzrl:'xx',hjrl:'xx',mhlrl:'xx',dy:'xxx',gdhl:'xx',slry:'xx',sqrq:'2015-08-15',yhlxr:'xxx',xmxq:'qqq' },
    { id:'3', hm:'xxx',dz:'xxx',ssdw:'xxx',sbyw:'xx',yyrl:'xx',xtzrl:'xx',hjrl:'xx',mhlrl:'xx',dy:'xxx',gdhl:'xx',slry:'xx',sqrq:'2015-08-16',yhlxr:'xxx',xmxq:'ttt' },
])


</script>
<style lang="less">
    
</style>