export const COMPANY = {
  name: 'Costa Ar Condicionado',
  slogan: 'Especialistas em Climatização para Residências, Empresas e Indústrias',
  description: 'Ajudamos você a ter um ar mais puro e conforto o ano todo.',
  phone: '(48) 99141-0336',
  whatsapp: '5548991410336',
  whatsappMessage: 'Olá! Vim pelo site e gostaria de solicitar um orçamento.',
  instagram: 'https://www.instagram.com/costa_arcondicionado/',
  instagramHandle: '@costa_arcondicionado',
  location: 'Grande Florianópolis - SC',
  experience: '10+',
  clients: '200+',
  projects: '500+',
}

export const WHATSAPP_URL = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`

export const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]
