<script setup lang="ts">
defineProps<{
  mobile?: boolean
}>()
</script>

<template>
  <a :class="mobile ? 'mobile-logo-link' : 'custom-logo-link'" href="/" rel="home" aria-current="page">
    <img
      width="512"
      height="512"
      src="/images/Logo-App-New-VN-4e42c451.png"
      :class="mobile ? 'mobile-logo' : 'custom-logo'"
      alt="Vẹn Nguyên Ký Ức"
    />
  </a>
</template>

<style scoped>
.custom-logo-link,
.mobile-logo-link {
  display: inline-flex;
  align-items: center;
}

.custom-logo {
  width: 62px;
  height: auto;
}

.mobile-logo {
  width: 30px;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .custom-logo {
    width: 54px;
  }
}

@media (max-width: 768px) {
  .custom-logo {
    width: 34px;
  }
}

@media (max-width: 480px) {
  .custom-logo {
    width: 30px;
  }
}

@media (max-width: 375px) {
  .custom-logo {
    width: 28px;
  }
}
</style>
