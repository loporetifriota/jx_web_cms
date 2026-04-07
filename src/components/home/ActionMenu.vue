<script setup lang="ts">
import { actionMenu } from '../../data/menu'
</script>

<template>
  <div class="menu-container">
    <a v-for="item in actionMenu" :key="item.image" :href="item.href" :class="item.className">
      <img :src="item.image" :alt="item.alt" />
    </a>
  </div>
</template>

<style scoped>
.menu-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  margin-top: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 0;
  background: url('/images/BG-btn.png') center center / cover no-repeat;
}

.menu-item {
  flex-grow: 0;
  min-width: 0;
  text-align: center;
  transition: transform 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.menu-item img {
  display: block;
  width: auto;
  max-width: none;
  max-height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  transform: scale(1);
}

.menu-item.red {
  margin-top: -12px;
}

.menu-item:hover img {
  transform: scale(1.03);
}

@media (max-width: 1024px) {
  .menu-container {
    justify-content: center;
    gap: 2px;
    padding: 0 8px 8px;
  }

  .menu-item img {
    transform: scale(0.9);
  }

  .menu-item.large img {
    transform: scale(0.94);
  }
}

@media (max-width: 768px) {
  .menu-container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 0 8px 6px;
  }

  .menu-item {
    flex: 1 1 calc(25% - 8px);
    min-width: 88px;
  }

  .menu-item.large {
    flex-basis: calc(50% - 8px);
    min-width: 150px;
  }

  .menu-item img {
    width: 100%;
    max-width: 100%;
    max-height: none;
    transform: scale(1);
    object-fit: contain;
  }

  .menu-item.red {
    margin-top: 0;
  }
}

@media (max-width: 480px) {
  .menu-container {
    justify-content: center;
    gap: 1px;
    row-gap: 1px;
    padding: 0 1px 4px;
  }

  .menu-item.large {
    flex: 0 0 calc(50% - 1px);
    min-width: 0;
    height: 76px;
  }

  .menu-item:not(.large) {
    flex: 0 0 calc(20% - 1px);
    min-width: 0;
    height: 88px;
  }

  .menu-item.large img,
  .menu-item:not(.large) img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
  }
}

@media (max-width: 375px) {
  .menu-container {
    gap: 1px;
    row-gap: 1px;
    padding: 3px 1px;
  }

  .menu-item.large {
    flex-basis: calc(50% - 1px);
    height: 68px;
  }

  .menu-item:not(.large) {
    flex-basis: calc(20% - 1px);
    height: 78px;
  }
}
</style>
