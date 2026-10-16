import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import {services,combos,catalog,siteConfig,bookingMessage,whatsappUrl,comboSaving,discount} from '../src/config/siteConfig.js'
test('23 itens e preços conferidos com os seis prints atualizados',()=>{
 assert.equal(services.length,16);assert.equal(combos.length,7)
 assert.deepEqual(services.map(s=>s.price),[70,76,146,235,270,350,300,310,180,26,29,29,110,12,15,10])
 assert.deepEqual(combos.map(s=>s.price),[147,211,287,266,320,410,525])
 assert.equal(new Set(catalog.map(s=>s.id)).size,23)
})
test('WhatsApp usa o número autorizado, acentos, contexto e soma correta',()=>{
 const items=[catalog.find(s=>s.id==='mao'),catalog.find(s=>s.id==='molde')]
 const url=new URL(whatsappUrl(bookingMessage(items)))
 assert.equal(url.hostname,'wa.me');assert.equal(url.pathname,'/5511977095803')
 const msg=url.searchParams.get('text');assert.match(msg,/Mão - Avulso/);assert.match(msg,/Técnica realizada no molde/);assert.match(msg,/380,00/);assert.match(msg,/domicílio/);assert.doesNotMatch(msg,/Nome:|Bairro:|Região:|Data preferida:/)
})
test('economia dos combos deriva dos valores avulsos',()=>{assert.deepEqual(combos.map(comboSaving),[5,5,5,14,36,22,59]);assert.equal(discount({originalPrice:100,price:80,promotionVerified:false}),0);assert.equal(discount({originalPrice:100,price:80,promotionVerified:true}),20)})
test('somente quatro resultados e arquivos locais válidos',()=>{assert.equal(siteConfig.gallery.length,4);for(const item of siteConfig.gallery){assert.ok(fs.existsSync('public'+item.src));assert.ok(fs.existsSync('public'+item.small))}assert.ok(fs.existsSync('public'+siteConfig.about.photo));assert.equal(siteConfig.reviews.length,0);assert.equal(siteConfig.transformations.length,0)})
test('modal não coleta dados pessoais nem data',()=>{const source=fs.readFileSync('src/components/BookingModal.vue','utf8');assert.doesNotMatch(source,/<textarea|<select|autocomplete=|type="date"|type="text"/);assert.match(source,/type="checkbox"/);assert.match(source,/Agendar pelo WhatsApp/)})
