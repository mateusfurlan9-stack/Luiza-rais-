<script setup>
import {computed,ref} from 'vue'
import ModalShell from './ModalShell.vue'
import {catalog,money,bookingMessage,whatsappUrl} from '../config/siteConfig'
const props=defineProps({initial:String});const emit=defineEmits(['close'])
const selected=ref(props.initial?[props.initial]:[])
const items=computed(()=>catalog.filter(s=>selected.value.includes(s.id))),total=computed(()=>items.value.reduce((a,s)=>a+s.price,0)),link=computed(()=>whatsappUrl(bookingMessage(items.value)))
</script>
<template><ModalShell label="Escolher serviços e agendar pelo WhatsApp" @close="emit('close')"><p class="eyebrow">Selecione seus serviços</p><h2>Seu próximo<br>momento de cuidado.</h2><p>Escolha os serviços. Combinamos os detalhes diretamente no WhatsApp.</p><fieldset><legend>O que você deseja agendar?</legend><div class="booking-services"><label v-for="s in catalog" :key="s.id"><input v-model="selected" type="checkbox" :value="s.id"><span>{{s.name}}<small>{{s.category}}<template v-if="['tips','molde'].includes(s.id)"> · {{s.description}}</template></small></span><b>{{money(s.price)}}</b></label></div></fieldset><div class="booking-total" aria-live="polite"><span>{{items.length}} serviço(s) • Subtotal</span><strong>{{money(total)}}</strong></div><a v-if="items.length" class="button full" :href="link" target="_blank" rel="noopener"><i class="mdi mdi-whatsapp" aria-hidden="true"></i> Agendar pelo WhatsApp ↗</a><button v-else class="button full" disabled>Selecione um serviço</button><p class="small">A solicitação não confirma um horário. Endereço, disponibilidade e eventual deslocamento são combinados na conversa.</p></ModalShell></template>
