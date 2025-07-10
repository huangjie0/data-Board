<template>
    <div :style="style" class="functional-area data-fdr">
        <div @click="item.onClick" class="functional-area-btn data-center" :key="index" v-for="(item,index) in functionList">
            {{ item.name }}
        </div>
    </div>
</template>
<script lang="ts" setup>
interface Params{
    bgColor:string
    functionList:any[]
}

const props = defineProps<Params>()

const style = computed(()=>{
    return {
        '--bg-color':props.bgColor
    }
})

</script>
<style lang="less" scoped>
.functional-area{
    width: 100%;
    height: 2.75rem;
    background-color: var(--bg-color);
    margin-bottom: 1.25rem;
    align-items: center;
    padding: .5rem;
    &-btn{
        width: 80px;
        height: 100%;
        border-radius: 20px;
        margin-right: 5px;
        color: #3D5063;
        background: #F8FAFF;
        cursor: pointer;
        &:last-child{
            margin: 0;
        }
    }
}

.functional-area-btn:hover{
    background: linear-gradient(223deg, #7484FF, #2772FF);
    color: white;
}

</style>