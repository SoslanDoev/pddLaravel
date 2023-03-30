import axios from 'axios'

export default {
  GET_APPLICANTS_API({commit}, payload) {
    /*
      Функция получения студентов с сервера
      Входные параметры: 
        payload - Натуральное число
      Выход: Ничего (Добавление в массив)
    */
    return axios(`http://127.0.0.1:8000/api/applicants/${payload}`, {
      method: 'GET',
    })
      .then((res) => {
        commit('SET_SERVER_APPLICANTS', res.data.data)
      })
      .catch((error) => {
        console.error('error')
      })
  },
}