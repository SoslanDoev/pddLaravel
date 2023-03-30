<template>
  <div class="topbar">
    <div class="search">
      <input type="text" class="search__input" placeholder="Поиск...">
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
  .topbar {
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin: 0 0 10px;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .topbar__theme {
    margin: 0 0 0 50px;
    border-radius: 4px;
    // background-color: $clr-white;
    padding: 5px;
    & rect {
      transition: $transition-default;
      fill: $clr-main;
    }
    & path {
      transition: $transition-default;
      fill: $clr-white;
    }
    .bg-black & rect {
      transition: $transition-default;
      fill: $clr-white;
    }
    .bg-black & path {
      fill: $clr-main;
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
    background-color: $clr-main;
    color: $clr-white;
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
    box-shadow: $shadow-default;
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