<script setup>
import {ref,onMounted,onUnmounted} from 'vue'
const props=defineProps({label:String,wide:Boolean});const emit=defineEmits(['close']);const dialog=ref();let previous
onMounted(()=>{previous=document.activeElement;dialog.value.showModal();document.body.classList.add('modal-open')})
onUnmounted(()=>{document.body.classList.remove('modal-open');previous?.focus()})
</script>
<template><Teleport to="body"><dialog ref="dialog" :class="['modal',{'modal-wide':wide}]" :aria-label="props.label" @cancel.prevent="emit('close')" @click="e=>{if(e.target===dialog)emit('close')}"><div class="modal-inner"><button class="close" autofocus aria-label="Fechar janela" @click="emit('close')">×</button><slot /></div></dialog></Teleport></template>
