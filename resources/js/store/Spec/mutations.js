export default {
  SET_SERVER_SPEC(state, payload) {
    /*
      Функция добавления в массив специльности
      Входные параметры:
        payload - Данные с сервера
      Выход: Ничего (Добавление данных в массив)
    */
    payload.forEach((e) => {state.spec.push(e)})
  }, // Добавление специальностей
}