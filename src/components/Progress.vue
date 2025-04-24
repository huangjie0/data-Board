<template>
     <div class="progress-box" :style="style">
        <div class="progress-box-item" v-for="i in sumItem" :style="getColor(i)"></div>
    </div>
</template>
<script lang="ts" setup>

interface Params {
    color?: string,
    percentage: number,
    bgColor?: string,
}

const props = withDefaults(defineProps<Params>(), {
    color: '#048FFD'
})

const style = computed(() => {
    return {
        '--progress-color': props.color,
        '--progress-bg-color': props.bgColor,
    }
})

const sumItem = ref(50)
const getColor = (index: number) => {
    const m = 100 / sumItem.value
    const res: any = {}
    const a = index * m
    const val = props.percentage * 100
    // 计算透明度
    const n = (index - 1) * m
    let t = (100 - n / 2) / 100
    let color = props.color

    if (val >= a) {
        res.backgroundColor = color
        res.opacity = t
    }
    return res
}

</script>
<style lang="less" scoped>
.progress-box {
    width: 100%;
    height: 1rem;
    border-radius: 0.125rem;
    border: 0.0625rem solid var(--progress-color);
    background-color: var(--progress-bg-color);
    box-sizing: border-box;
    padding: 0.0625rem;
    display: flex;
    flex-direction: row;

    &-item {
        margin-right: 0.0625rem;
        flex: 1;

        &:last-child {
            margin-right: 0;
        }
    }
}
</style>