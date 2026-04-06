<template>
  <div class="elementor-element elementor-element-1de219a e-con-full e-flex e-con e-parent e-lazyloaded hero-banner">
    <img class="hero-keyart" src="/images/bg-banner-2-a13607ea.jpg" alt="Banner" />
  </div>
</template>

<style scoped>
.hero-banner {
  position: relative;
  overflow: hidden;
  margin-top: 0;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  height: clamp(260px, 32vw, 460px);
  background: #1d1f23;
}

.hero-keyart {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 767px) {
  .hero-banner {
    height: 56vw;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    height: 62vw;
  }
}
</style>
