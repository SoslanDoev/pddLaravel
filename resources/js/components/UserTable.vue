<template>
  <div class="table__create-box">
    <a href="#" class="table__create" @click.prevent="createTable()">
      <!-- <img src="@/assets/images/plus.svg" class="table__create-image" alt="image"> -->
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
      Добавить пользователя (100)
    </a>
    <a href="#" class="table__create" @click.prevent="createTable(500)">
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
      Добавить пользователя (500) 
    </a>
    <a href="#" class="table__create" @click.prevent="createTable(500)">
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-add"><g><path class="table__create-image-path" d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" class="table__create-image-path" fill="none" r="4" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" class="table__create-image-path" stroke="#44475a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17" x2="23" y1="11" y2="11"/><line fill="none" stroke="#44475a" stroke-linecap="round" class="table__create-image-path" stroke-linejoin="round" stroke-width="2" x1="20" x2="20" y1="8" y2="14"/></g></g></g></svg>
      Добавить пользователя (1000) 
    </a>
    <a href="#" class="table__create" @click.prevent="deleteTable()">
      <svg height="800px" viewBox="0 0 24 24" class="table__create-image" width="800px" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="user-x"><g><path d="M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="9" cy="7" fill="none" r="4" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17.9" x2="22.1" y1="13.1" y2="8.9"/><line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17.9" x2="22.1" y1="8.9" y2="13.1"/></g></g></g></svg>
      Удалить таблицу
    </a>
  </div>
  <Transition name="fade" mode="out-in">
    <div class="table__null" v-if="table.length <= 0">
      <h1 class="table__title">Таблица пуста</h1>
    </div>
    <div class="table__items" v-else> 
      <div class="table">
        <div class="table__pages">
          <p class="table__pages-text">Страница: {{ page }}</p>
          <div class="pagination__table">
            <a href="#" class="pagination__btn" v-if="page!=1" @click.prevent="page--">prev</a>
            <a href="#" class="pagination__btn" v-if="page < ($store.state.users.length / 10)" @click.prevent="page++">next</a>
          </div>
          <p class="table__pages-text">{{ table[0].speciality }}</p>
        </div>
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
            <TransitionGroup name="fade__group">
              <!-- <tr class="table__tr" v-for="item in pagination" :key="item.id"> -->
              <tr class="table__tr" v-for="item in table" :key="item.id">
                <td class="table__td">{{ item.id }}</td>
                <td class="table__td">{{ item.name}} {{ item.surname }} {{ item.patronymic }}</td>
                <td class="table__td">
                  <p v-for="elem in item.results">{{ elem.subject }} : {{ elem.grade }}</p>
                </td>
                <td class="table__td">{{item.results[0].grade + item.results[1].grade + item.results[2].grade}}</td>
              </tr>
            </TransitionGroup>
          </tbody>
        </table>
      </div>
      <!-- <div class="table__images">
        <img src="@/assets/images/bubble2.gif" class="table__image" alt="Сортировка пузырьком">
      </div> -->
    <!-- <div class="pagination">
      <div class="pagination__inner">
        <button class="pagination__btn" v-if="page!=1" @click.prevent="page--">prev</button>
        <button class="pagination__btn" v-if="page < ($store.state.users.length / 10)" @click.prevent="page++">next</button>
      </div>
    </div> -->
  </div>
</Transition>
</template>

