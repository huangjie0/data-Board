<template>
    <div class="background-card data-w-h data-around" :style="style">
        <div class="background-card-icon data-center">
            <i class="iconfont background-card-icon-i" :class="iconClass"></i>
        </div>
        <div class="background-card-num">
            <span class="background-card-num-value">{{ number }}</span>
            <span class="background-card-num-unit">{{ unit }}</span>
        </div>
        <div class="background-card-text">
            {{ text }}
        </div>
    </div>
</template>
<script setup lang="ts">

interface Params{
    number:number,
    unit?:string,
    text:string,
    color:string,
    iconClass:string
}

const props = withDefaults(defineProps<Params>(),{
    unit:'个'
})

const style= computed(()=>{
    return {
        '--background-card-text-color':props.color,
        '--background-card-bg-color':props.color + '12'
    }
})

</script>
<style lang="less" scoped>
.background-card{
    border-radius: var(--small-radius);
    background-color: var(--background-card-bg-color);
    &-icon{
        width: 50px;
        height: 35px;
        background-color: var(--background-card-text-color);
        border-radius: var(--small-radius);
        &-i{
            color: var(--vt-c-white);
            font-size: 30px;
        }
    }
    &-num{
        display: flex;
        align-items: baseline;
        &-value{
            font-size: 40px;
            font-weight: 550;
            color: var(--background-card-text-color);
        }
        &-unit{
            margin-left: 5px;
        }
    }
    &-text{
        width: 12ch;
        text-align: center;
    }
    
}
</style>