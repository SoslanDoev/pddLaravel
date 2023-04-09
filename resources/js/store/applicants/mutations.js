import vnavigation from '@/class/Navigation'

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
  SET_DISCIPLINE_APPLICANTS(state, payload) {
    /*
      Функция добавляет в массив предметов
      Входные параметры: 
        payload - Данные с сервера 
      Выход: Ничего (Добавление данных в массив) МЕТОД
    */
    // console.log('da,', payload)
    let res = []
    payload.forEach((e) => {
      res.push({id: e.id, subject: e.subject})
    })
    vnavigation.NavigationMenu.prototype.results = res
    // console.log(vnavigation.NavigationMenu)
    // console.log(new vnavigation.NavigationMenu().results)
    // vnavigation.NavigationMenu.prototype.results = false;
      // let mas = [
        // payload[0].results[0].subject,
        // payload[0].results[1].subject,
        // payload[0].results[2].subject,
      // ]
      // state.discipline = mas
      // console.log('payload - payload', state.discipline)
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