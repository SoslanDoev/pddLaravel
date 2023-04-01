export default {
  SET_SERVER_APPLICANTS(state, payload) {
    /*
      Функция добавляет в массив студентов
      Входные параметры: 
        payload - Данные с сервера 
      Выход: Ничего (Добавление данных в массив)
    */
    payload.forEach((e) => {
      state.data.push(e)
    })
    console.log(state.data.length)
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
   state.data = []
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