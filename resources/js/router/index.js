import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path: '/', component: import(`../views/HomeView.vue`), name: 'Home', meta: {
    title: 'Главная',
    guard: 'all', // Защита (guest - для гостей; all - для всех; auth - для авторизированных)
  }},
  {path: '/:has(.*)*', component: import(`../views/NotFoundView.vue`), name: 'NotFound', meta: {
    guard: 'all', // Защита (guest - для гостей; all - для всех; auth - для авторизированных)
    title: 'Страница не найдена', // Название страницы
  }},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const DEFAULT_TITLE = 'Страница';
router.beforeEach((to) => {
  // to - на какую страницу идем
  document.title = to.meta.title || DEFAULT_TITLE
})

export default router
