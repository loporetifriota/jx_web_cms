<script setup lang="ts">
import { headerMenu } from '../../data/menu'
</script>

<template>
  <header
    class="site-header header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-hide-custom-menu-mobile ast-builder-menu-toggle-icon ast-mobile-header-inline"
    id="masthead"
  >
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

.header-shell {
  min-height: 34px;
  align-items: center;
  display: flex !important;
  justify-content: center;
  position: relative;
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

@media (max-width: 921px) {
  .custom-header-menu {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
