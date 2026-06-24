<template>
    <div class="data-w-h data-fdc">
        <div class="data-f1 gou-pi-tan-small-card-content">
            <slot/>
        </div>
        <div class="gou-pi-tan-small-card-name data-center data-ellipsis">{{ name }}</div>
    </div>
</template>

<script setup lang="ts">
interface Params{
    name:string
}
defineProps<Params>()
</script>

<style scoped lang="less">
.gou-pi-tan-small-card-name{
    height: 20px;
    color:var(--common-home-bg-7);
    font-size:9px;
}
.gou-pi-tan-small-card-content{
    border: 1px solid rgba(0, 168, 255, 1);
}
</style>