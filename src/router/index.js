import {createRouter, createWebHistory} from 'vue-router'
import About from '../views/About'
import AddSong from '../views/AddSong'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/addsong',
        name: 'AddSong',
        component: AddSong
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router