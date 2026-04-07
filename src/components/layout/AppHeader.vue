<script setup lang="ts">
import { ref } from 'vue'
import { headerMenu } from '../../data/menu'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
    :class="{ 'mobile-menu-open': mobileMenuOpen }"
    id="masthead"
  >
    <div class="mobile-header" :class="{ open: mobileMenuOpen }">
      <a href="/" class="mobile-logo-link" rel="home" aria-current="page" @click="closeMobileMenu">
        <img src="/images/Logo-App-New-VN-4e42c451.png" class="mobile-logo" alt="Vẹn Nguyên Ký Ức" />
      </a>

      <div class="mobile-header-actions">
        <a class="mobile-search-link" role="button" tabindex="0" aria-label="Nút tìm kiếm" href="#">
          <span class="ast-icon icon-search icon-search">
            <span class="ahfb-svg-iconset ast-inline-flex svg-baseline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </span>
          </span>
        </a>

        <button class="mobile-menu-toggle" type="button" :aria-expanded="mobileMenuOpen ? 'true' : 'false'" aria-label="Mở menu" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <nav v-if="mobileMenuOpen" class="mobile-nav-panel" aria-label="Mobile navigation">
      <a v-for="item in headerMenu" :key="item.label" class="mobile-nav-link" :href="item.href" @click="closeMobileMenu">{{ item.label }}</a>
    </nav>

    <div id="ast-desktop-header" data-toggle-type="dropdown">
      <div class="ast-main-header-wrap main-header-bar-wrap">
        <div class="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item">
          <div class="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container">
            <div class="ast-builder-grid-row ast-builder-grid-row-has-sides ast-grid-center-col-layout header-shell">
              <div class="site-header-primary-section-center site-header-section ast-flex ast-grid-section-center">
                <div class="ast-builder-layout-element ast-flex site-header-focus-item" data-section="title_tagline">
                  <div class="site-branding ast-site-identity">
                    <span class="site-logo-img">
                      <a href="/" class="custom-logo-link" rel="home" aria-current="page">
                        <img
                          width="512"
                          height="512"
                          src="/images/Logo-App-New-VN-4e42c451.png"
                          class="custom-logo"
                          alt="Vẹn Nguyên Ký Ức"
                        />
                      </a>
                    </span>
                  </div>
                </div>

                <nav class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-layout-element site-header-focus-item">
                  <div class="ast-main-header-bar-alignment header-menu-wrap">
                    <ul class="main-header-menu custom-header-menu">
                      <li v-for="item in headerMenu" :key="item.label" class="menu-item">
                        <a class="menu-link" :href="item.href">{{ item.label }}</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div class="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                <div class="ast-builder-layout-element ast-flex site-header-focus-item ast-header-search">
                  <div class="ast-search-menu-icon slide-search">
                    <form role="search" method="get" class="search-form" action="https://vennguyenkyuc.vn/">
                      <label for="search-field">
                        <span class="screen-reader-text">Tìm kiếm:</span>
                        <input
                          id="search-field"
                          class="search-field"
                          autocomplete="off"
                          placeholder="Search..."
                          value=""
                          name="s"
                          type="search"
                        />
                      </label>
                    </form>
                    <div class="ast-search-icon">
                      <a class="slide-search astra-search-icon" role="button" tabindex="0" aria-label="Nút tìm kiếm" href="#">
                        <span class="screen-reader-text">Tìm kiếm</span>
                        <span class="ast-icon icon-search icon-search">
                          <span class="ahfb-svg-iconset ast-inline-flex svg-baseline">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
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

.mobile-header,
.mobile-nav-panel {
  display: none;
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

.custom-logo {
  width: 62px;
  height: auto;
}

.site-branding {
  margin-right: 14px;
}

.ast-builder-menu-1 {
  display: flex;
  justify-content: center;
}

.header-menu-wrap {
  display: flex;
  justify-content: center;
}

.custom-header-menu {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
}

.custom-header-menu .menu-link {
  color: #d5d6d8;
  font-family: 'Roboto Slab', serif;
  font-size: 9.5px;
  line-height: 1;
  letter-spacing: 0.3px;
  font-weight: 700;
  padding: 7px 7px;
}

.custom-header-menu .menu-link:hover {
  color: #f3c95b;
}

.ast-search-menu-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

.search-form {
  display: none;
}

.astra-search-icon {
  color: #d8dade;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.ast-search-icon .icon-search {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.ast-search-icon .icon-search svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
  display: block;
}

@media (max-width: 1024px) {
  .custom-logo {
    width: 54px;
  }

  .site-branding {
    margin-right: 10px;
  }

  .custom-header-menu .menu-link {
    font-size: 8.5px;
    padding: 6px 5px;
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

  .custom-logo {
    width: 34px;
  }

  .ast-builder-menu-1,
  .header-menu-wrap {
    width: auto;
    min-width: 0;
    flex: 1 1 auto;
  }

  .header-menu-wrap {
    overflow-x: auto;
    scrollbar-width: none;
  }

  .header-menu-wrap::-webkit-scrollbar {
    display: none;
  }

  .custom-header-menu {
    width: max-content;
    min-width: 100%;
    flex-wrap: nowrap;
    justify-content: flex-start;
    gap: 0;
  }

  .custom-header-menu .menu-link {
    font-size: 7px;
    padding: 4px 5px;
    letter-spacing: 0;
    white-space: nowrap;
  }

  .site-header-primary-section-right {
    position: static;
    transform: none;
    width: auto;
    flex: 0 0 auto;
  }

  .ast-search-menu-icon {
    gap: 0;
  }

  .ast-search-icon .icon-search svg {
    width: 15px;
    height: 15px;
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

  .ast-builder-menu-1 {
    display: none !important;
  }

  .custom-logo {
    width: 30px;
  }

  .ast-search-icon .icon-search svg {
    width: 14px;
    height: 14px;
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

  .custom-logo {
    width: 28px;
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

  .mobile-header {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .mobile-logo-link {
    display: inline-flex;
    align-items: center;
  }

  .mobile-logo {
    width: 30px;
    height: auto;
    display: block;
  }

  .mobile-header-actions {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }

  .mobile-search-link {
    color: #d8dade;
    line-height: 1;
    display: inline-flex;
  }

  .mobile-search-link svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }

  .mobile-menu-toggle {
    border: 0;
    background: transparent;
    padding: 0;
    width: 18px;
    display: inline-flex;
    flex-direction: column;
    gap: 3px;
    cursor: pointer;
  }

  .mobile-menu-toggle span {
    width: 18px;
    height: 2px;
    background: #d8dade;
    border-radius: 2px;
    display: block;
  }

  .mobile-nav-panel {
    display: flex;
    flex-direction: column;
    padding: 8px 12px 10px;
    background: rgba(15, 18, 23, 0.98);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .mobile-nav-link {
    color: #d5d6d8;
    font-family: 'Roboto Slab', serif;
    font-size: 12px;
    line-height: 1.3;
    font-weight: 700;
    padding: 8px 0;
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .mobile-nav-link:last-child {
    border-bottom: 0;
  }
}
</style>
