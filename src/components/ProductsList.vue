<script setup lang="ts">
import { ref } from "vue";
import CardProduct from "./CardProduct.vue";

const itemRefs = ref<HTMLDivElement[]>([]);
const containers = [
  {
    id: 0,
    title: "Сервисы Apple в подарок припокупке iPhone",
  },
  {
    id: 1,
    title: "Сервисы Samsung в подарок припокупке Samsung",
  },
  {
    id: 2,
    title: "Сервисы Samsung в подарок припокупке Samsung",
  },
];

function handleDrag({ x }: { x: number }, id: number) {
  if (
    navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)
  ) {
    return;
  }
  if (x > 0) {
    x = -20;
  } else {
    x = 20;
  }

  itemRefs.value[id].scrollLeft = itemRefs.value[id].scrollLeft + x;
}
</script>

<template>
  <div class="wrapper">
    <template
      v-for="container in containers"
      :key="`container-${container.id}`"
    >
      <h2>{{ container.title }}</h2>
      <div ref="itemRefs" class="container-cards">
        <template v-for="n in 10" :key="n">
          <CardProduct @on-drag-card="handleDrag($event, container.id)">
          </CardProduct>
        </template>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
}
.container-cards {
  display: flex;
  overflow-x: scroll;
  background-color: white;
  gap: 15px;
  margin: 10px;
  padding: 10px 0;
  transition: all 0.3s linear;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
