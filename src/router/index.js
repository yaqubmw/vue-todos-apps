import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodosView from '@/views/TodosView.vue'
import TodoDetailView from '@/views/TodoDetailView.vue'
import EditTodoView from '@/views/EditTodoView.vue'
import AddTodoView from '@/views/AddTodoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosView,
  },
  {
    path: '/todos/:id',
    name: 'TodoDetail',
    component: TodoDetailView,
  },
  {
    path: '/todos/:id/edit',
    name: 'TodoEdit',
    component: EditTodoView,
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: AddTodoView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
