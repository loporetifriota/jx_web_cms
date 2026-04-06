<script setup lang="ts">
import { ref, computed } from 'vue'
import { featureImages } from '../../data/features'

const activeId = ref(featureImages[0].id)
const activeImage = computed(() => featureImages.find((item) => item.id === activeId.value) ?? featureImages[0])
</script>

<template>
  <div class="container feature-shell">
    <div class="left-column feature-preview">
      <img :src="activeImage.image" class="main-image active" :id="activeImage.id" :alt="activeImage.alt" />
    </div>

    <div class="right-column feature-panel">
      <img class="title-image" src="/images/tinh-nang-dac-sac-88b4c5d9.png" alt="Tính năng đặc sắc" />
      <div class="button-list">
        <div
          v-for="feature in featureImages"
          :key="feature.id"
          class="btn-feature"
          :class="{ active: activeId === feature.id }"
          @click="activeId = feature.id"
        >
          <img :src="feature.buttonImage" :alt="feature.alt" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-shell {
  padding: 0;
  align-items: flex-start;
}

.feature-preview {
  display: none;
}

.feature-panel {
  width: 100%;
  max-width: 392px;
  min-height: 364px;
  padding: 30px 22px 30px;
}

.title-image {
  max-width: 190px;
  margin-bottom: 14px;
}

.button-list {
  width: 100%;
  gap: 8px;
}

.btn-feature {
  transform-origin: center;
}

.btn-feature.active {
  transform: scale(1.02);
}
</style>
