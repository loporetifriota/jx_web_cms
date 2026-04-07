<script setup lang="ts">
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { homeSlides } from '../../data/features'
</script>

<template>
  <div class="elementor-element elementor-element-180c4ca elementor-widget elementor-widget-image-carousel e-widget-swiper">
    <div class="elementor-widget-container carousel-shell">
      <Swiper
        class="elementor-image-carousel-wrapper"
        :modules="[Navigation, Pagination, Autoplay]"
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        :speed="500"
        navigation
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="slide in homeSlides" :key="slide">
          <figure class="swiper-slide-inner">
            <img class="swiper-slide-image" :src="slide" alt="Ảnh nổi bật Vẹn Nguyên Ký Ức" />
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.carousel-shell {
  overflow: hidden;
}

.swiper-slide-image {
  display: block;
  width: 100%;
}
</style>
