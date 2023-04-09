<template>
  <div class="notfound">
    <span class="notfound__number">404</span>
    <h1 class="notfound__title">Страница не найдена</h1>
    <router-link to="/" class="notfound__link">На главную</router-link>
  </div>
</template>

<style lang="scss">
  @import '../../sass/_variables.scss';
  .bg-black .notfound {
    color: $dark-text-color;
  }
  .notfound {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: $light-secondary-color;
    &__number {
      font-size: 9.375rem;
      line-height: 6.25rem;
    }
    &__title {
      font-size: 3.125rem;
    }
    .bg-black {
      color: $dark-text-color;
    }
    .bg-black &__link {
      &:hover {
        color: $dark-secondary-color;
      }
    }
    &__link {
      font-size: 1.25rem;
      transition: $transition-default;
      &:hover {
        color: $light-text-color;
        transition: $transition-default;
      }
    }
  }
</style>
