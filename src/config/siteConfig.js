// Edite os dados comerciais somente neste arquivo. Preços transcritos das imagens enviadas.
export const siteConfig = {
 brand:{name:'Luiza Rais Nails',initials:'LR',subtitle:'Nail designer • Atendimento a domicílio',logo:''},
 theme:{primary:'#745047',secondary:'#342723',accent:'#D5B88F',background:'#FAF7F4'},
 contact:{city:'SP Capital',whatsapp:'5511977095803',instagram:'https://www.instagram.com/luizaraisnails/',hours:'Horários mediante agendamento',travelFee:'Consulte a disponibilidade e eventual taxa de deslocamento antes da confirmação.'},
 seo:{url:'',description:'Manicure, pedicure, alongamento em acrílico e nail art no conforto da sua casa. Conheça os serviços e combos da Luiza Rais Nails.'},
 hero:{eyebrow:'O seu momento, no seu espaço',title:'Beleza nas mãos.',highlight:'Leveza na rotina.',description:'Manicure, pedicure e alongamentos com atendimento a domicílio. Escolha seu próximo estilo. O cuidado vai até você.',image:'/media/nails-3.webp'},
 about:{name:'Luiza Rais',photo:'/media/luiza.webp',role:'Manicure & Nail Designer',title:'Um cuidado que vai até você.',text:'Da esmaltação clássica ao alongamento em acrílico, um momento para cuidar das suas unhas sem sair de casa. Vamos escolher juntas o formato, a cor e os detalhes que combinam com você.',history:'Conheça os serviços, compartilhe sua inspiração e consulte um horário para receber o atendimento no seu endereço.'},
 comboTerms:'Pacotes com duração de 1 mês, de uso individual e intransferível. Garanta seu próximo horário ao final de cada atendimento.',
 reviews:[],reviewsUrl:'',
 // Não há pares de antes/depois fornecidos. Adicione somente fotos da mesma transformação.
 transformations:[],
 gallery:[
  {id:1,src:'/media/nails-1.webp',small:'/media/nails-1-small.webp',title:'Delicadeza em branco',category:'Degradê',alt:'Unhas alongadas em degradê suave do nude ao branco'},
  {id:2,src:'/media/nails-2.webp',small:'/media/nails-2-small.webp',title:'Vermelho que marca',category:'Cores clássicas',alt:'Mãos com unhas quadradas esmaltadas em vermelho brilhante'},
  {id:3,src:'/media/nails-3.webp',small:'/media/nails-3-small.webp',title:'O essencial, em nude',category:'Nudes',alt:'Detalhe de unhas quadradas em nude rosado com brilho'},
  {id:4,src:'/media/nails-4.webp',small:'/media/nails-4-small.webp',title:'Elegância em cada detalhe',category:'Cores clássicas',alt:'Unhas longas quadradas em tom escuro brilhante'}
 ]
}
const make=(category, rows)=>rows.map(([id,name,price,description])=>({id,name,price,category,description:description||'',originalPrice:null,promotionVerified:false,duration:null}))
export const services=[
 ...make("A domicílio",[["mao", "Mão - Avulso (a domicílio)", 70], ["pe", "Pé - Avulso (a domicílio)", 76], ["pe-mao", "Mão e Pé - Avulso (a domicílio)", 146], ["gel", "Esmaltação em Gel - a Domicílio", 235], ["blindagem", "Blindagem - a Domicílio", 270], ["tips", "Alongamento em Acrílico - Aplicação a Domicílio", 350, "Técnica realizada na Tips."], ["manutencao", "Alongamento em Acrílico - Manutenção a Domicílio", 300], ["molde", "Alongamento em Acrílico - Aplicação a Domicílio", 310, "Técnica realizada no molde."]]),
 ...make("Soft Gel",[["soft", "Soft Gel - Express", 180]]),
 ...make("Esmalteria",[["simples", "Esmaltação Simples Mão ou Pé (Esmalteria)", 26], ["cutilagem-pe", "Cutilagem dos Pés Sem Esmaltação (Esmalteria)", 29], ["cutilagem-mao", "Cutilagem sem Esmaltação na Esmalteria", 29], ["spa", "SPA dos Pés (Esmalteria)", 110], ["hidratacao", "Adicionais - Hidratação dos Pés (Esmalteria)", 12], ["esfoliacao", "Adicionais - Esfoliação no Pé (Esmalteria)", 15], ["lixar", "Adicionais - Lixar o Pé (Esmalteria)", 10]])
]
export const combos=[
 [1,'2 pés',147,0,2],[2,'2 mãos e 1 pé',211,2,1],[3,'2 mãos e 2 pés',287,2,2],[4,'4 mãos',266,4,0],[5,'4 mãos e 1 pé',320,4,1],[6,'4 mãos e 2 pés',410,4,2],[7,'4 mãos e 4 pés',525,4,4]
].map(([n,name,price,hands,feet])=>({id:`combo-${n}`,name:`Combo ${n} — ${name} (a domicílio)`,price,category:'Combos a domicílio',description:siteConfig.comboTerms,hands,feet}))
export const catalog=[...services,...combos]
export const money=value=>new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(value)
export const discount=item=>item.promotionVerified&&item.originalPrice>item.price?Math.round((1-item.price/item.originalPrice)*100):0
export const comboSaving=item=>Math.max(0,item.hands*services.find(s=>s.id==='mao').price+item.feet*services.find(s=>s.id==='pe').price-item.price)
export const whatsappUrl=(message='Olá! Gostaria de saber mais sobre o atendimento a domicílio da Luiza Rais Nails.')=>{
 const number=siteConfig.contact.whatsapp.replace(/\D/g,'');return /^\d{12,13}$/.test(number)?`https://wa.me/${number}?text=${encodeURIComponent(message)}`:''
}
export const today=()=>new Date().toLocaleDateString('sv-SE',{timeZone:'America/Sao_Paulo'})
export function bookingMessage(items){return ['Olá! Gostaria de agendar os seguintes serviços com a Luiza Rais Nails.',...items.map(i=>`${i.name}${i.description && ['tips','molde'].includes(i.id)?` — ${i.description}`:''} (${i.category}): ${money(i.price)}`),`Subtotal dos serviços: ${money(items.reduce((a,i)=>a+i.price,0))}`,'Podemos combinar os detalhes e o horário pelo WhatsApp?'].join('\n')}
