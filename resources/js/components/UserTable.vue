<template>
  <div class="table__create-box" v-if="role == 'admin'">
    <p class="table__create-text">Добавить: </p>
    <a href="#" class="table__create" @click.prevent="createTable(5)">
      <!-- <img src="@/assets/images/plus.svg" class="table__create-image" alt="image"> -->
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
     (5)
    </a>
    <a href="#" class="table__create" @click.prevent="createTable()">
      <!-- <img src="@/assets/images/plus.svg" class="table__create-image" alt="image"> -->
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
     (100)
    </a>
    <a href="#" class="table__create" @click.prevent="createTable(500)">
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
      (500) 
    </a>
    <a href="#" class="table__create" @click.prevent="createTable(500)">
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
      (1000) 
    </a>
    <a href="#" class="table__create" @click.prevent="createTable(0)">
      <!-- <img src="@/assets/images/plus.svg" class="table__create-image" alt="image"> -->
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
     (Все)
    </a>
    <a href="#" class="table__create" @click.prevent="deleteTable()">
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-x"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" fill="none" r="4" stroke="#000000" class="table__create-image-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line class="table__create-image-path" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17.9" x2="22.1" y1="13.1" y2="8.9"/><line class="table__create-image-path" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17.9" x2="22.1" y1="8.9" y2="13.1"/></g></g></g></svg>
      Удалить
    </a>
  </div>
  <Transition name="fade" mode="out-in">
    <div class="table__null" v-if="table.length <= 0">
      <h1 class="table__title">Загрузка . . .</h1>
    </div>
    <div class="table__items" v-else> 
      <div class="table">
        <div class="table__pages">
          <!-- <div class="table__pages-count__box" v-if="$store.state.applicants.data.length && total"> -->
            <!-- <p class="table__pages-text">Страница: {{ $store.state.page.pagesApplicants }}</p> -->
            <!-- <p class="table__pages-text">Из: {{ total }}</p> -->
            <!-- <p class="table__pages-text">Всего: {{ $store.state.applicants.data.length }}</p> -->

          <!-- </div> -->
          <!-- <div class="pagination__table"> -->
            <!-- <a href="#" class="pagination__btn" v-if="page!=1" @click.prevent="page--">prev</a> -->
            <!-- <a href="#" class="pagination__btn" v-if="page < ($store.state.users.length / 10)" @click.prevent="page++">next</a> -->
          <!-- </div> -->
          <p class="table__pages-text">{{ $store.state.spec.spec[$store.state.page.pagesSpec].name }}</p>
        </div>
        <input type="text" class="table__input" v-model="searchTable" placeholder="Введите абитуриента">
        <table class="table__inner" cellspacing='0'>
          <thead class="table__thead">
            <tr class="table__tr">
              <th class="table__th">Id</th>
              <th class="table__th">Абитуриент</th>
              <th class="table__th">Предметы</th>
              <th class="table__th">Общие баллы</th>
            </tr>
          </thead>
          <tbody>
            <!-- <TransitionGroup name="fade__group"> -->
              <!-- <tr class="table__tr" v-for="item in pagination" :key="item.id"> -->
              <tr class="table__tr" v-for="item in pagination" :key="item.id" v-if="filteredList.length">
                <td class="table__td">{{ item.data.id }}</td>
                <td class="table__td">{{ item.data.name}} {{ item.data.surname }} {{ item.data.patronymic }}</td>
                <td class="table__td">
                  <p v-for="elem in item.data.results">{{ elem.subject }} : {{ elem.grade }}</p>
                </td>
                <td class="table__td">{{item.data.results[0].grade + item.data.results[1].grade + item.data.results[2].grade}}</td>
              </tr>
              <tr class="table__tr" v-else>
                <td class="table__td">Пусто</td>
                <td class="table__td">Пусто</td>
                <td class="table__td">Пусто</td>
                <td class="table__td">Пусто</td>
              </tr>
              <!-- <div class="table__tr-error" v-else>Ничего не найдено</div> -->
            <!-- </TransitionGroup> -->
          </tbody>
        </table>
      </div>
      <!-- <div class="table__images">
        <img src="@/assets/images/bubble2.gif" class="table__image" alt="Сортировка пузырьком">
      </div> -->
    <div class="pagination">
      <div class="pagination__inner">
        <!-- {{ pagination }} -->
        <!-- {{ pagination.length }} -->
        <button class="pagination__btn" v-if="
          $store.state.page.pagesApplicants != 1 && 
          $store.state.page.pagesApplicants != 1" @click.prevent="pagePrev">prev</button>
        <button class="pagination__btn" v-if="
          $store.state.page.pagesApplicants < ($store.state.applicants.data.length / limit) &&
          $store.state.page.pagesApplicants < (filteredList.length / limit)" @click.prevent="pageNext">next</button>
      </div>
    </div>
  </div>
