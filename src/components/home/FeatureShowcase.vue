<script setup lang="ts">
import { featureImages } from '../../data/features'
</script>

<template>
  <div class="feature-wrap">
    <div class="container feature-shell">
      <div class="right-column feature-panel">
        <img class="title-image" src="/images/tinh-nang-dac-sac-88b4c5d9.png" alt="Tính năng đặc sắc" />
        <div class="button-list">
          <button v-for="feature in featureImages" :key="feature.id" class="btn-feature" type="button">
            <img :src="feature.buttonImage" :alt="feature.alt" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-wrap {
  width: 392px;
  margin: 56px 0 0 auto;
  padding-bottom: 0;
  transform: translateX(-74px);
}

.feature-shell {
  padding: 0;
  align-items: flex-start;
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
  display: block;
  transform-origin: center;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .feature-wrap {
    width: 390px;
    margin: 36px auto 0;
    transform: none;
  }
}

@media (max-width: 767px) {
  .feature-wrap {
    width: 94%;
  }
}
</style>
