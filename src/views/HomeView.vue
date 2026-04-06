<script setup lang="ts">
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import HeroBanner from '../components/home/HeroBanner.vue'
import ActionMenu from '../components/home/ActionMenu.vue'
import ImageCarousel from '../components/home/ImageCarousel.vue'
import NewsTabs from '../components/home/NewsTabs.vue'
import FeatureShowcase from '../components/home/FeatureShowcase.vue'
import FloatingSidebar from '../components/home/FloatingSidebar.vue'
</script>

<template>
  <div class="home-page">
    <AppHeader />
    <div id="content" class="site-content">
      <div class="ast-container home-container">
        <main id="main" class="site-main">
          <div class="elementor elementor-3797">
            <HeroBanner />
            <div class="home-main-bg">
              <div class="elementor-element elementor-element-14dfca0 e-con-full content e-flex e-con e-parent e-lazyloaded home-main-section">
                <div class="elementor-element elementor-element-fb4b4d5 e-con-full e-flex e-con e-child home-action-wrap">
                  <ActionMenu />
                </div>
                <div class="elementor-element elementor-element-416175b e-flex e-con-boxed e-con e-child home-news-wrap">
                  <div class="e-con-inner">
                    <div class="elementor-element elementor-element-0322661 e-grid e-con-full e-con e-child news-grid">
                      <ImageCarousel />
                      <NewsTabs />
                    </div>
                  </div>
                </div>
                <div class="feature-wrap">
                  <FeatureShowcase />
                </div>
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
  padding-left: 8px;
  padding-right: 8px;
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

.home-main-bg {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  background: url('/images/bg-banner23-2-35d00803.png') center top / cover no-repeat;
}

.home-main-section {
  position: relative;
  width: min(100%, 1680px);
  max-width: 1680px;
  margin: -18px auto 0;
  z-index: 10;
  padding: 0 clamp(24px, 4vw, 72px) 24px;
  box-sizing: border-box;
}

.home-action-wrap {
  width: min(100%, 1280px);
  max-width: 1280px;
  margin: 0 auto;
}

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

.news-grid {
  width: 100%;
  max-width: none;
  margin: 0;
  align-items: start;
  gap: clamp(30px, 4vw, 72px);
}

.feature-wrap {
  width: 392px;
  margin: 56px 0 0 auto;
  transform: translateX(-74px);
}

@media (max-width: 1024px) {
  .site-content {
    padding-top: 62px;
  }

  .home-container {
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
  }

  .home-main-section {
    width: 100%;
    max-width: 100%;
    margin-top: 8px;
    padding-left: 18px;
    padding-right: 18px;
  }

  .news-grid {
    width: 100%;
    gap: 24px;
  }

  .feature-wrap {
    width: 390px;
    margin: 36px auto 0;
    transform: none;
  }
}

@media (max-width: 767px) {
  .site-content {
    padding-top: 54px;
  }

  .home-main-bg {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  .home-main-section {
    margin-top: 14px;
    max-width: 100%;
  }

  .home-action-wrap {
    width: 100%;
  }

  .news-grid {
    width: 100%;
  }

  .feature-wrap {
    width: 94%;
  }
}
</style>
