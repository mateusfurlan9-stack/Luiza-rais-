<script setup>
import {ref,provide,defineAsyncComponent,watch,onMounted,onUnmounted} from 'vue'
import {useRoute} from 'vue-router'
import AccessibilityMenu from './components/AccessibilityMenu.vue'
import {siteConfig as c,whatsappUrl} from './config/siteConfig'
const BookingModal=defineAsyncComponent(()=>import('./components/BookingModal.vue'))
const route=useRoute(),booking=ref(false),selected=ref(''),bubble=ref(false);let timer
provide('book',(id='')=>{selected.value=id;booking.value=true})
function dismiss(){bubble.value=false;try{sessionStorage.setItem('lr-whatsapp-dismissed','1')}catch{}}
watch(()=>route.path,()=>{
 const title=route.path==='/links'?`${c.brand.name} | Links e agendamentos`:`${c.brand.name} | Manicure a domicílio`
 document.title=title
 document.querySelector('meta[name="description"]')?.setAttribute('content',c.seo.description)
 document.querySelector('meta[property="og:title"]')?.setAttribute('content',title)
 document.querySelector('meta[property="og:description"]')?.setAttribute('content',c.seo.description)
 const canonical=document.querySelector('link[rel="canonical"]')
 if(canonical){const origin=new URL(canonical.href).origin;canonical.href=origin+route.path;document.querySelector('meta[property="og:url"]')?.setAttribute('content',origin+route.path)}
 booking.value=false
},{immediate:true})

onMounted(()=>{for(const [key,value] of Object.entries(c.theme))document.documentElement.style.setProperty(`--color-${key}`,value);timer=setTimeout(()=>{try{if(sessionStorage.getItem('lr-whatsapp-dismissed'))return}catch{}bubble.value=true},15000)})
onUnmounted(()=>clearTimeout(timer))
</script>
<template><a class="skip-link" href="#main-content">Pular para o conteúdo</a><RouterView/><AccessibilityMenu/><div class="whatsapp-widget"><aside v-if="bubble" class="whatsapp-bubble" aria-label="Convite para contato"><button class="close" aria-label="Fechar convite" @click="dismiss">×</button><p>Seu momento de cuidado, sem sair de casa. Vamos combinar?</p><a :href="whatsappUrl()" target="_blank" rel="noopener">Conversar com Luiza ↗</a></aside><a v-if="c.contact.instagram" class="instagram-floating" :href="c.contact.instagram" target="_blank" rel="noopener" aria-label="Abrir Instagram da Luiza Rais Nails (nova aba)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a><a class="whatsapp-button" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Conversar pelo WhatsApp (nova aba)"><i class="mdi mdi-whatsapp" aria-hidden="true"></i></a></div><BookingModal v-if="booking" :initial="selected" @close="booking=false"/></template>
