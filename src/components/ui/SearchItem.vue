<template lang="pug">
  button.search-item(
    @click.prevent
  )
    .search-item__text {{ text }}
    .search-item__remove
      <svg class="svg-sprite-icon icon-close"><use xlink:href="img/svg/sprite.svg#close"></use></svg>
</template>

<script>
export default {
  name: "SearchItem",
  props: ['text'],
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import './src/scss/system/component.scss';

.search-item {
  @include flex-row;

  padding: 8px 9px;
  background: $primary-color-light;
  border-radius: $borderRadius / 2;

  .icon-close {
    fill: $primary-color;
  }

  &:hover {
    .icon-close {
      fill: red;
    }
  }

  &__text {
    margin-right: 12px;
    font-weight: 500;
    font-size: 14px;
    color: $primary-color;
  }

  &__remove {
    @include flex-center;

    width: 8px;
    height: 8px;
  }
}
</style>