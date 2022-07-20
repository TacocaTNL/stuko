import {createRouter, createWebHistory} from 'vue-router'
import Lyrics from '../views/Lyrics'
import AddSong from '../views/AddSong'
import Home from '../views/Home'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/lyrics/:songId',
        name: 'Lyrics',
        component: Lyrics
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