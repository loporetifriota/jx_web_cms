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
  padding: 30px 0;
  box-sizing: border-box;
  background: url('/images/BG-btn-2a0b8f88.png') center center / cover no-repeat;
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
    justify-content: space-between;
    gap: 3px;
    padding: 15px 10px;
  }

  .menu-item img {
    transform: scale(0.9);
  }

  .menu-item.large img {
    transform: scale(0.95);
  }
}

@media (max-width: 600px) {
  .menu-container {
    justify-content: space-between;
    padding: 7px 5px;
  }
}
</style>
