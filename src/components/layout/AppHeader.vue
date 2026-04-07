<script setup lang="ts">
import HeaderLogo from './HeaderLogo.vue'
import HeaderNav from './HeaderNav.vue'
import HeaderSearch from './HeaderSearch.vue'
import MobileHeader from './MobileHeader.vue'
</script>

<template>
  <header
    id="masthead"
    class="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
  >
    <MobileHeader />

    <div id="ast-desktop-header" data-toggle-type="dropdown">
      <div class="ast-main-header-wrap main-header-bar-wrap">
        <div class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item">
          <div class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container">
            <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout header-shell">
              <div class="site-header-primary-section-center site-header-section ast-flex ast-grid-section-center">
                <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                  <div class="site-branding ast-site-identity">
                    <span class="site-logo-img">
                      <HeaderLogo />
                    </span>
                  </div>
                </div>

                <HeaderNav />
              </div>

              <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                <HeaderSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
#masthead {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 50;
  background: rgba(21, 24, 28, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

#ast-desktop-header {
  display: block;
}

.header-shell {
  min-height: 34px;
  align-items: center;
  display: flex !important;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

#masthead :deep(#ast-desktop-header),
#masthead :deep(.ast-primary-header-bar),
#masthead :deep(.site-primary-header-wrap),
#masthead :deep(.ast-builder-grid-row.ast-grid-center-col-layout) {
  display: block;
}

.site-header-primary-section-center {
  justify-content: center;
}

.site-header-primary-section-right {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.site-branding {
  margin-right: 14px;
}

@media (max-width: 1024px) {
  .site-branding {
    margin-right: 10px;
  }

  .site-header-primary-section-right {
    right: 8px;
  }
}

@media (max-width: 768px) {
  #ast-desktop-header,
  #masthead :deep(#ast-desktop-header) {
    display: block !important;
  }

  #masthead :deep(.ast-primary-header-bar),
  #masthead :deep(.site-primary-header-wrap),
  #masthead :deep(.ast-builder-grid-row.ast-grid-center-col-layout) {
    display: flex !important;
    align-items: center;
    grid-template-columns: none !important;
  }

  #masthead :deep(.main-header-bar-navigation),
  #masthead :deep(.ast-builder-menu-1) {
    width: auto !important;
    margin: 0 !important;
  }

  #masthead :deep(.ast-container) {
    max-width: 100% !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }

  .header-shell {
    min-height: 48px;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 0;
    row-gap: 0;
  }

  .site-header-primary-section-center {
    width: calc(100% - 28px);
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    min-width: 0;
  }

  .site-branding {
    margin-right: 0;
    flex: 0 0 auto;
  }

  .site-header-primary-section-right {
    position: static;
    transform: none;
    width: auto;
    flex: 0 0 auto;
  }
}

@media (max-width: 480px) {
  #masthead :deep(.ast-container) {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  .header-shell {
    min-height: 44px;
  }

  .site-header-primary-section-center {
    width: calc(100% - 24px);
    gap: 6px;
  }
}

@media (max-width: 375px) {
  .header-shell {
    min-height: 42px;
  }

  .site-header-primary-section-center {
    width: calc(100% - 22px);
    gap: 4px;
  }
}

@media (max-width: 768px) {
  #ast-desktop-header,
  #masthead :deep(#ast-desktop-header),
  #masthead :deep(.ast-main-header-wrap),
  #masthead :deep(.ast-primary-header-bar),
  #masthead :deep(.site-primary-header-wrap) {
    display: none !important;
  }
}
</style>
