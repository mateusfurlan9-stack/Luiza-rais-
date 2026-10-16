import fs from 'node:fs'
import {siteConfig as c} from '../src/config/siteConfig.js'
const url=(process.env.SITE_URL||c.seo.url).replace(/\/$/,'')
fs.writeFileSync('public/robots.txt',`User-agent: *\nAllow: /\n${url?`Sitemap: ${url}/sitemap.xml\n`:''}`)
if(url){if(!/^https:\/\/[a-z0-9.-]+(?::\d+)?$/i.test(url))throw Error('SITE_URL deve ser uma origem HTTPS válida, sem caminho.');fs.writeFileSync('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/','/links'].map(path=>`<url><loc>${url}${path}</loc></url>`).join('')}</urlset>`)}else{if(fs.existsSync('public/sitemap.xml'))fs.unlinkSync('public/sitemap.xml');console.log('SEO: defina SITE_URL na Vercel para gerar sitemap com o domínio real.')}
