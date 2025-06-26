<template>
    <TaSe :table-config="tableConfig">
      <template #content>
            <div>
                111
            </div>
      </template>
    </TaSe>
</template>
<script setup lang="ts">

const tableConfig = ref({
    pagination:true,
    thead:[
        { prop: 'a' , label: '发士大夫' },
        { prop: 'b' , label: '就看见空间' },
    ],
    searchForm:{
      
    },
    searchParams:{
        a:'',
        b:''
    },
    formItem:[
        { type:'Input',prop:'a',label:'就好',rules:[],width:'200px',disabled:true }
    ],
    formConfig:{
        resetButton:true
    }

})
</script>
<style lang="less" scoped>

</style>