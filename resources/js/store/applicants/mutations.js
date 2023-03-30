export default {
  SET_SERVER_APPLICANTS(state, payload) {
    /*
      Функция добавляет в массив студентов
      Входные параметры: 
        payload - Данные с сервера 
      Выход: Ничего (Добавление данных в массив)
    */
   payload.forEach((e) => {state.data.push(e)})
  },
}