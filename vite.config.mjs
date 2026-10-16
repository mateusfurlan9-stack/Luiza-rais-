import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {siteConfig as c} from './src/config/siteConfig.js'
const url=(process.env.SITE_URL||c.seo.url).replace(/\/$/,'')
export default defineConfig({plugins:[vue(),{name:'studio-seo',transformIndexHtml(){return [{tag:'script',attrs:{type:'application/ld+json'},children:JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:c.brand.name,description:c.seo.description,telephone:'+'+c.contact.whatsapp,...(url?{url}:{} )}).replace(/</g,'\\u003c'),injectTo:'head'},...(url?[{tag:'link',attrs:{rel:'canonical',href:url+'/'},injectTo:'head'},{tag:'meta',attrs:{property:'og:image',content:url+'/media/nails-3.webp'},injectTo:'head'},{tag:'meta',attrs:{property:'og:url',content:url+'/'},injectTo:'head'}]:[])]}}],server:{host:'0.0.0.0'},build:{target:'es2022'}})
