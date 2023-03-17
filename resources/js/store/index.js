import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    menuVisible: false,
    paginationCount: 0,
    speedFunction: '0ms',
    complexityFunction: 'Пусто',
    activeMethods: 'Пусто'
  },
  getters: {
    MENU(state) {
      return state.menuVisible
    },
  },
  mutations: {
    GET_LOCAL_STORAGE(state) {
      state.complexityFunction = localStorage.getItem('complexity')
      state.speedFunction = localStorage.getItem('speed')
      state.activeMethods = localStorage.getItem('methods') 
    },
    SET_MENU_ACTIVE(state) {
      state.menuVisible = !state.menuVisible
    },
    SET_PAGINATION_COUNT(state, payload) {
      state.paginationCount = payload
    },
    UPDATE_ACTIVE_METHODS(state, payload) {
      state.activeMethods = payload
    },
    // Пользователи 
    SET_USERS(state, payload) {
      state.users.push(payload)
    },
    DELETE_USERS(state) {
      state.users = []
    },
    UPDATE_USERS(state, payload) {
      state.users = payload
    }
    // Пользователи 
  },
  modules: {
  }
})
