export default {
  SET_TEST(state, payload) {
    /*
      Функция изменяет массив 
      Входные параметры: 
        payload - Массив
      Выход: Ничего (Изменение state)
    */
   state.data = payload
  },
  SET_SERVER_APPLICANTS(state, payload) {
    /*
      Функция добавляет в массив студентов
      Входные параметры: 
        payload - Данные с сервера 
      Выход: Ничего (Добавление данных в массив)
    */
    payload.forEach((e) => {
      let res = 0
      e.results.forEach((n) => { res += n.grade })
      state.data.push({data: e, score: res})
    })
    console.log(state.data)
  },
  SET_PAGE_APPLICANTS(state) {
    /*
      Функция изменяет страницы абитуриентов
      Входные параметры: 
        Ничего
      Выход: Ничего (Изменение переменной page)
    */
   state.page += 1
  },
  DEL_DATA_APPLICANTS(state) {
    /*
      Функция сбрасывает массив абитуринтов до []
      Входные параметры: 
        Ничего
      Выход: Ничего (Сброс массив абитуринтов)
    */
   state.data = [] // Сброс массива абитуриентов
   state.page = 1 // Сброс страниц
  },
  DEL_PAGE_APPLICANTS(state) {
    /*
      Функция сбрасывает до 1 страницы абитуриентов 
      Входные параметры: 
        Ничего 
      Выход: Ничего (Сброс переменной page)
    */
    state.page = 1
  }
}