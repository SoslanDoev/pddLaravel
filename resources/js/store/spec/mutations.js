export default {
  SET_SERVER_SPEC(state, payload) {
    /*
      Функция добавления в массив специльности
      Входные параметры:
        payload - Данные с сервера
      Выход: Ничего (Добавление данных в массив)
    */
   let item = 0
    payload.forEach((e) => {
      state.spec.push({id: e.id, name: e.name, pageId: item})
      item++
    })
  }, // Добавление специальностей
}