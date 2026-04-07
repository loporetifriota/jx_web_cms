<template>
  <div class="elementor-element elementor-element-1de219a e-con-full e-flex e-con e-parent e-lazyloaded hero-banner">
    <img class="hero-keyart" src="/images/bg-banner-2-a13607ea.jpg" alt="Banner trang chủ Vẹn Nguyên Ký Ức" />
  </div>
</template>

<style scoped>
.hero-banner {
  position: relative;
  overflow: hidden;
  margin-top: 0;
  width: calc(100vw + 40px);
  margin-left: calc(50% - 50vw - 20px);
  margin-right: calc(50% - 50vw - 20px);
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
    margin-top: -8px;
    width: calc(100vw + 24px);
    margin-left: calc(50% - 50vw - 12px);
    margin-right: calc(50% - 50vw - 12px);
    height: 68vw;
  }

  .hero-keyart {
    transform: scale(1.06);
    transform-origin: center;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    margin-top: -10px;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    height: 74vw;
  }

  .hero-keyart {
    transform: scale(1.06);
  }
}
</style>
