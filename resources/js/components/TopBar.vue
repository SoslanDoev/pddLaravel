<template>
  <div class="topbar">
    <div class="topbar__inner">
      <!-- <input type="text" class="search__input" placeholder="Поиск..."> -->
      <h3 class="topbar__title">Учет абитуриентов</h3>
      <a href="#" class="topbar__theme" @click.prevent="moonTheme">
        <!-- <img src="@/assets/images/moon.svg" class="topbar__theme-image" alt="moon"> -->
        <svg height="800px" class="topbar__theme-image" viewBox="0 0 24 24" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="browsers"><g><rect fill="none" height="14" rx="2" ry="2" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="14" x="3" y="7"/><path d="M8,3H19a2,2,0,0,1,2,2V16" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></g></svg>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
    methods: {
      moonTheme() {
        /*
          Функция меняет тему
          Входные параметры: Ничего 
          Выход: Ничего (Изменение глобальной переменной)
        */
        document.body.classList.toggle('bg-black')
        if (document.body.classList.contains('bg-black')) {
          localStorage.setItem('bg', true)
        } else {
          localStorage.setItem('bg', false)
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  @import '../../sass/_variables.scss';
  .bg-black .topbar {
    color: $dark-text-color;
    transition: $transition-default;
  }
  .topbar {
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin: 0 0 10px;
    transition: $transition-default;
    color: $light-secondary-color;
    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    &__title {
      margin: 0 auto;
    }
  }
  .topbar__theme {
    margin: 0 0 0 50px;
    border-radius: 4px;
    // background-color: $primary-color;
    padding: 5px;
    & rect {
      transition: $transition-default;
      fill: $light-primary-color;
    }
    & path {
      transition: $transition-default;
      fill: $light-primary-color;
    }
    .bg-black & rect {
      transition: $transition-default;
      fill: $dark-primary-color;
    }
    .bg-black & path {
      fill: $dark-secondary-color;
      transition: $transition-default;
    }
    &-image {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
  }
  .search__label {
    position: relative;
    width: 100%;
  }
  .bg-black .search__input {
    transition: $transition-default;
    background-color: $dark-secondary-color;
    color: $dark-primary-color;
  }
  .bg-black .search__input {
    box-shadow: $dark-shadow-default;
  }
  .search__input {
    transition: $transition-default;
    width: 100%;
    height: 40px;
    font-size: 1.125rem;
    border-radius: 20px;
    padding: 5px 20px;
    outline: none;
    border: none;
    box-shadow: $light-shadow-default;
  }
  .toggle {
    position: relative;
    width: 30px;
    z-index: 50;
    height: 30px;
    cursor: pointer;
    &.active &-image{
      transform: scale(-1, -1);
      transition: $transition-default;
    }
    &-image {
      transition: $transition-default;
    }
  }
</style>