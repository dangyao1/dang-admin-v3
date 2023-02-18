<template>
  <div>
    <t-header class="header">
      <div class="main-collapse">折叠</div>
      <div class="operation-area">
        <t-button variant="text">
          <template #icon>
            <icon name="user"></icon>
          </template>
          用户名
        </t-button>
      </div>
    </t-header>
  </div>
</template>

<script setup lang="ts">
import { Icon } from 'tdesign-vue-next'
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}
</style>
