<template lang="pug">
  .bonus
    .bonus__icon
      img(src="/img/bonus.svg", alt="")
    .bonus__count +{{count}}
</template>

<script>
export default {
  name: "Bonus",
  props: ['count'],
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
@import './src/scss/system/component.scss';

.bonus {
  @include flex-row;

  min-height: 24px;
  position: relative;
  margin-left: 1rem;

  &:after {
    @include pseudo;

    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: #36a1af;
  }

  &__icon {
    padding-left: 1rem;
    margin-right: 4px;
  }

  &__count {
    font-size: 13px;
    font-weight: bold;
  }
}
</style>