import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './styles/icons.css'
import './styles/global.css'
import App from './App.vue'
const router=createRouter({history:createWebHistory(),routes:[{path:'/',component:()=>import('./components/HomePage.vue')},{path:'/links',alias:['/bio','/linkbio'],component:()=>import('./components/LinkBioPage.vue')},{path:'/:pathMatch(.*)*',component:()=>import('./components/NotFound.vue')}],scrollBehavior(to){return to.hash?{el:to.hash,top:100}:{top:0}}})
if(/^#\/(links|bio|linkbio)/.test(location.hash))history.replaceState(null,'','/links')
createApp(App).use(router).mount('#app')
