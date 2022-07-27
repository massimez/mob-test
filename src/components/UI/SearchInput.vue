<script setup lang="ts">
import { onMounted, ref } from "vue";
import BaseInput from "./BaseInput.vue";

const buttonsConfig = ref([
  { icon: "fa-car", title: "Automotive" },
  { icon: "fa-foursquare", title: "Books" },
  { icon: "fa-video-camera", title: "Camera" },
  { icon: "fa-codepen", title: "Cell Phones" },
  { icon: "fa-joomla", title: "Electronics" },
  { icon: "fa-steam-square", title: "Health" },
  { icon: "fa-paint-brush", title: "Design" },
  { icon: "fa-sticky-note", title: "Instruments" },
]);
const menuCategories = ref<any>(null);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
let prevScrollpos = window.scrollY;
function handleScroll() {
  window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      menuCategories.value.style.top = currentScrollPos > 53 ? "0" : "58px";
    } else {
      menuCategories.value.style.top = currentScrollPos < 56 ? "0 " : "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
}
</script>
<template>
  <div class="search">
    <BaseInput> </BaseInput>
    <div ref="menuCategories" class="nav-fixed">
      <div class="container-filter-btn">
        <div class="btn" v-for="(btn, n) in buttonsConfig" :key="n">
          <i :class="`fa ${btn.icon}`"></i> {{ btn.title }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.search {
  padding: 10px 0;
  border-radius: 5px;
  margin-bottom: 48px;
}

.nav-fixed {
  position: fixed;
  top: 58px;
  width: 100%;
  z-index: 1;
}
.container-filter-btn {
  background-color: white;
  border-radius: 10px;
  padding: 3px;
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  transition: top 0.6s;

  &::-webkit-scrollbar {
    display: none;
  }
}

.btn {
  height: 40px;
  max-width: 200px;
  background-color: rgb(187, 195, 204);
  border: none;
  color: white;
  padding: 6px;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  border-radius: 60px;
  overflow: ellipsis;
  white-space: nowrap;
}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>
