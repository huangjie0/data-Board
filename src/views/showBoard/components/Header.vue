<template>
    <div class="home-header data-between">
        <div class="home-header-left data-fdr">
            <i class="iconfont icon-shendusikao home-header-left-icon"></i>
            <span class="home-header-left-text">上海业扩可研分析管控</span>
        </div>
        <div class="home-header-center data-between">
            <SmallCircleIcon icon-name="icon-jiantou1" @click-bu="clickBu('previous')"  v-if="menusList.length > 5"></SmallCircleIcon>
            <div class="home-header-center-menus data-f1 data-w-h data-fdr">
                <Menus v-for="(item,index) in countData(lastCou)" :key="index" :text="item.name" :path="item.path"/>
            </div>
            <SmallCircleIcon icon-name="icon-jiantou"  @click-bu="clickBu('next')" v-if="menusList.length > 5"></SmallCircleIcon>
        </div>
        <div class="home-header-right data-fdr data-between">
              <el-avatar :icon="UserFilled" :size="30"/>
              <div class="data-f1 data-center data-w-h">
                 <el-dropdown>
                    <span class="data-center"> 
                        Adminadm..
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(item,index) in u" :key="index">{{ item.name }}</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
              </div>
              <div class="home-header-right-time data-fdc">
                <div class="data-f1 home-header-right-time-d1 data-center">{{ time }}</div>
                <div class="data-f1 home-header-right-time-d2 data-center">{{ d }}</div>
              </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { UserFilled, ArrowDown } from '@element-plus/icons-vue'
import DateTimeUtils from '@/utils/date.ts'
import SmallCircleIcon from './SmallCircleIcon.vue'
import Menus from './Menus.vue'

const u = computed(()=>{
    return [
        { name:'Action 1',id:'01' },
        { name:'Action 2',id:'02' },
        { name:'Action 3',id:'03' },
    ]
})

const time = ref(new Date().toLocaleTimeString())
let intervalId:any = null
const cou =  ref(5)
const lastCou = ref()

onMounted(() => {
  intervalId = setInterval(() => {
    time.value = new Date().toLocaleTimeString();
  }, 1000);
});

onUnmounted(() => { // 组件卸载时清除定时器
  clearInterval(intervalId)
})

const d = computed(()=>{return DateTimeUtils.formatDate(new Date(),"YYYY/MM/DD") + DateTimeUtils.getDayOfWeek(new Date())})
const menusList = [
        { name:"首页看板", path:'/showBoard/homeBoard' },
        { name:"项目详情总览", path:'/showBoard/projectOverview' },
        { name:"超期项目分析", path:'/' },
        { name:"可研完成情况", path:'/' },
        { name:"可研评审专题", path:'/' },
        { name:"可研评审专题", path:'/' },
        { name:"可研评审专题", path:'/' },
        { name:"可研评审专题", path:'/' },
        { name:"可研评审专题", path:'/' }
]

const countData = (initialValue:number = 0 )=>{
    let menus:any[] = [];
    if(menusList.length && menusList.length > 5){
        menus = menusList.slice(initialValue,cou.value)
        return menus;
    }else{
        menus = menusList
        return menus;
    }
}

const clickBu = (t:string)=>{
    if(t === 'previous'){
        if(cou.value > 5) cou.value -= 5;
        lastCou.value = cou.value - 5;
    }
    if(t === 'next'){
        if(menusList.length > cou.value) cou.value += 5;
        lastCou.value = cou.value - 5;
    }
}
</script>
<style lang="less" scoped>
    .home-header{ 
        position: fixed;
        top: 0; 
        width: 100%;
        height: 4.4375rem;
        background-color: var(--vt-c-white);
        border-bottom-left-radius: var(--small-radius);
        border-bottom-right-radius: var(--small-radius);
        padding:  0 2.375rem;
        &-left{
            align-items: center;
            &-icon{
                font-size: 35px;
                margin-right: 10px;
                color: var(--common-home-bg-2);
            }
            &-text{
                font-family: MyFont;
                font-size: 28px;
                color: var(--common-home-bg-3);
            }
        }
        &-center{
            width: 100vw - 45%;
            height: 100%;
            overflow-x: hidden;
            &-menus{
                align-items: center;
                padding: 0 2.1875rem;
            }
        }
        &-right{
            align-items: center;
            width: 15%;
            &-time{
                height: 100%;
                width: 45%;
                color: var(--common-home-bg-3);
                &-d1{
                    font-size: 25px;
                    font-weight: 500;
                }
                &-d2{
                    font-size: 15px;
                }
            }
        }
        &-left{
            width: 18%;
            height: 100%;
        }
    }
</style>