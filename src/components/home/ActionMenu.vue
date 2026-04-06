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
