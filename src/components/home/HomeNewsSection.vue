<script setup lang="ts">
import ImageCarousel from './ImageCarousel.vue'
import NewsTabs from './NewsTabs.vue'
</script>

<template>
  <div class="elementor-element elementor-element-416175b e-flex e-con-boxed e-con e-child home-news-wrap news-layout-shell">
    <div class="e-con-inner">
      <div class="elementor-element elementor-element-0322661 e-grid e-con-full e-con e-child news-grid">
        <ImageCarousel />
        <NewsTabs />
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-news-wrap {
  width: 100%;
  margin-top: 14px;
}

.home-news-wrap :deep(.e-con-inner),
.home-news-wrap :deep(.elementor-element.elementor-element-0322661),
.home-news-wrap :deep(.news-grid) {
  width: 100% !important;
  max-width: none !important;
  margin: 0;
}

.home-news-wrap :deep(.elementor-element.elementor-element-0322661),
.home-news-wrap :deep(.news-grid) {
  --width: 100% !important;
}

@media (min-width: 768px) {
  .home-news-wrap :deep(.elementor-element.elementor-element-0322661),
  .home-news-wrap :deep(.news-grid) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr) !important;
    --e-con-grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr) !important;
  }
}

@media (max-width: 1024px) {
  .news-grid {
    width: 100%;
    gap: 24px;
  }
}

@media (max-width: 767px) {
  .home-news-wrap {
    margin-top: 6px;
  }

  .news-grid {
    width: 100%;
  }
}
</style>
