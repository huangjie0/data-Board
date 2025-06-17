<template>
    <div class="small-circle-card data-center" @click="changePath">
        <i class="iconfont small-circle-card-icon" :class="iconClass" :style="style"></i>
    </div>
</template>
<script lang="ts" setup>
interface Params{
    iconClass:string
    iconSize?:number
}

const props = withDefaults(defineProps<Params>(),{
    iconSize:15
})

const style = computed(()=>{
    return {
        '--iconSize':props.iconSize + 'px'
    }
})

const emits = defineEmits(['changMenus'])

const changePath = ()=>{
    emits('changMenus')
}
</script>
<style lang="less" scoped>
.small-circle-card{
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: linear-gradient(223deg, #DBE6FC, #F8FAFF);
    :hover{
        cursor: pointer;
    }
    &-icon{
        color: white;
        font-size: var(--iconSize);
    }
}

</style>