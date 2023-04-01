export default {
  SET_PAGES_SPEC(state, payload) {
    /*
      Функция изменения названия страниц
      Входные параметры: 
        payload - Передаваемые параметры
      Выход: Ничего (Изменение названия)
    */
    state.pages = payload
    this.commit('DEL_DATA_APPLICANTS') // Сброс массива абитуринтов до default
    this.commit('DEL_PAGE_APPLICANTS') // Сброс страницы абитуриентов до default 
  },
}