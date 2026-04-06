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
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.site-content {
  padding-top: 64px;
  width: 100%;
}

.home-container {
  width: 100%;
  max-width: 1440px;
  padding-left: 8px;
  padding-right: 8px;
}

.site-main,
#main,
.elementor,
.elementor-3797 {
  width: 100%;
}

.home-main-section {
  position: relative;
  margin-top: -18px;
  z-index: 10;
  padding-bottom: 24px;
}

.home-action-wrap {
  width: 1030px;
  max-width: 96%;
  margin: 0 auto;
}

.home-news-wrap {
  width: 100%;
  margin-top: 14px;
}

.home-news-wrap :deep(.e-con-inner) {
  width: 100%;
  max-width: 1322px;
  margin: 0 auto;
}

.news-grid {
  width: 100%;
  margin: 0 auto;
  align-items: start;
  gap: 30px;
}

.feature-wrap {
  width: 392px;
  margin: 56px 0 0 auto;
  transform: translateX(-74px);
}

@media (max-width: 1024px) {
  .site-content {
    padding-top: 56px;
  }

  .home-container {
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
  }

  .home-main-section {
    margin-top: 8px;
  }

  .news-grid {
    width: 94%;
    gap: 16px;
  }

  .feature-wrap {
    width: 390px;
    margin: 36px auto 0;
    transform: none;
  }
}

@media (max-width: 767px) {
  .site-content {
    padding-top: 48px;
  }

  .home-main-section {
    margin-top: 14px;
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
