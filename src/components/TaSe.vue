<template>
  <!--  动态查询条件   -->
  <el-form
    v-if="tableConfig.searchForm"
    inline
    ref="form"
    :model="tableConfig.searchParams"
    :label-width="tableConfig.labelWidth"
  >
    <el-form-item
      v-for="item in tableConfig.formItem"
      :key="item.prop"
      :label="item.label"
      :prop="item.prop"
      :rules="item.rules"
    >
      <!-- Input-->
      <el-input
        v-if="item.type === 'Input'"
        v-model.trim="tableConfig.searchParams[item.prop]"
        :placeholder="item.placeholder"
        :style="{ width: item.width }"
        :disabled="item.disabled"
      ></el-input>
      <!-- Select-->
      <el-select
        filterable
        v-if="item.type === 'Select'"
        v-model.trim="tableConfig.searchParams[item.prop]"
        :placeholder="item.placeholder"
        :style="{ width: item.width }"
        :disabled="item.disabled"
      >
        <el-option
          v-for="selectItem in item.options"
          :key="selectItem.value || selectItem[item.selectVlaue]"
          :value="selectItem.value || selectItem[item.selectVlaue]"
          :label="selectItem.label || selectItem[item.selectLabel]"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- 按钮 -->
    <el-form-item>
      <el-button
        :disabled="loadingTable"
        type="primary"
        @click="search(tableConfig.searchParams)"
        >查询</el-button
      >
      <el-button
        :disabled="loadingTable"
        type="warning"
        @click="reset"
        v-if="tableConfig.formConfig.resetButton"
        >重置</el-button
      >
      <template v-for="item in tableConfig.formHandler">
        <el-button
          :disabled="loadingTable"
          v-if="item.element === 'link'"
          :key="item.key"
          :type="item.type"
        >
          <router-link :to="item.router">
            <span class="color-white">{{ item.label }}</span>
          </router-link>
        </el-button>
        <el-button
          :disabled="loadingTable"
          v-if="item.element === 'button'"
          :key="item.key"
          :type="item.type"
          @click="item.handler(item)"
        >
          {{ item.label }}
        </el-button>
      </template>
    </el-form-item>
  </el-form>
  <!-- 插槽可以引入别的组件或者DOM   -->
  <slot name="content"></slot>
  <!--  动态渲染表格  -->
  <el-table
    ref="table"
    v-loading="loadingTable"
    element-loading-text="加载中..."
    :data="tableData"
    border
    fit
    :height="tableConfig.tableHeight"
    @selection-change="handleSelectionChange"
    :header-cell-style="{ 'text-align': 'center' }"
    :cell-style="{ 'text-align': 'center' }"
  >
    <el-table-column
      v-if="tableConfig.checkbox"
      type="selection"
      width="40"
    ></el-table-column>
    <template v-for="item in tableConfig.thead">
      <!--操作 -->
      <el-table-column
        align="center"
        v-if="item.type === 'operation'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <!--按钮组-->
          <template v-if="item.buttonGroup && item.buttonGroup.length > 0">
            <template v-for="button in item.buttonGroup">
              <!-- 事件 -->
              <el-button
                v-if="button.event === 'button'"
                :type="button.type"
                :key="button.id"
                style="margin: 0 5px"
                @click="button.handler(scope.row)"
                size="small"
              >
                {{ button.label }}
              </el-button>
              <!-- 路由跳转 -->
              <router-link
                v-if="button.event === 'link'"
                :key="button.id"
                :to="{
                  name: button.name,
                  query: { [button.key]: scope.row[button.value || 'id'] },
                }"
                class="mr-10"
              >
                <el-button
                  style="margin: 0 5px"
                  :type="button.type"
                  size="small"
                  >{{ button.label }}</el-button
                >
              </router-link>
            </template>
          </template>
          <!--额外-->
          <slot
            v-if="item.slotName"
            :name="item.slotName"
            :data="scope.row"
          ></slot>
          <!--删除-->
          <!--            <el-button size="small" v-if="item.default && item.default.deleteButton" :loading="scope.row[item.default.deleteKey || 'id'] == rowId" @click="delConfirm(scope.row[item.default.deleteKey || 'id'])">删除</el-button>-->
        </template>
      </el-table-column>
      <!-- 纯文本渲染 -->
      <el-table-column
        v-else
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
    </template>
  </el-table>
  <!--  分页  -->
  <el-row class="padding-top-30">
    <el-col :span="24">
      <el-pagination
        v-if="tableConfig.pagination"
        class="rightClass"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="tableConfig.searchParams.pageIndex"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData?.length"
      >
      </el-pagination>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
interface Params {
  tableConfig: any;
  tableData?:any;
}

const loadingTable = ref(false);
const form = ref();
const table = ref();

const emits = defineEmits(["search", "handleSelectionChange"]);

const search = (val: any) => {
  emits("search", val);
};

const reset = () => {
  form.value.resetFields();
};

const initConfig = () => {
  loadingTable.value = true;
  setTimeout(() => {
    loadingTable.value = false;
  }, 3000);
};
const handleSizeChange = (val: any) => {
  props.tableConfig.searchParams.pageSize = val;
  initConfig();
};

const handleCurrentChange = (val: any) => {
  props.tableConfig.searchParams.pageIndex = val;
  initConfig();
};

const handleSelectionChange = (val: any) => {
  emits("handleSelectionChange", val);
};

const props = withDefaults(defineProps<Params>(), {});

watch(
  () => {
    props.tableConfig;
  },
  () => {
    initConfig();
  },
  { immediate: true }
);
</script>
<style lang="less" scoped>
.padding-top-30 {
  padding-top: 30px;
}

.rightClass {
  float: right;
}
</style>
