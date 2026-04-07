<script setup lang="ts">
import { siteConfig } from '../../data/site'
</script>

<template>
  <footer class="site-footer" id="colophon">
    <div class="site-above-footer-wrap ast-builder-grid-row-container">
      <div class="ast-builder-grid-row-container-inner">
        <div class="ast-builder-footer-grid-columns site-above-footer-inner-wrap ast-builder-grid-row footer-top-links">
          <p>
            <strong>
              <template v-for="(link, index) in siteConfig.footerLinks" :key="link.href">
                <a :href="link.href">{{ link.label }}</a>
                <span v-if="index < siteConfig.footerLinks.length - 1">&nbsp; | &nbsp;</span>
              </template>
            </strong>
          </p>
        </div>
      </div>
    </div>

    <div class="site-primary-footer-wrap ast-builder-grid-row-container">
      <div class="ast-builder-grid-row-container-inner">
        <div class="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row footer-main">
          <div class="footer-branding">
            <img src="/images/cum-logo-bbc3e284.png" alt="Cụm logo" class="footer-logo" />
            <p class="has-text-align-center">
              <strong>{{ siteConfig.companyName }}</strong><br />
              Địa chỉ: {{ siteConfig.companyAddress }}<br />
              Điện thoại: {{ siteConfig.companyPhone }}
            </p>
            <p>
              {{ siteConfig.servicePermit }}<br />
              {{ siteConfig.gameReleasePermit }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#colophon {
  margin-top: 0;
  background: #000;
}

.footer-top-links,
.footer-main {
  justify-content: center;
  text-align: center;
}

.footer-top-links p,
.footer-main p {
  color: #d7cda7;
  font-size: 10px;
  line-height: 1.75;
}

.footer-top-links {
  padding-top: 6px;
  padding-bottom: 6px;
}

.footer-top-links a {
  color: #d67c1a;
}

.footer-logo {
  max-width: 100%;
  height: auto;
  margin-bottom: 12px;
}

.footer-branding {
  max-width: 760px;
  margin: 0 auto;
}
</style>

