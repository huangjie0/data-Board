<template>
    <div class="fourth-card data-fdr">
        <div class="data-f1 data-m-r data-fdr">
            <div class="data-f1 data-m-r">
                <TitleCard title="当前在途项目分布及超期情况" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">

                </TitleCard>
            </div>
            <div class="data-f1 data-m-l fourth-card-left-right">

            </div>
        </div>
        <div class="data-f1 data-m-l data-fdr">
            <div class="data-f1 data-m-r">
                <TitleCard title="当前在途项目平均时长" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">
                    <template #rightValue>
                        <el-radio-group v-model="btnValue" size="small" fill="#2471FF" @change="changeRadio1">
                            <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                        </el-radio-group>
                    </template>
                </TitleCard>
            </div>
            <div class="data-f1 data-m-l">
                <TitleCard title="本年度已批复项目平均时长" icon-class="icon-faya" color="#1F3696" bg-color="#E3EEFD">
                    <template #rightValue>
                        <el-radio-group v-model="btnValue2" size="small" fill="#2471FF" @change="changeRadio2">
                            <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                        </el-radio-group>
                    </template>
                </TitleCard>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Type from '@/views/home/type/index.ts'

const btnValue = ref<any>(Type.designUnit);
const btnValue2 = ref<any>(Type.designUnit);
const options = [
    {
        label:'设计单位',
        value: Type.designUnit 
    },
       {
        label:'客户经理',
        value: Type.customerManager
    } 
]

const commonFn = (type:any,v:any)=>{
    v.value = type;
}

const changeRadio1 = (type:any)=>{ commonFn(type,btnValue) }
const changeRadio2 = (type:any)=>{ commonFn(type,btnValue2) }

</script>
<style lang="less" scoped>
.fourth-card{
    height: 22.5rem;
    margin-top: 30px;
    &-left-right{
        margin-top: 39px;
        background-color:  #E3EEFD;;
    }
}
</style>