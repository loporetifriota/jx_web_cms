<script setup lang="ts">
import { ref } from 'vue'
import { headerMenu } from '../../data/menu'
import HeaderLogo from './HeaderLogo.vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="mobile-header" :class="{ open: mobileMenuOpen }">
    <div class="mobile-logo-wrap" @click="closeMobileMenu">
      <HeaderLogo mobile />
    </div>

    <div class="mobile-header-actions">
      <button class="mobile-search-link" type="button" aria-label="Nút tìm kiếm">
        <span class="ast-icon icon-search icon-search">
          <span class="ahfb-svg-iconset ast-inline-flex svg-baseline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </span>
        </span>
      </button>

      <button class="mobile-menu-toggle" type="button" :aria-expanded="mobileMenuOpen ? 'true' : 'false'" aria-label="Mở menu" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  <nav v-if="mobileMenuOpen" class="mobile-nav-panel" aria-label="Mobile navigation">
    <a
      v-for="item in headerMenu"
      :key="item.label"
      class="mobile-nav-link"
      :href="item.href"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener noreferrer' : undefined"
      @click="closeMobileMenu"
    >
      {{ item.label }}
    </a>
  </nav>
</template>

<style scoped>
.mobile-header,
.mobile-nav-panel {
  display: none;
}

@media (max-width: 768px) {
  .mobile-header {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .mobile-logo-wrap {
    display: inline-flex;
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
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
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
