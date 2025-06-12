<template>
    <div>
        
    </div>
</template>
<script lang="ts" setup>
interface Params{
    iconClass:string
    text:string
    number:number
    unit:string
}

withDefaults(defineProps<Params>(),{
    unit:'个'
})

</script>
<style lang="less" scoped> 
    
</style>