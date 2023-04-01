export default {
  SET_PAGES_SPEC(state, payload) {
    /*
      Функция изменения названия страниц
      Входные параметры: 
        payload - Передаваемые параметры
      Выход: Ничего (Изменение названия)
    */
    state.pages = payload
  },
}