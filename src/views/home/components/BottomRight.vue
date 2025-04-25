<template>
    <div class="data-home-right data-w-h">
        <TitleCard title="当月可研评审通过率" icon-class="icon-penhu">
            <div class="progress-item" v-if="data.length" v-for="item in data" :key="item.label">
                <span class="progress-item-name">{{ item.label }}</span>
                <Progress :percentage="item.value" color="#0D867F"></Progress>
                <span class="progress-item-percent">{{ item.value * 100 + '%' }}</span>
            </div>
        </TitleCard>
    </div>
</template>
<script setup lang="ts">
import TitleCard from '@/components/TitleCard.vue';
import Progress from '@/components/Progress.vue';
import { getKytgl } from '@/api/home/index.ts'

const data = ref([])

onMounted(async ()=>{
    const res = await getKytgl();
    if(res.code === 200){
        data.value = res.data
    }
})
</script>
<style lang="less" scoped>
.data-home-right{
    background-color: var(--vt-c-white);
    border-radius: var(--small-radius);
    .progress-item{
        padding: 10px 10px 0 10px;
        display: flex;
        align-items: center;
        &-name,&-percent{
            white-space: nowrap;
            font-size: 14px;
        }
        &-name{
            margin-right: 10px;
        }
        &-percent{
            margin-left: 10px;
        }
    }
}
    
</style>