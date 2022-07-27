<script setup lang="ts">
import { ref } from "vue";

const search = ref("");
</script>
<template>
  <div class="input-left">
    <slot name="left"></slot>
  </div>
  <input class="input" type="text" v-model="search" placeholder="Search..." />
  <div class="input-right">
    <slot name="right"></slot>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  position: relative;
}
.input {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;

  &:hover {
    border: 1px solid #aaa;
  }
}
</style>
