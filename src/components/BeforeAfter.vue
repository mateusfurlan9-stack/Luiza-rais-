<script setup>
import {ref,computed} from 'vue'
import {siteConfig as c} from '../config/siteConfig'
const selected=ref(0),position=ref(50),pair=computed(()=>c.transformations[selected.value])
</script>
<template><section v-if="pair" class="section wrap"><p class="eyebrow">Transformações</p><h2>Um novo olhar.</h2><p v-if="pair.demo" class="notice">Comparação demonstrativa, não representa resultado de cliente.</p><label>Escolha a transformação<select v-model="selected"><option v-for="(p,i) in c.transformations" :value="i" :key="i">{{p.title}}</option></select></label><div class="comparison"><img :src="pair.before" :alt="pair.beforeAlt||'Unhas antes do procedimento'" width="900" height="700" loading="lazy"><img class="comparison-after" :style="{clipPath:`inset(0 ${100-position}% 0 0)`}" :src="pair.after" :alt="pair.afterAlt||'Unhas depois do procedimento'" width="900" height="700" loading="lazy"><span class="before-tag">Antes</span><span class="after-tag">Depois</span></div><label>Comparar antes e depois<input v-model="position" type="range" min="0" max="100" aria-label="Porcentagem da imagem depois" :aria-valuetext="`${position}% depois`"></label></section></template>
