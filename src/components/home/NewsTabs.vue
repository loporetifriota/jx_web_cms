<script setup lang="ts">
import { computed, ref } from 'vue'
import { tabPosts, tabs } from '../../data/posts'
import PostList from '../shared/PostList.vue'

const activeTab = ref<(typeof tabs)[number]>(tabs[0])
const activeIndex = computed(() => tabs.indexOf(activeTab.value))
const currentPosts = computed(() => tabPosts[activeTab.value])
</script>

<template>
  <div class="elementor-element elementor-element-2c397e6 custom-post-list e-n-tabs-mobile elementor-widget elementor-widget-n-tabs">
    <div class="elementor-widget-container tab-shell">
      <div class="e-n-tabs e-activated" data-touch-mode="false">
        <div class="e-n-tabs-heading" role="tablist" aria-label="Danh mục bài viết">
          <button
            v-for="(tab, index) in tabs"
            :id="`news-tab-${index}`"
            :key="tab"
            class="e-n-tab-title"
            :aria-selected="activeTab === tab"
            :aria-controls="`news-panel-${index}`"
            role="tab"
            type="button"
            @click="activeTab = tab"
          >
            <span class="e-n-tab-title-text">{{ tab }}</span>
          </button>
        </div>

        <div
          :id="`news-panel-${activeIndex}`"
          class="e-n-tabs-content"
          role="tabpanel"
          :aria-labelledby="`news-tab-${activeIndex}`"
        >
          <div class="e-active elementor-element elementor-element-4c98dcf e-con-full e-flex e-con e-child">
            <div class="elementor-element elementor-element-e02d930 e-con-full e-flex e-con e-child">
              <div class="elementor-element elementor-element-f7e9bab elementor-grid-1 elementor-widget elementor-widget-posts">
                <div class="elementor-widget-container">
                  <PostList :posts="currentPosts" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-shell {
  min-height: 330px;
}

.e-n-tabs-heading {
  justify-content: center;
}

.e-n-tab-title {
  min-width: 102px;
  padding: 10px 14px;
}

.e-n-tab-title-text {
  font-size: 11px;
  letter-spacing: 0.4px;
  line-height: 1;
}

</style>
