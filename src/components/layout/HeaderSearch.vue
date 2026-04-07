<template>
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
        <button class="slide-search astra-search-icon" type="button" aria-label="Nút tìm kiếm">
          <span class="screen-reader-text">Tìm kiếm</span>
          <span class="ast-icon icon-search icon-search">
            <span class="ahfb-svg-iconset ast-inline-flex svg-baseline">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
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

@media (max-width: 768px) {
  .ast-search-menu-icon {
    gap: 0;
  }

  .ast-search-icon .icon-search svg {
    width: 15px;
    height: 15px;
  }
}

@media (max-width: 480px) {
  .ast-search-icon .icon-search svg {
    width: 14px;
    height: 14px;
  }
}
</style>
