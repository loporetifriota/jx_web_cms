<script setup lang="ts">
import { popupButtons } from '../../data/menu'
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
      <a href="#" class="top-button-overlay"></a>
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
