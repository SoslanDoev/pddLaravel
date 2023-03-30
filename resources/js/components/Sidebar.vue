<template>
  <ExampleGifs v-model:show="exampleGifsActive" :name="exampleImage"></ExampleGifs>
  <div id="navigation" class="navigation" :class="{'active': $store.state.menuVisible}">
    <div class="navigation__logo">
      <div class="toggle" :class="{'active': $store.state.menuVisible == true}" @click.prevent="$store.commit('SET_MENU_ACTIVE')">
        <svg height="800px" viewBox="0 0 24 24" class="toggle-image" :class="{'toggle-image--active': $store.state.menuVisible == false}" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="Code"><g><polyline data-name="Right" fill="none" id="Right-2" points="15.5 7 20.5 12 15.5 17" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><polyline data-name="Left" fill="none" id="Left-2" points="8.5 7 3.5 12 8.5 17" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></g></svg>
      </div>
    </div>

    <ul id="navigation__list" class="navigation__list">
      <li class="navigation__item" v-for="item in specList" :key="item.id" :class="{'navigation__menu--active': active == item.id}">
        <a href="#" @click.prevent="active = item.id, abit(item.id)" class="navigation__link">{{ item.name }}</a>
      </li>
    </ul>

    <!-- <ul id="navigation__list" class="navigation__list">
      <li class="navigation__item" v-for="item in navigationList" :key="item.id" :class="{'navigation__menu--active': item.active == true}">
        <a href="#" @click.prevent="item.active = !item.active" class="navigation__link">{{ item.name }}</a>
        <Transition name="fade" mode="out-in">
          <ul class="navigation__item-list" v-if="item.menu && item.active == true">
            <li class="navigation__item-item" v-for="element in item.menu" :key="element.id" @click.prevent="sortStart(element, item.name)">
              {{ element.title }}
            </li>
            <li class="navigation__item-item" @click.prevent="exampleGifsActive = !exampleGifsActive, exampleImage = item.image">
              Посмотреть
            </li>
          </ul>
        </Transition>
      </li>
    </ul> -->
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import ExampleGifs from '@/components/ExampleGifs.vue'
  import vsort from '@/sort'
  import vnavigation from '@/class/Navigation'
  export default {
    components: {ExampleGifs},
    name: "vSidebar",
    data() {
      return {
        active: null,
        specList: this.$store.state.spec.spec,
        exampleGifsActive: false,
        exampleImage: '',
        navigationList: [
          new vnavigation.Navigation('Встроенный(T)', 'bubble2.gif',[ // Работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.sortBuiltIn),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.sortBuiltIn),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.sortBuiltIn),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.sortBuiltIn),
          ]),
          new vnavigation.Navigation('Пузырек(T)', 'bubble2.gif', [ // Работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.bubbleSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.bubbleSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.bubbleSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.bubbleSort),
          ]),
          new vnavigation.Navigation('Выбором(T)', 'bubble2.gif', [ // Работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.selectionSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.selectionSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.selectionSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.selectionSort),
          ]),
          // Алгоритм сортировки Хоара (Быстрая сортировка)
          
          // Алгоритм сортировки Шэлла 
          // Алгоритм сортировки подсчетом 
          // Алгоритм сортировки гнома 
          // Алгоритм пирамидальной сортировки 
          // Алгоритм быстрой сортировки 
          // Алгоритм сортировки перемешиванием
          // Алгоритм блочной сортировки 
          // Алгоритм плавной сортировки
          // Алгоритм интроспективной сортировки 
          // Алгоритм придурковатая сортировка 
          // Алгоритм гравитационной сортировки 
          // Алгоритм поразрядной сортировки 
          new vnavigation.Navigation('Шейкерная(F)', 'bubble2.gif', [ // Не работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.cocktailSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.cocktailSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.cocktailSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.cocktailSort),
          ]),
          new vnavigation.Navigation('Слиянием(F)', 'bubble2.gif', [ // Не работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.mergeSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.mergeSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.mergeSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.mergeSort),
          ]),
        ]
      }
    },
    methods: {
      // Получение функции из VUEX
      ...mapActions([
        'GET_APPLICANTS_API'
      ]),      
      // Получение функции из VUEX
      abit(n) {
        console.log(n)
        /*
          Функция отправляет запрос на сервер для получения абитуриентов
          Входные параметры: 
            n - Натуральное число (Специальность)
          Выход: Ничего (Отправление запроса на сервер) 
        */
        this.GET_APPLICANTS_API(n)
      },
      activeLink(item) {
        item.active = true
      },
      sortStart(element, name) {
        this.$store.commit('UPDATE_USERS', element.func(this.$store.state.users, element.name))
        localStorage.setItem('methods', `${name}`)
        this.$store.commit('GET_LOCAL_STORAGE')
      }
    }
  }