<script>
  export default {
    name: 'UserTable',
    props: {
      table: {
        type: Array, 
        default: {}
      }
    },
    data() {
      return {
        applicants: this.$store.state.applicants,
        countUser: 1,
        page: 1,
        pageTo: 1,
        pageFrom: 1,
        limit: 10,
        total: 0,
        pages: [],
        list: []
      }
    },
    mounted() {
      let
        list = this.list,
        limit = this.limit,
        totalPages = Math.ceil(list.length / limit)
      for (let i = 1; i < totalPages; i++) {
        this.pages.push(i)
      }
    },
    methods: {
      deleteTable() {
        /*
          Функция удаляет таблицу
          Входные параметры: нет
          Выход: нет
        */
        this.$store.commit('DELETE_USERS')
        this.countUser = 1
      },
      createTable(n = 100) {
        /*
          Функция создает пользователей
          Входные параметры: n - кол-во пользователей
          Возвращает: список
        */
        let male = [
          "Аввакум","Аваз","Агап","Агафон","Август","Августин","Аггей","Авраам","Абрам","Аарон","Автандил","Авдей","Авдей","Азарий","Арам","Аркадий","Арий","Аристарх","Арно","Арон","Арнольд","Арсен, Арсений","Архип","Артур","Артем","Артемий","Акакий","Алан","Ален","Аким","Альберт","Альфред","Александр","Алексей","Амвросий","Анатолий","Амадей","Амадеус","Амаяк","Анисим","Апполинарий","Антон","Ануфрий","Ануфрий","Андрей","Аскольд","Афанасий","Ахмет","Адам","Адриан","Адольф","Ашот", "Бронислав","Богдан","Борис","Борислав","Болеслав","Бонифаций","Бернар","Бенедикт","Варлаам","Варфоломей","Вальтер","Валерий","Валентин","Василий","Вадим","Вацлав","Владимир","Владислав","Владлен","Виктор","Вильгельм","Вилен","Викентий","Виссарион","Виталий","Витольд","Володар","Вольдемар","Всеволод","Велизар","Вениамин","Венедикт","Вячеслав","Гавриил","Гастон","Градимир","Григорий","Глеб","Горислав","Гордон","Гордей","Густав","Гевор","Геральд","Герасим","Герман","Георгий","Генрих","Геннадий","Давид","Дамир","Даниил","Динасий","Дорофей","Дмитрий","Дональд","Донат","Денис","Демид","Демьян","Джордан","Евграф","Евгений","Егор","Евстафий","Евсей","Евдоким","Ермолай","Ерофей","Еремей","Елизар","Елисей","Емельян","Ефрем","Ефим","Ефимий","Жан","Жорж","Ждан","Захар","Захария","Зигмунд","Зиновий","Зосима","Иван","Ибрагим","Игнат","Игнатий","Игорь","Израиль","Измаил","Изяслав","Ираклий","Иржи","Иларион","Илларион","Илиан","Ион","Ипполит","Иннокентий","Ионос","Ионас","Иосиф","Исаак","Исаакий","Исидор","Иероним","Казимир","Карл","Карен","Клавдий","Кирилл","Клим","Климент","Ким","Клод","Клемент","Корнилий","Корней","Конрад","Конкордий","Константин","Кондрат","Ксаннф","Кузьма","Лаврентий","Лазарь","Лука","Лукьян","Лев","Леван","Леон","Леонард","Леонид","Леопольд","Леонтий","Любомир","Люсьен","Людвиг","Марат","Марк","Мариан","Мартин","Мартын","Май","Макар","Максим","Максимилиан","Мануил","Матвей","Мадлен","Мирон","Мирослав","Милан","Мисаил","Михаил","Митрофан","Мичлов","Моисей","Модест","Мстислав","Мурат","Муслим","Мефодий","Мечислав","Мечеслав","Назар","Назарий","Натан","Наум","Никанор","Никита","Никифор","Николай","Никон","Нисон","Нифонт","Норман","Нестор","Овидий","Олан","Олег","Онисим","Оскар","Осип","Павел","Парамон","Панкрат","Памфил","Прокофий","Прохор","Платон","Пимен","Порфирий","Петр","Равиль","Раймонд","Рафаил","Рафик","Ратмир","Радий","Радий","Радомир","Рашид","Ринат","Рихард","Рифат","Ричард","Роберт","Ролан","Роман","Ростислав","Родион","Рубен","Руслан","Рустам","Рудольф","Рем","Ренольд","Савва","Савел","Савелий","Самсон","Самуил","Святослав","Спартак","Сократ","Соломон","Стакрат","Станимир","Станислав","Стивен","Стоян","Степан","Севастьян","Северин","Серафим","Сергей","Семен","Тарас","Талик","Таис","Тамаз","Трифон","Трофим","Тигран","Тимон","Тимофей","Тимур","Тит","Тихон","Терентий","Тельман","Теодор","Ульманас","Устин","Франц","Фридрих","Филипп","Филимон","Флорентий","Фидель","Фома","Фердинанд","Феликс","Феодосий","Федор","Федот","Харитон","Христиан","Христос","Христофор","Эраст","Эрик","Эрнест","Эльдар","Эмиль","Эммануил","Эдвард","Эдмунд","Эдуард","Юрий","Юлиан","Юлий","Юхим","Яромир","Ярослав","Яким","Яков","Ян","Януарий","Ясон"
        ]
        for (let i = 0; i < n; i++) {
          let randNamePos = Math.floor(Math.random() * male.length)
          let randName = male[randNamePos]
          let randFatherPos = Math.floor(Math.random() * male.length)
          let randFather = male[randFatherPos]
          let fatherRoot = randFather.slice(0, randFather.length-2);
          switch (randFather) {
            case "ий": randFather = fatherRoot+"ьев"; break;
            case "ов": randFather = fatherRoot+"ов"; break;
            case "ль": randFather = fatherRoot+"льев"; break;
            case "ма": randFather = fatherRoot+"мов"; break;
            case "ей": randFather = fatherRoot+"еев"; break;
            case "ва": randFather = fatherRoot+"вов"; break;
            case "ья": randFather = fatherRoot+"ь"; break;
            case "ай": randFather = fatherRoot+"ев"; break;
            case "ел": randFather = fatherRoot+"ельев"; break;		
            default: randFather +="ов"; break;
          }
          let score = Math.floor(Math.random() * 200)
          // this.list.push({id: this.countUser++, name: randName, patronymic: randFather, score: score})
          this.$store.commit('SET_USERS', {id: this.countUser++, name: randName, patronymic: randFather, score: score})
        }
        this.pagination
      },
      paginationCalc(array) {
        let 
          page = this.page,
          limit = this.limit,
          from = (page * limit) - limit,
          to = (page * limit)
        this.pageTo = to
        return array.slice(from, to) 
      }
    },
    computed: {
      pagination() {
        this.$store.commit('SET_PAGINATION_COUNT', this.$store.state.users.length)
        return this.paginationCalc(this.$store.state.users)
        // return this.paginationCalc(this.list)
      }
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
  .table {
    box-shadow: $shadow-default;
    border-radius: 10px;
    overflow-y: hidden;
    overflow-x: auto;
    margin: 0 0 20px;
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
     //  background: linear-gradient(rgba($clr-main, 0.7), rgba($clr-main2, 0.8));
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
      background-color: $clr-main;
      border-bottom: 2px solid $clr-white; 
      transition: $transition-default;
    }
    &__pages {
      padding: 10px;
      border-bottom: 2px solid transparent; 
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $clr-white;
      transition: $transition-default;
    }
    &__create-image {
      transition: $transition-default;
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
    .bg-black .table__create-image-path{
      stroke: $clr-white;
      transition: $transition-default;
    }
    &__inner {
      color: $clr-main;
      overflow: hidden;
      width: 100%;
    }
    .bg-black &__th{
      border-top: 4px solid transparent;
      border-left: 2px solid $clr-white;
      border-bottom: 2px solid $clr-white;
      background: $clr-main;
      color: $clr-white;
      transition: $transition-default;
    }
    &__th {
      padding: 10px;
      transition: $transition-default;
      border-top: 4px solid $clr-main;
      border-left: 2px solid $clr-main;
      border-bottom: 2px solid $clr-main;
      background: $clr-white;
      text-align: center;
      color: $clr-main;
      &:first-child {
        border-left: none;
      }
    }
    &__tr {
      padding-left: 20px;
      &:last-child .table__td{
        border-bottom: 0;
      }
      &:hover .table__td {
        background-color: $clr-grey;
        transition: $transition-default;
        color: $clr-main;
      }
    }
    .bg-black &__tr {
      &:hover .table__td {
        background-color: $clr-main2;
        transition: $transition-default;
        color: $clr-white;
      }
    }
    .bg-black &__td {
      border-top: 2px solid $clr-white;
      border-bottom: 2px solid $clr-white;
      border-left: 2px solid $clr-white;
      background-color: $clr-main;
      color: $clr-white;
      transition: $transition-default;
      &:hover {
        background-color: $clr-main;
        transition: $transition-default;
        color: $clr-white;
      }
    }
    &__td {
      text-align: center;
      padding: 15px 35px;
      border-top: 2px solid $clr-main;
      border-bottom: 2px solid $clr-main;
      border-left: 2px solid $clr-main;
      background-color: $clr-white;
      color: $clr-main;
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
      background-color: $clr-white;
      color: $clr-main;
    }
    .bg-black &__btn {
      background-color: $clr-white;
      color: $clr-main;
      &:hover {
        background-color: $clr-main;
        color: $clr-white;
      }
    }
    &__btn {
      display: block;
      min-width: 50px;
      padding: 10px;
      border-radius: 4px;
      border: none;
      background-color: $clr-main;
      color: $clr-white;
      transition: $transition-default;
      cursor: pointer;
      &:hover {
        background-color: $clr-main2;
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