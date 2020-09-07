import Result from './components/Result.vue'
import Home from './pages/home.vue'

export const routes = [
{ path: '/', name:'home', component: Home , data: '' },
{ path: '/result', name:'result', component: Result, data: '' },
{ path: '*', component: Home }

];

