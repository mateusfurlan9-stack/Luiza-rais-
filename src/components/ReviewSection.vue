<script setup>
import {siteConfig as c} from '../config/siteConfig'
</script>
<template><section id="avaliacoes" class="section wrap"><p class="eyebrow">Palavras de quem vive o cuidado</p><h2>Experiências compartilhadas.</h2><div class="review-carousel" tabindex="0" aria-label="Depoimentos, deslize para navegar"><article v-for="(r,i) in c.reviews" :key="i" class="review-card"><strong v-if="r.demo">Depoimento fictício de demonstração</strong><p :aria-label="`${r.rating} de 5 estrelas`">{{'★'.repeat(Math.max(0,Math.min(5,r.rating)))}}</p><blockquote>{{r.text}}</blockquote><h3>{{r.name}}</h3><small v-if="r.date">{{r.date}}</small></article></div><a v-if="c.reviewsUrl" :href="c.reviewsUrl" target="_blank" rel="noopener">Ver avaliações reais ↗</a></section></template>
