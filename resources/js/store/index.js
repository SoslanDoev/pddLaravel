import axios from 'axios'
import { createStore } from 'vuex'
import spec from './spec/index' // Специальности
import applicants from './applicants/index' // Абитуриенты 
import page from './pages/index' // Страницы 

export default createStore({
  state: {
    users: [],
    menuVisible: false,
    paginationCount: 0,
    speedFunction: '0ms',
    complexityFunction_1: 'Пусто',
    complexityFunction_2: 'Пусто',
    complexityFunction_3: 'Пусто',
    activeMethods: 'Пусто'
  },
  getters: {
    MENU(state) {
      return state.menuVisible
    },
  },
  mutations: { // Синхронность
    GET_LOCAL_STORAGE(state) {
      state.complexityFunction_1 = localStorage.getItem('complexity_1')
      state.complexityFunction_2 = localStorage.getItem('complexity_2')
      state.complexityFunction_3 = localStorage.getItem('complexity_3')
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
    UPDATE_USERS(state, payload) {
      state.users = payload
    }
    // Пользователи 
  },
  modules: {
    spec, // Специальности
    applicants, // Абитуриенты
    page, // Страницы стилей  
  }
})
