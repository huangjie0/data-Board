<template>
    <div class="fifth-board data-fdr">
        <div class="data-f1 data-m-r">
            <TitleCard title="本年累计委托可研项目" iconClass="icon-faya" @change="changeType" color="#192C7D" bg-color="#E8F1FD" v-model="v" :options="tO">
                <template #rightValue>
                    <el-radio-group v-model="btnValue" size="small" fill="#2772FF" @change="changeRadio">
                        <el-radio-button :label="item.label" :value="item.value" v-for="(item,index) in options" :key="index"/>
                    </el-radio-group>
                </template>
                <div class="data-w-h data-fdr">
                    <div class="data-f1 data-w-h">
                        <Pie2 :data="d"/>
                    </div>
                    <div class="data-f1 data-w-h">
                        <Bar2 :data="d" bar-color="#FEB64D" y-name="超期数量" :show-label-text="false"/>
                    </div>
                </div>
            </TitleCard>
        </div>
        <div class="data-f1 data-m-l data-fdr">
            <div class="data-f1 data-m-r">
                <TitleCard iconClass="icon-faya" color="#192C7D" v-model="v2" bg-color="#E8F1FD" :options="[{ title:'当月可研评审通过率' , type : '0' }]">
                    <div class="data-w-h fifth-board-right-left">
                        <ProgressScrollBar v-for="(item,index) in d" :key="index" :text="item.name" :number="item.value"/>
                    </div>
                </TitleCard>
            </div>
            <div class="data-f1 data-m-l">
                <TitleCard iconClass="icon-faya" color="#192C7D" v-model="v3" bg-color="#E8F1FD" :options="[{ title:'近三月在途项目结存率' , type:'0' }]">
                    <Bar4 :data="d2"/> 
                </TitleCard>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>

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
const btnValue = ref<any>('0')
const changeRadio = (type:any)=>{
    btnValue.value = type 
}
const d = computed(()=>{
    return [
        { name:"上海院",value: 37 },
        { name:"久隆设计",value: 21 },
        { name:"市南设计",value: 19 },
        { name:"上电设计",value: 25 },
        { name:"东捷设计",value: 16 },
    ]
})
const d2 = computed(()=>{
    return [
        { name:"上海院", value1: 0.37 , value2: 81},
        { name:"久隆设计",value1: 0.21 , value2: 23},
        { name:"市南设计",value1: 0.19 , value: 78},
        { name:"上电设计",value1: 0.25 , value2:28},
        { name:"东捷设计",value1: 0.16 , value2: 67},
    ]
})
const v = ref('0')
const v2 = ref('0')
const v3 = ref('0')
const tO = ref([
    { title:'本年累计委托可研项目', type:'0' },
    { title:'本年已完成可研项目数量', type:'1' }
])
const changeType = (t:string)=>{
    v.value = t;
}
</script>
<style lang="less" scoped>
    .fifth-board{
        height: 20rem;
        &-right-left{
            padding: 1.875rem; 
        }
    }
</style>