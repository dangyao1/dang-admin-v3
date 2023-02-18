<template>
  <div>
    <t-layout class="main-layout">
      <t-aside>Aside</t-aside>
      <t-layout>
        <main-header></main-header>
        <t-content>Content</t-content>
        <t-footer>Footer</t-footer>
      </t-layout>
    </t-layout>
  </div>
</template>

<script setup lang="ts">
import MainHeader from '@/components/main-header.vue'
</script>

<style lang="less" scoped>
.main-layout {
  height: 100vh;
}
</style>
