<script setup lang="ts">
import { headerMenu } from '../../data/menu'
</script>

<template>
  <nav class="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-layout-element site-header-focus-item">
    <div class="ast-main-header-bar-alignment header-menu-wrap">
      <ul class="main-header-menu custom-header-menu">
        <li v-for="item in headerMenu" :key="item.label" class="menu-item">
          <a
            class="menu-link"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
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

@media (max-width: 1024px) {
  .custom-header-menu .menu-link {
    font-size: 8.5px;
    padding: 6px 5px;
  }
}

@media (max-width: 768px) {
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
}

@media (max-width: 480px) {
  .ast-builder-menu-1 {
    display: none !important;
  }
}
</style>
