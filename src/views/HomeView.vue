<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import HeroBanner from '../components/home/HeroBanner.vue'
import ActionMenu from '../components/home/ActionMenu.vue'
import HomeNewsSection from '../components/home/HomeNewsSection.vue'
import FeatureShowcase from '../components/home/FeatureShowcase.vue'
import FloatingSidebar from '../components/home/FloatingSidebar.vue'
</script>

<template>
  <div class="home-page">
    <AppHeader />
    <div id="content" class="site-content">
      <div class="ast-container home-container">
        <main id="main" class="site-main">
          <h1 class="seo-page-title">Vẹn Nguyên Ký Ức - Trang chủ game Võ Lâm</h1>
          <div class="elementor elementor-3797">
            <HeroBanner />
            <div class="home-main-bg">
              <div class="elementor-element elementor-element-14dfca0 e-con-full content e-flex e-con e-parent e-lazyloaded home-main-section">
                <ActionMenu />
                <HomeNewsSection />
                <FeatureShowcase />
                <FloatingSidebar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.site-content {
  padding-top: 74px;
  width: 100%;
}

.home-container {
  width: 100%;
  max-width: 1440px;
  padding-left: 0;
  padding-right: 0;
}

.home-container > .site-main {
  width: 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.site-main,
#main,
.elementor,
.elementor-3797 {
  width: 100%;
  max-width: 100%;
}

.seo-page-title {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.home-main-bg {
  position: relative;
  width: calc(100vw + 40px);
  margin-left: calc(50% - 50vw - 20px);
  margin-right: calc(50% - 50vw - 20px);
  margin-top: -32px;
  background: url('/images/bg-banner23-2-35d00803.png') center top / cover no-repeat;
}

.home-main-section {
  position: relative;
  width: min(100%, 1680px);
  max-width: 1680px;
  margin: -18px auto 0;
  z-index: 10;
  --justify-content: flex-start;
  --align-items: stretch;
  --padding-top: 0px;
  --padding-bottom: 0px;
  --padding-block-start: 0px;
  --padding-block-end: 0px;
  padding: 0 clamp(12px, 2vw, 32px) 24px;
  box-sizing: border-box;
}
@media (max-width: 1024px) {
  .site-content {
    padding-top: 62px;
  }

  .home-container {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  .home-main-section {
    width: 100%;
    max-width: 100%;
    margin-top: 0;
    --justify-content: flex-start;
    --align-items: stretch;
    padding-left: 18px;
    padding-right: 18px;
  }

}

@media (max-width: 767px) {
  .site-content {
    padding-top: 50px;
  }

  .home-main-bg {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }

  .home-main-section {
    margin-top: 0 !important;
    max-width: 100%;
    --justify-content: flex-start;
    --align-items: stretch;
    padding-left: 16px;
    padding-right: 16px;
  }

}

@media (max-width: 600px) {
  .site-content {
    padding-top: 46px;
  }

  .home-container {
    padding-left: 0;
    padding-right: 0;
  }

  .home-main-section {
    margin-top: 0 !important;
    padding-left: 12px;
    padding-right: 12px;
  }
}

@media (max-width: 480px) {
  .site-content {
    padding-top: 44px;
  }

  .home-container {
    padding-left: 0;
    padding-right: 0;
  }

  .home-main-bg {
    width: 100vw;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
  }

  .home-main-section {
    margin-top: 0 !important;
    padding-left: 8px;
    padding-right: 8px;
  }
}
</style>
