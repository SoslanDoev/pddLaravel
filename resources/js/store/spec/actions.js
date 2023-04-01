import axios from 'axios'

export default {
  GET_SPEC_API({state, commit}) {
    /*
      Функция получения специальностей с сервера
    */
    if (state.spec.length > 0) {
      return
    }
    return axios('http://127.0.0.1:8000/api/specialties/', {
      method: 'GET'
    })
      .then((res) => {
        // console.log(res)
        commit('SET_SERVER_SPEC', res.data.data)
      })
      .catch((error) => {
        console.error('error')
      })
  }, // Получение специальностей с сервера 
}