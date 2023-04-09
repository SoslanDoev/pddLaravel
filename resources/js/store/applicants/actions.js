import axios from 'axios'

export default {
  GET_APPLICANTS_API({state, commit}, payload) {
    /*
      Функция получения студентов с сервера
      Входные параметры: 
        payload - объект с
          количеством вывода,
          код специальности, 
          страница пагинации
      Выход: Ничего (Добавление в массив)
    */
   let
      count = payload.count,
      specID = payload.specID,
      page = state.page
    axios(`http://127.0.0.1:8000/api/applicants/${specID}count=${count}?page=${page}`, {
      method: 'GET',
    })
      .then((res) => {
        console.log(res)
        commit('SET_SERVER_APPLICANTS', res.data.data)
        commit('SET_DISCIPLINE_APPLICANTS', res.data.data[0].results)
        commit('SET_PAGE_APPLICANTS')
      })
      .catch((error) => {
        console.error(error)
      })
    // http://127.0.0.1:8000/api/applicants/2count=500
    // for (let i = 0; i < count; i++) {
      // axios(`http://127.0.0.1:8000/api/applicants/${specID}?page=${page}`, {
        // method: 'GET',
      // })
        // .then((res) => {
          // commit('SET_SERVER_APPLICANTS', res.data.data)
        // })
        // .catch((error) => {
          // console.error('error')
        // })
      // page++
      // console.log(page)
    // }

    // return axios(`http://127.0.0.1:8000/api/applicants/${payload}`, {
      // method: 'GET',
    // })
      // .then((res) => {
        // commit('SET_SERVER_APPLICANTS', res.data.data)
      // })
      // .catch((error) => {
        // console.error('error')
      // })
  },
}