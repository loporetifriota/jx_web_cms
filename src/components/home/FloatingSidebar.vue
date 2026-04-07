<script setup lang="ts">
import { popupButtons } from '../../data/menu'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="fixed-popup-menu">
    <div class="popup-menu-container">
      <div class="popup-menu-bg"></div>
      <a
        v-for="button in popupButtons"
        :key="button.image"
        :href="button.href"
        class="popup-button"
        :target="button.external ? '_blank' : undefined"
        :rel="button.external ? 'nofollow noopener' : undefined"
      >
        <img :src="button.image" :alt="button.alt" />
      </a>
      <button type="button" class="top-button-overlay" aria-label="Quay lên đầu trang" @click="scrollToTop"></button>
    </div>
  </div>
</template>

<style scoped>
.fixed-popup-menu {
  right: 6px;
}

@media (max-width: 1024px) {
  .fixed-popup-menu {
    right: 4px;
    transform: translateY(-50%) scale(0.9);
    transform-origin: right center;
  }
}

@media (max-width: 768px) {
  .fixed-popup-menu {
    display: none;
  }
}
</style>
