import {createSSRApp} from 'vue'
import {renderToString} from 'vue/server-renderer'
import {createRouter,createMemoryHistory} from 'vue-router'
import Home from '../src/components/HomePage.vue'
import Bio from '../src/components/LinkBioPage.vue'
import Booking from '../src/components/BookingModal.vue'
export async function render(component,props={}){const router=createRouter({history:createMemoryHistory(),routes:[{path:'/',component:Home},{path:'/links',component:Bio}]});const app=createSSRApp(component,props);app.use(router);app.provide('book',()=>{});await router.push('/');await router.isReady();const ctx={};const html=await renderToString(app,ctx);return html+Object.values(ctx.teleports||{}).join('')}
export {Home,Bio,Booking}