</script>

<style lang="scss">
@import '../../sass/_variables.scss';
.fade-enter-active,
.fade-leave-active {
  transition: $transition-default;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-25px);
}
.bg-black .toggle {
  background-color: $clr-main2;
  transition: $transition-default;
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
  z-index: 50;
  cursor: pointer;
  background-color: $clr-white;
  padding: 5px;
  &-image {
    width: 25px;
    height: 25px;
    object-fit: cover;
    transition: $transition-default;
    .bg-black & polyline{
      stroke: $clr-white;
      transition: $transition-default;
    }
  }
}
  .bg-black .navigation {
    background-color: $clr-main;
    box-shadow: 5px 0 25px rgba($clr-main, 0.5);
    color: $clr-white;
    transition: $transition-default;
  }
  .navigation {
    position: fixed;
    width: $aside-width;
    height: 100%;
    background-color: $clr-grey;
    //border-left: 10px solid $clr-main;
    box-shadow: 5px 0 25px rgba($clr-grey, 0.5);
    transition: $transition-default;
    overflow: hidden;
    color: $clr-main;
    overflow-y: auto;
    &.active {
      width: 55px;
      & .navigation__link {
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
      color: $clr-white;
      position: relative;
      width: 100%;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      padding: 10px 0 10px 45px;
    }
    .bg-black &__item::before {
      background-color: $clr-main2;
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
      background-color: $clr-white;
    }
    .bg-black &__menu--active::before {
      background-color: $clr-white;
      transition: $transition-default;
    } 
    &__menu--active::before {
      background-color: $clr-main;
      transition: $transition-default;
    }
    &__item-list {
      display: flex;
      margin: 20px 0 0 -5px;
      flex-direction: column;
      gap: 10px;
    }
    &__item-item {
      //padding: 0 0 0 15px;
      padding: 5px;
      transition: $transition-default;
      cursor: pointer;
      &:hover {
        background-color: $clr-white;
        transition: $transition-default;
        color: $clr-main;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
      }
    }
    &__link {
      transition: $transition-default;
      position: relative;
    }
    &__logo {
      margin: 0 0 40px;
      display: block;
      white-space: nowrap;
    }
    &__link {
      position: relative;
      display: flex;
      align-items: center;
      gap: 30px;
      width: 100%;
    }
    //&__item:hover &__link::after,
    //&__item:hover &__link::before,
    //&__item.hovered &__link::after,
    //&__item.hovered &__link::before {
    //  content: "";
    //  position: absolute;
    //  right: 0;
    //  width: 50px;
    //  height: 50px;
    //  background-color: transparen;
    //  border-radius: 50%;
    //  pointer-events: none;
    //}
    //&__item:hover &__link::before,
    //&__item.hovered &__link::before {
    //  box-shadow: 35px 35px 0 10px $clr-white;
    //  top: -50px;  
    //}
    //&__item:hover &__link::after,
    //&__item.hovered &__link::after {
    //  box-shadow: 35px -35px 0 10px $clr-white;
    //  bottom: -50px;
    //}
  }
  @media screen and (max-width: 850px) {
    .navigation {
      width: 100%;
      height: 100vh;
      inset: 0;
      z-index: 500;
    }
  }
</style>