<template>
    <div class="fifth-card data-fdr">
        <div class="data-f1 data-m-r">
            <TitleCard title="本年累计委托可研项目" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">
                <template #rightValue>
                    <el-radio-group v-model="btnValue" size="small" fill="#2471FF" @change="changeRadio">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                    </el-radio-group>
                </template>
            </TitleCard>
        </div>
        <div class="data-f1 data-m-l data-fdr">
            <div class="data-f1 data-m-r">
                <TitleCard title="当月可研评审通过率" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">

                </TitleCard>
            </div>
            <div class="data-f1 data-m-l">
                <TitleCard title="近三月在途项目结存率" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">
                  
                </TitleCard>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

const btnValue = ref<any>("0")

const options = [
    {
        label:'设计',
        value: '0'
    },
    {
        label:'电压',
        value: '1'
    },
    {
        label:'区域',
        value: '2'
    } 
]

const changeRadio = (type:any)=>{
    btnValue.value = type;
}

</script>
<style lang="less" scoped>
    .fifth-card{
        height: 22.5rem;
        margin-top: 30px;
    }
</style>