</Transition>
</template>

<script>
  import PaginationLoad from '@/components/PaginationLoad.vue'
  import { mapMutations } from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    components: [PaginationLoad],
    name: 'UserTable',
    props: {
      table: {
        type: Array, 
        default: {}
      }
    },
    data() {
      return {
        role: 'guest',
        searchTable: '',
        limit: 10, // Предел страниц
        total: 0, // Кол-во страниц
        pages: [], // Массив страниц
      }
    },
    watch: {
      searchTable() {
        /*
          Метод запускается при изменении кнопки поиска
        */
        this.SET_PAGES_APPLICANTS_DEFAULT()
      }
    },
    methods: {
      // Получение функции из VUEX
      ...mapMutations([
        'DEL_DATA_APPLICANTS',    
        'SET_PAGES_APPLICANTS_NEXT',
        'SET_PAGES_APPLICANTS_PREV',
        'SET_PAGES_APPLICANTS_DEFAULT', // Сброс страниц
        'SET_PAGES_APPLICANTS_PAYLOAD', // Переключение страницы на определенную
      ]),
      // Получение функции из VUEX
      // Получение функции из VUEX
      ...mapActions([
        'GET_APPLICANTS_API'
      ]),
      // Получение функции из VUEX
      pageNext() {
        this.SET_PAGES_APPLICANTS_NEXT()
      },
      pagePrev() {
        this.SET_PAGES_APPLICANTS_PREV()
      },
      startPagination() {
        /*
          Функция считает кол-во страниц 
          Входные параметры: 
            Ничего
          Выход: Ничего (Изменение переменной)
        */
        let 
          list = this.$store.state.applicants.data // Массив абитуриентов 
        this.total = Math.ceil(list.length / this.limit)
        for (let i = 0; i < this.total; i++) {
          this.pages.push(i)
        }
        console.log(this.pages)
      },
      deleteTable() {
        /*
          Функция удаляет таблицу
          Входные параметры: нет
          Выход: нет
        */
        this.DEL_DATA_APPLICANTS()
        this.countUser = 1
        this.page = 1
      },
      createTable(n = 100, specID = this.$store.state.spec.spec[this.$store.state.page.pages].id) {
        /*
          Функция отправляет кол-во людей которых надо добавить в VUEX
          Входные параметры:
            n - Кол-во людей
            specID - Код специальности
          Возвращает: Ничего
        */
        this.GET_APPLICANTS_API({count: n, specID: specID, page: this.page}) 
        this.startPagination()
      },
      paginationCalc(array) {
        /*
          Функция вычисляет пагинацию и выводит массив от from до to 
          Входные параметры
            array - Массив для пагинации
          Выход: Массив с элементами от from до to 
        */
        let 
          limit = this.limit,
          from = (this.$store.state.page.pagesApplicants * limit) - limit,
          to = (this.$store.state.page.pagesApplicants * limit)
        return array.slice(from, to) 
      }
    },
    computed: {
      filteredList() {
        /*
          Функция фильтрует таблицу
          Входные параметры: 
            Ничего
          Выход: Отфильтрованный массив 
        */
        return this.$store.state.applicants.data.filter((item) =>
          Object.values(item.data).some((value) =>
            typeof value === "string" && value.toLowerCase().includes(this.searchTable.toLowerCase()) || 
            typeof value === "number" && value.toString().includes(this.searchTable.toLowerCase())
          )
        )
      },
      pagination() {
        /*
          Функция вычисляет пагинацию
          Входные параметры: 
            Ничего 
          Выход: Пагинация
        */
        return this.paginationCalc(this.filteredList)
        // return this.paginationCalc(this.$store.state.applicants.data)
      },
    },
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
    opacity: .2;
    transform: none;
  }
  .fade__group-leave-active {
    display: none;
  }
  .table__create-image-path {
    stroke: $light-text-color;
    transition: $transition-default;
  }
  .bg-black {
    .table {
      box-shadow: $dark-shadow-default;
    }
  }
  .bg-black .table {
    &__input {
      background-color: $dark-secondary-color;
      color: $dark-text-color;
    }
  }
  .table {
    box-shadow: $light-shadow-default;
    border-radius: 10px;
    overflow-y: hidden;
    overflow-x: auto;
    margin: 0 0 20px;
    &__input {
      background-color: $light-primary-color;
      transition: $transition-default;
      width: 100%;
      height: 40px;
      font-size: 0.875rem;
      padding: 5px;
      outline: none;
      border: none;
    }
    &__null {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    &__create {
      display: inline-flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      transform: translateY(0);
      transition: $transition-default;
      &:hover {
        transform: translateY(2px);
        transition: $transition-default;
      }
    }
    &__pages {
      color: $light-secondary-color;
      transition: $transition-default;
    }
    &__images {
      margin: 30px 0;
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: 10px;
      overflow: hidden;
     //&::after {
     //  content: "";
     //  position: absolute;
     //  inset: 0;
     //  width: 100%;
     //  height: 100%;
     //  background: linear-gradient(rgba($light-secondary-color, 0.7), rgba($light-secondary-color, 0.8));
     //}
      box-shadow: 0 7px 25px rgba(68, 71, 90, 0.8);
    }
    &__image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;
      object-fit: cover;
    }
    .bg-black &__create-box{
      color: $dark-text-color;
      transition: $transition-default;
    }
    &__create-box {
      padding: 0 0 10px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      // justify-content: left;
      justify-content: left;
      gap: 15px;
      margin: 20px 0;
    }
    .bg-black &__pages {
      background-color: $dark-secondary-color;
      border-bottom: 2px solid $dark-primary-color; 
      transition: $transition-default;
    }
    &__pages {
      padding: 10px;
      border-bottom: 2px solid transparent; 
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $light-primary-color;
      //transition: $transition-default;
      border-bottom: 2px solid $light-secondary-color; 
      //transition: $transition-default;
    }
    &__create-image {
      transition: $transition-default;
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
    .bg-black .table__create-image-path{
      stroke: $dark-primary-color;
      transition: $transition-default;
    }
    &__inner {
      color: $light-secondary-color;
      overflow: hidden;
      width: 100%;
    }
    .bg-black &__th{
      border-top: 4px solid $dark-primary-color;
      border-left: 2px solid $dark-primary-color;
      border-bottom: 2px solid $dark-primary-color;
      background: $dark-secondary-color;
      color: $dark-text-color;
      transition: $transition-default;
    }
    .bg-black &__pages {
      color: $dark-text-color;
      transition: $transition-default;
    }
    .bg-black &__tr {
      color: $dark-text-color;
      transition: $transition-default;
    }
    &__th {
      padding: 10px;
      transition: $transition-default;
      border-top: 4px solid $light-secondary-color;
      border-left: 2px solid $light-secondary-color;
      border-bottom: 2px solid $light-secondary-color;
      background: $light-primary-color;
      text-align: center;
      color: $light-secondary-color;
      &:first-child {
        border-left: none;
      }
    }
    .bg-black {
      &__tr:hover {
        background-color: $dark-background-color;
        transition: $transition-default;
        color: $dark-secondary-color;
      }
    }
    &__tr {
      padding-left: 20px;
      &:hover .table__td {
        background-color: $light-background-color;
        transition: $transition-default;
        color: $light-secondary-color;
      }
    }
    .bg-black &__tr {
      &:hover .table__td {
        background-color: $dark-background-color;
        transition: $transition-default;
        color: $dark-text-color;
      }
    }
    .bg-black &__td {
      border-top: 2px solid $dark-primary-color;
      border-bottom: 2px solid $dark-primary-color;
      border-left: 2px solid $dark-primary-color;
      background-color: $dark-secondary-color;
      color: $dark-text-color;
      transition: $transition-default;
      &:hover {
        background-color: $dark-secondary-color;
        transition: $transition-default;
        color: $dark-primary-color;
      }
    }
    &__td {
      text-align: center;
      padding: 15px 35px;
      border-top: 2px solid $light-secondary-color;
      border-bottom: 2px solid $light-secondary-color;
      border-left: 2px solid $light-secondary-color;
      background-color: $light-primary-color;
      color: $light-secondary-color;
      transition: $transition-default;
      &:first-child {
        padding-left: 20px;
        border-left: 0;
      }
    }
  }
  .pagination { 
    &__table {
      display: flex;
      gap: 30px;
    }
    &__inner {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: right;
      gap: 30px;
      margin: 5px 0;
    }
    .bg-black &__btn:hover{
      transition: $transition-default;
      background-color: $dark-primary-color;
      color: $dark-secondary-color;
    }
    .bg-black &__btn {
      background-color: $dark-text-color;
      color: $dark-secondary-color;
      transition: $transition-default;
      &:hover {
        background-color: $dark-background-color;
        color: $dark-text-color;
        transition: $transition-default;
      }
    }
    &__btn {
      display: block;
      min-width: 50px;
      padding: 10px;
      border-radius: 4px;
      border: none;
      background-color: $light-text-color;
      color: $light-secondary-color;
      transition: $transition-default;
      cursor: pointer;
      &:hover {
        background-color: $light-background-color;
        color: $light-text-color;
        transition: $transition-default;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .table {
      &__th {
        padding: 5px;
      }
      &__td {
        padding: 10px 15px;
      }
    }
  }
</style>