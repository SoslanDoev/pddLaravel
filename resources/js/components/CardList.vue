<template>
  <div class="cards">
    <div class="card">
      <div class="card__inner">
        <!-- <img src="@/assets/images/user.svg" class="card__image" alt=""> -->
        <!-- <svg class="card__svg-main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
          <g fill="none" class="card__svg" stroke="#f8f8f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
          </g>
        </svg> -->
        <svg height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user"><g><path d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" fill="none" stroke="#000000" class="gradient-animate" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="12" cy="7" fill="none" r="4" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></g></svg>
        <div class="card__content">
          <p class="card__number">Всего: </p>
          <p class="card__title">{{ $store.state.paginationCount }}</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__inner">
        <svg height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="Clock"><g><polyline fill="none" points="11.9 5.9 11.9 11.9 12 12 14.1 14.1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="12" cy="12" data-name="Circle" fill="none" id="Circle-2" r="10" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></g></svg>
        <p class="card__number">Время:</p>
        <p class="card__title">{{ $store.state.speedFunction }}</p>
      </div>
    </div>
    <div class="card">
      <div class="card__inner">
        <!-- <img src="@/assets/images/versions.svg" class="card__image" alt=""> -->
        <svg class="card__svg-main" height="32" viewBox="0 0 21 21" width="32" xmlns="http://www.w3.org/2000/svg"><g class="card__svg" fill="none" fill-rule="evenodd" stroke="#f8f8f2" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"><path d="m.5 8.5 8 4 8.017-4"/><path d="m.5 12.5 8 4 8.017-4"/><path d="m.5 4.657 8.008 3.843 8.009-3.843-8.009-4.157z"/></g></svg>
        <p class="card__number">Сложность:</p>
        <p class="card__title">{{ $store.state.complexityFunction }}</p>
      </div>
    </div>
    <div class="card">
      <div class="card__inner">
        <!-- <img src="@/assets/images/search.svg" class="card__image" alt=""> -->
        <svg height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="search"><g><circle cx="10.1" cy="10.1" fill="none" r="8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21.9" x2="16.3" y1="21.9" y2="16.3"/></g></g></g></svg>
        <p class="card__number">Метод:</p>
        <p class="card__title">{{ $store.state.activeMethods }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardList',
    mounted() {
      this.$store.commit('GET_LOCAL_STORAGE')
    }
  }
</script>

<style lang="scss">
  @import '../../sass/_variables.scss';
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    position: relative;
    width: 100%;
    gap: 30px;
    margin: 0 0 20px;
    //margin: 0 0 30px 0;
  }
  .bg-black .card {
    background-color: $dark-secondary-color;
    transition: $transition-default;
    box-shadow: $dark-shadow-default;
    color: $dark-text-color;
  }
  .card {
    position: relative;
    border-radius: 20px;
    padding: 30px;
    background-color: $light-primary-color;
    box-shadow: $light-shadow-default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    transition: $transition-default;
    color: $light-secondary-color;
    &__image {
      width: 35px;
      height: 35px;
      transition: $transition-default;
      object-fit: cover;
      margin-bottom: 5px;
    }
    &:hover &__number {
      transition: $transition-default;
    }
    .bg-black &__number {
      color: $dark-text-color;
      transition: $transition-default;
    }
    &__number {
      margin: 0 0 10px;
      color: $light-secondary-color;
      transition: $transition-default;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 1080px) {
    .card {
      &__number {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 750px) {
    .cards {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }
    .card {
      //padding: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .cards {
      grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    }
  }
</style>