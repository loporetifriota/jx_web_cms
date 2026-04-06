<script setup lang="ts">
import type { PostItem } from '../../data/posts'

defineProps<{
  posts: PostItem[]
}>()
</script>

<template>
  <div class="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid" role="list">
    <article
      v-for="post in posts"
      :key="post.href"
      class="elementor-post elementor-grid-item post type-post status-publish format-standard hentry"
      role="listitem"
    >
      <div class="elementor-post__text">
        <h3 class="elementor-post__title">
          <a :href="post.href">{{ post.title }}</a>
        </h3>
        <div class="elementor-post__meta-data">
          <span class="elementor-post-date">{{ post.date }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.elementor-post {
  padding: 6px 10px;
}

.elementor-post__title {
  margin: 0;
  line-height: 1.25;
}

.elementor-post__title a {
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.1px;
}

.elementor-post-date {
  font-size: 14px;
  color: #f2c044;
  font-weight: 700;
}

@media (max-width: 767px) {
  .elementor-post__title a {
    font-size: 14px;
  }

  .elementor-post-date {
    font-size: 14px;
  }
}
</style>
