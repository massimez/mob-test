<script setup lang="ts">
interface IDragParams {
  movement: Array<number>;
  dragging: boolean;
}
defineProps({
  imagePath: {
    type: String,
    required: true,
    default: () =>
      `https://picsum.photos/id/${Math.floor(Math.random() * 30)}/250/200`,
  },
  title: {
    type: String,
    required: true,
    default: "Сервисы Apple в подарок припокупке iPhone.",
  },
  shopName: {
    type: String,
    required: true,
    default: "Megaphone",
  },
  shopAddress: {
    type: String,
    required: true,
    default: "Ближайшее: Ростов-на-Дону, Большая Садовая улица, 63 (400 м)",
  },
});

const emit = defineEmits(["onDragCard"]);

const dragHandler = ({ movement: [x, y], dragging }: IDragParams) => {
  if (dragging) {
    emit("onDragCard", { x, y });
  }
};
</script>

<template>
  <div class="card unselectable" v-drag="dragHandler">
    <div class="card__header">
      <img :src="imagePath" alt="product image" draggable="false" />
      <img
        class="card__overlay--top-left"
        src="https://rlv.zcache.com/5_dollar_off_sales_discount_red_sticker-r6a019d2cda9544c9bb7d004931059d51_0ugmp_8byvr_307.jpg"
        alt="discount sticker"
        width="40"
        height="40"
      />
    </div>
    <h3 class="card__title">{{ title }}</h3>
    <div class="card__body">
      <div class="shop">
        <h4 class="shop__name">{{ shopName }}</h4>
        <p class="shop__address">{{ shopAddress }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/breakpoints.scss";
.card {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  padding: 1rem 0;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  gap: 10px;
  cursor: grab;
  &__title {
    cursor: pointer;
    padding: 0 1rem;
    font-weight: 700;
  }
  &__body {
    padding: 0 1rem;
  }
  &__header {
    position: relative;
  }
  &__overlay {
    &--top-left {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
.unselectable {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@include _767 {
  .card {
    box-shadow: none;
  }
}
</style>
