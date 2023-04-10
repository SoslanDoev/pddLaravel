export default {
  SET_PAGES_SPEC(state, payload) {
    /*
      Функция изменения названия страниц
      Входные параметры: 
        payload - Текстовое значение 
      Выход: Ничего (Изменение названия)
    */
    state.pagesSpec = payload
    this.commit('DEL_DATA_APPLICANTS') // Сброс массива абитуринтов до default
    this.commit('DEL_PAGE_APPLICANTS') // Сброс страницы абитуриентов до default 
  },
  SET_PAGES_APPLICANTS_PAYLOAD(state, payload) {
    /*
      Функция увеличивает страницу на переданное значение
    */
   state.pagesApplicants = payload
  },
  SET_PAGES_APPLICANTS_NEXT(state) {
    /*
      Функция увеличивает название страниц на 1 
    */
   state.pagesApplicants++
  },
  SET_PAGES_APPLICANTS_PREV(state) {
    /*
      Функция уменьшает название страниц на 1 
    */
   state.pagesApplicants--
  },
  SET_PAGES_APPLICANTS_DEFAULT(state) {
    /*
      Функция сбрасывает страницы 
    */
   state.pagesApplicants = 1
  },
}