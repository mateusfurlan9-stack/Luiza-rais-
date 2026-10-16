<script setup>
import {inject} from 'vue'
import {combos,money,comboSaving,siteConfig as c} from '../config/siteConfig'
const book=inject('book')
</script>
<template><section id="combos" class="section wrap"><div class="section-heading"><div><p class="eyebrow">03 / Cuidado que continua</p><h2>Seu ritual do mês.</h2></div><p>{{c.comboTerms}}</p></div><div class="combo-grid"><article v-for="(s,i) in combos" :key="s.id" :class="['combo-card',{featured:i===2}]"><span class="eyebrow">Pacote {{String(i+1).padStart(2,'0')}} <span v-if="i===2">✧</span></span><h3>{{s.name.split(' — ')[1]}}</h3><strong class="combo-value">{{money(s.price)}}</strong><p v-if="comboSaving(s)>0">Economize {{money(comboSaving(s))}} em relação aos serviços avulsos.</p><p v-else>Seu cuidado organizado em um pacote mensal.</p><button class="text-button" @click="book(s.id)">Escolher este combo <span>↗</span></button></article></div></section></template>
