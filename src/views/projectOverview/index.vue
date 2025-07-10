<template>
    <div class="table-config">
        <TaSe :table-config="tableConfig">
            <template #content>     
                <div class="table-config-functional-area">
                    1111
                </div>
            </template>
        </TaSe>
    </div>
</template>
<script setup lang="ts">
const tableConfig = ref({
    tableHeight: 520,
    searchForm:true,
    searchParams:{

    },
    thead:[
        { prop:'a', label:'xxx' },
        { prop:'b', label:'xxx2' },
    ],
    pagination:true,
    labelWidth: 90,
    formItem:[
        { prop: 'a', label:"户名" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"地址" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"所属单位" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"申办业务" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"回路数" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"受理人员" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"首收日期" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"客户经理" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"电压等级" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"用户联系人" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        { prop: 'a', label:"认领状态" , rules:[], type:'Input', placeholder:'请输入', disabled: false },
        // { prop: 'a', label:"xxx" , rules:[], type:'Input', placeholder:'请输入', width:120, disabled: false },
        { prop: 'b', label:"xxx2" , rules:[], type:'Select', placeholder:'请输入', disabled: false , options: [{ 
             value:'0', label :'是'
        },{   value:'1', label:'否'}]},

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
    &-functional-area{
        width: 100%;
        height: 44px;
        background-color: pink;
        margin-bottom: 20px;
    }
 }

</style>