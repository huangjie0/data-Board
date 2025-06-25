<template>
    <div class="fourth-board data-fdr">
        <div class="data-f1 data-m-r">
            <TitleCard title="当前在途项目分布及超期情况" iconClass="icon-faya" color="#192C7D" bg-color="#F0F6FF">
                <div class="data-fdr data-w-h">
                    <div class="data-f1 data-m-r fourth-board-left">
                        1111
                    </div>
                    <div class="data-f1 data-m-l fourth-board-right data-fdc">
                        <div class="fourth-board-right-buttons data-fdr">
                            <el-radio-group v-model="btnValue3" size="small" fill="#2772FF" @change="changeRadio3">
                                <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                            </el-radio-group>
                        </div>
                        <div class="data-f1">
                            <Pie2 :data="d3" type="0" :center="['40%','45%']"></Pie2>
                        </div>
                    </div>
                </div>
            </TitleCard>
        </div>
        <div class="data-f1 data-m-l data-fdr">
            <div class="data-f1 data-m-r">
                <TitleCard title="当前在途项目平均时长" iconClass="icon-faya" color="#192C7D" bg-color="#E8F1FD">
                    <template #rightValue>
                        <el-radio-group v-model="btnValue" size="small" fill="#2772FF" @change="changeRadio">
                            <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                        </el-radio-group>
                    </template>
                    <div class="data-w-h">
                        <Bar3 :data="d"/>
                    </div>
                </TitleCard>

            </div>
            <div class="data-f1 data-m-l">
                <TitleCard title="本年度已批复项目平均时长" iconClass="icon-faya" color="#192C7D" bg-color="#E8F1FD">
                    <template #rightValue>
                        <el-radio-group v-model="btnValue2" size="small" fill="#2772FF" @change="changeRadio2">
                            <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                        </el-radio-group>
                    </template>
                      <div class="data-w-h">
                        <Bar3 :data="d2"/>
                    </div>
                </TitleCard>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Type from '@/views/home/type/index.ts';

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
const btnValue = ref<any>(Type.designUnit)
const btnValue2 = ref<any>(Type.designUnit)
const btnValue3 = ref<any>(Type.designUnit)

const commonFn = (type:any,v:any)=>{ v.value = type }

const changeRadio = (type:any)=>{
    commonFn(type,btnValue)
}

const changeRadio2 = (type:any)=>{
   commonFn(type,btnValue2)
}

const changeRadio3 = (type:any)=>{
   commonFn(type,btnValue3)
}

const d = computed(()=>{
    return [
        { name:"久隆设计", value:0.2, value2:0.6, value3: 350 },
        { name:"东捷设计", value:0.3, value2:0.17, value3: 20 },
        { name:"上电设计", value:0.27, value2:0.25, value3: 15 },
        { name:"上海院", value:0.18, value2:0.26, value3: 35 },
        { name:"市南设计", value:0.14, value2:0.78, value3: 16 },
    ]
})

const d2 = computed(()=>{
    return [
        { name:"久隆设计", value:0.1, value2:0.6, value3: 150 },
        { name:"东捷设计", value:0.3, value2:0.17, value3: 10 },
        { name:"上电设计", value:0.7, value2:0.25, value3: 20 },
        { name:"上海院", value:0.22, value2:0.46, value3: 35 },
        { name:"市南设计", value:0.14, value2:0.78, value3: 26 },
    ]
})

const d3 = computed(()=>{
    return [
        { name:"久隆设计",value:37 },
        { name:"上海院设计",value:22 },
        { name:"东捷设计",value:19 },
        { name:"上电设计",value:17 },
        { name:"市南设计",value:27 },
    ]
})

</script>
<style lang="less" scoped>
    .fourth-board{
        height: 20rem;
        margin: 0 0 2.375rem 0;
        &-left,&-right{
            background-color: var(--common-home-bg-6);
        }
        &-right{
            padding: .3125rem;
            &-buttons{
                justify-content: end;
            }
        }
    }
</style>