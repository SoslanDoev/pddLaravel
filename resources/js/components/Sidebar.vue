<template>
  <ExampleGifs v-model:show="exampleGifsActive" :name="exampleImage"></ExampleGifs>
  <div id="sidebar" class="sidebar" :class="{'active': $store.state.menuVisible}">
    <div class="sidebar__logo">
      <div class="toggle" :class="{'active': $store.state.menuVisible == true}" @click.prevent="$store.commit('SET_MENU_ACTIVE')">
        <svg height="800px" viewBox="0 0 24 24" class="toggle-image" :class="{'toggle-image--active': $store.state.menuVisible == false}" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="Code"><g><polyline data-name="Right" fill="none" id="Right-2" points="15.5 7 20.5 12 15.5 17" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline data-name="Left" fill="none" id="Left-2" points="8.5 7 3.5 12 8.5 17" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></g></svg>
      </div>
    </div>
    <ul id="sidebar__list" class="sidebar__list">
      <li class="sidebar__item" v-for="item in specList" :key="item.id" :class="{'sidebar__menu--active': active == item.id}">
        <a href="#" @click.prevent="active = item.id, pagesMutations(item.pageId)" class="sidebar__link">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import {mapActions} from 'vuex'
  import ExampleGifs from '@/components/ExampleGifs.vue'
  export default {
    components: {ExampleGifs},
    name: "vSidebar",
    data() {
      return {
        active: null,
        specList: this.$store.state.spec.spec,
      }
    },
    methods: {
      // Измение функий Vuex
      ...mapMutations([
        'SET_PAGES_SPEC', // Изменеие названия страниц 

      ]),
      // Измение функий Vuex
      // Получение функции из VUEX
      ...mapActions([
        'GET_APPLICANTS_API',
        'SET_TEST'
      ]),      
      // Получение функции из VUEX
      pagesMutations(name) {
        /*
          Функция отправляет строку для изменения переменной во VUEX
          Входные параметры: 
            name - Строка 
          Выход: Ничего (Изменение переменной во VUEX)
        */
        this.SET_PAGES_SPEC(name)
      },
      abit(n) {
        console.log(n)
        /*
          Функция отправляет запрос на сервер для получения абитуриентов
          Входные параметры: 
            n - Натуральное число (Специальность)
          Выход: Ничего (Отправление запроса на сервер) 
        */
        this.GET_APPLICANTS_API(n)
        setTimeout(() => {
          this.active = null
        }, 200)
      },
      activeLink(item) {
        item.active = true
      },
      sortStart(element, name) {
        // this.$store.commit('UPDATE_USERS', element.func(this.$store.state.users, element.name))
        this.SET_TEST(element.func(this.$store.state.users, element.name))
        localStorage.setItem('methods', `${name}`)
        this.$store.commit('GET_LOCAL_STORAGE')
      }
    }
  }
</script>

<style lang="scss">
@import '../../sass/_variables.scss';
  .bg-black {
    .toggle {
      background-color: $dark-primary-color;
      transition: $transition-default;
      &-image polyline {
        stroke: $dark-background-color;
        transition: $transition-default;
      }
    }
    .sidebar  {
      background-color: $dark-secondary-color;
      box-shadow: 5px 0 25px rgba($dark-secondary-color, 0.5);
      color: $dark-primary-color;
      transition: $transition-default;
    }
  }
  .toggle {
    display: flex;
    justify-content: center;
    transition: $transition-default;
    position: relative;
    width: 100%;
    height: 30px;
    object-fit: cover;
    padding: 0 0 0 10px;
    background-color: $light-primary-color;

    z-index: 50;
    cursor: pointer;
    padding: 5px;
    &-image {
      width: 25px;
      height: 25px;
      object-fit: cover;
      transition: $transition-default;
    }
  }
  .sidebar  {
    position: fixed;
    width: $aside-width;
    height: 100%;
    background-color: $light-secondary-color;
    //border-left: 10px solid $light-secondary-color;
    box-shadow: 5px 0 25px rgba($light-text-color, 0.5);
    transition: $transition-default;
    overflow: hidden;
    color: $light-text-color;
    overflow-y: auto;
    &.active {
      width: 55px;
      & .sidebar__link {
        width: 200%;
        transition: $transition-default;
        cursor: pointer;
      }
    }
    &__list {
      position: relative;
      top: 0;
      left: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__item {
      color: $light-primary-color;
      position: relative;
      width: 100%;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      padding: 10px 0 10px 45px;
    }
    .bg-black &__item::before {
      background-color: $dark-primary-color;
    }
    &__item::before {
      content: "";
      content: "";
      position: absolute;
      top: 10px;
      left: 0;
      width: 35px;
      background-position: center center;
      height: 35px;
      border-radius: 50%;
      background-repeat: no-repeat;
      transition: all 200ms linear;
      background-color: $light-primary-color;
    }
    .bg-black &__menu--active::before {
      background-color: $dark-background-color;
      transition: $transition-default;
    } 
    &__menu--active::before {
      background-color: $light-background-color;
      transition: $transition-default;
    }
  }
  @media screen and (max-width: 850px) {
    .sidebar  {
      width: 100%;
      height: 100vh;
      inset: 0;
      z-index: 500;
    }
  }
</style>