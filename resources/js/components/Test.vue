<template>
  <div class="test__main">
    <div class="test__inner">
      <div class="test__content">
      <vUserTable :table="$store.state.applicants.data"/>
      </div>
      <div class="test__info">
        <ul id="navigation__list" class="test__info-list navigation__list">
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import vUserTable from '@/components/UserTable.vue' // 
  import ExampleGifs from '@/components/ExampleGifs.vue'
  import vsort from '@/sort'
  import vnavigation from '@/class/Navigation'
  export default {
    components: {ExampleGifs, vUserTable},
    name: "vSidebar",
    data() {
      return {
        specList: this.$store.state.spec.spec,
        exampleGifsActive: false,
        exampleImage: '',
        navigationList: [
          new vnavigation.Navigation('Встроенный(T)', 'bubble2.gif',[ // Работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.sortBuiltIn),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.sortBuiltIn),
            new vnavigation.NavigationMenu('surname', 'Фамилия', vsort.sortBuiltIn),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.sortBuiltIn),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.sortBuiltIn),
          ]),
          new vnavigation.Navigation('Пузырек(T)', 'bubble2.gif', [ // Работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.bubbleSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.bubbleSort),
            new vnavigation.NavigationMenu('surname', 'Фамилия', vsort.bubbleSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.bubbleSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.bubbleSort),
          ]),
          new vnavigation.Navigation('Выбором(T)', 'bubble2.gif', [ // Работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.selectionSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.selectionSort),
            new vnavigation.NavigationMenu('surname', 'Фамилия', vsort.selectionSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.selectionSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.selectionSort),
          ]),
          new vnavigation.Navigation('Шейкерная(F)', 'bubble2.gif', [ // Не работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.cocktailSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.cocktailSort),
            new vnavigation.NavigationMenu('surname', 'Фамилия', vsort.cocktailSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.cocktailSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.cocktailSort),
          ]),
          new vnavigation.Navigation('Слиянием(F)', 'bubble2.gif', [ // Не работает
            new vnavigation.NavigationMenu('id', 'Id', vsort.mergeSort),
            new vnavigation.NavigationMenu('name', 'Имя', vsort.mergeSort),
            new vnavigation.NavigationMenu('surname', 'Фамилия', vsort.mergeSort),
            new vnavigation.NavigationMenu('patronymic', 'Отчество', vsort.mergeSort),
            new vnavigation.NavigationMenu('score', 'Баллы', vsort.mergeSort),
          ]),
        ],
      }
    },
    methods: {
      activeLink(item) {
        item.active = true
      },
      sortStart(element, name) {
        this.$store.commit('UPDATE_USERS', element.func(this.$store.state.applicants.data, element.name))
        localStorage.setItem('methods', `${name}`)
        this.$store.commit('GET_LOCAL_STORAGE')
      }
    }
  }
</script>

<style lang="scss">
  @import '../../sass/_variables.scss';
  .test {
    &__inner {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      position: relative;
      width: 100%;
      gap: 30px;
      height: 100%;
    }
    &__content {
      grid-column: span 3;
      background-color: $clr-main;
      padding: 10px;
      border-radius: 20px;
    }
    &__info {
      position: relative;
      height: 100%;
      background-color: $clr-main;
      padding: 10px;
      border-radius: 20px;
      &::before {
        content: "";
        position: absolute;
        width: 3px;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
      }
    }
    &__content, &__info { 
      max-height: 600px;
      overflow-y: auto;
    }
  }
  .fade {
    &-enter-active, &-leave-active {
      transition: $transition-default;
    }
    &-enter-from, &-leave-to {
      opacity: 0;
      transform: translateX(-25px);
    }
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
      position: absolute;
      top: 0;
      left: 0;
      width: 35px;
      background-position: center center;
      height: 35px;
      background-color: $clr-white;
      border-radius: 50%;
      background-repeat: no-repeat;
      transition: $transition-default;
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