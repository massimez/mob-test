<script setup lang="ts">
import CardProduct from "./components/CardProduct.vue";
import ProductsList from "./components/ProductsList.vue";
import SearchInput from "./components/UI/SearchInput.vue";
</script>

<template>
  <header></header>

  <main class="main">
    <SearchInput></SearchInput>
    <ProductsList></ProductsList>
  </main>
</template>

<style lang="scss" scoped>
.main {
  padding: 0 5px;
  background-color: white;
  color: black;
}
</style>
