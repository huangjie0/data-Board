<template>
    <GouPiTanCommonPage>
        <div class="system-architecture data-w-h data-fdc">
            <div class="system-architecture-top data-between">
                <div class="system-architecture-top-left">
                    <GouPiTanTitleCard title="数字巡检" :bg-url="border1">
                        <TopLeft />
                    </GouPiTanTitleCard>
                </div>
                <div class="system-architecture-top-center-1">
                    <GouPiTanTitleCard title="数字技术监督" :bg-url="border1">
                        <TopCenter1 />
                    </GouPiTanTitleCard>
                </div>
                <div class="system-architecture-top-center-2">
                    <GouPiTanTitleCard title="数字安全" :bg-url="border1">
                        <TopCenter2 />
                    </GouPiTanTitleCard>
                </div>
                <div class="system-architecture-top-center-3">
                    <GouPiTanTitleCard title="数字大坝" :bg-url="border1">
                        <TopCenter3 />
                    </GouPiTanTitleCard>
                </div>
                <div class="system-architecture-top-right">
                    <GouPiTanTitleCard title="数字生产管理" :bg-url="border1">
                        <TopRight />
                    </GouPiTanTitleCard>
                </div>
            </div>
            <div class="system-architecture-center">
                <GouPiTanTitleCard :bg-url="border2">
                    <Center />
                </GouPiTanTitleCard>
            </div>
            <div class="system-architecture-bottom data-between">
                <div class="system-architecture-bottom-left">
                    <GouPiTanTitleCard :bg-url="border3">

                    </GouPiTanTitleCard>
                </div>
                <div class="system-architecture-bottom-right">
                    <GouPiTanTitleCard :bg-url="border4">

                    </GouPiTanTitleCard>
                </div>
            </div>
        </div>
    </GouPiTanCommonPage>
</template>
<script setup lang="ts">
// import request from '@/config/request/index.ts'
// import { usePoll } from '@/hooks/usePoll.ts'
import GouPiTanCommonPage from '@/components/GouPiTanCommonPage.vue'
import GouPiTanTitleCard from './components/GouPiTanTitleCard.vue'
import TopLeft from './components/TopLeft.vue';
import TopCenter1 from './components/TopCenter1.vue';
import TopCenter2 from './components/TopCenter2.vue';
import TopCenter3 from './components/TopCenter3.vue';
import TopRight from './components/TopRight.vue';
import Center from './components/Center.vue';
import border1 from '@/assets/style/image/gouPiTan/systemArchitecture/border1.png'
import border2 from '@/assets/style/image/gouPiTan/systemArchitecture/border2.png'
import border3 from '@/assets/style/image/gouPiTan/systemArchitecture/border3.png'
import border4 from '@/assets/style/image/gouPiTan/systemArchitecture/border4.png'

// 使用轮询Hook
// const { start, stop } = usePoll(async () => {
//     const res = await request.get('/api/getList')
//     console.log('轮询结果：', res)
// }, 2500)

// start()
</script>
<style lang="less" scoped>
.system-architecture {
    justify-content: space-between;

    &-top {
        width: 100%;
        height: 28%;

        &-left {
            height: 100%;
            width: 16.5%;
        }

        &-center-1 {
            height: 100%;
            width: 16.5%;
        }

        &-center-2 {
            height: 100%;
            width: 32%;
        }

        &-center-3 {
            height: 100%;
            width: 8%;
        }

        &-right {
            height: 100%;
            width: 24%;
        }
    }

    &-center {
        width: 100%;
        height: 30%;
    }

    &-bottom {
        width: 100%;
        height: 37%;

        &-left {
            width: 36%;
            height: 100%;
        }

        &-right {
            width: 63.3%;
            height: 100%;
        }
    }
}
</style>