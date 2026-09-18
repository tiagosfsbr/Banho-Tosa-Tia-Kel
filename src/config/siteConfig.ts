// Configuração central do site.
// Nenhum componente deve conter dados fixos do cliente — todos consomem este arquivo.
export const siteConfig = {
  name: 'Banho e Tosa Tia Kel',
  shortName: 'Tia Kel',
  tagline: 'Pet friendly e divertido.',
  segment: 'Banho e tosa para pets',
  city: 'Joinville/SC',
  neighborhood: 'João Costa',
  address: 'R. Santa Izabel, 354 - João Costa, Joinville - SC',
  phone: '+55 47 99910-6055',
  whatsapp: 'https://wa.me/5547999106055',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Banho%20e%20Tosa%20-%20Tia%20Kel%2C%20R.%20Santa%20Izabel%2C%20354%20-%20Jo%C3%A3o%20Costa%2C%20Joinville%20-%20SC',
  // Instagram não localizado na pesquisa — preencher quando o cliente confirmar.
  instagram: '',
  // Horário não informado — preencher quando o cliente confirmar.
  hours: '',
  rating: {
    score: '4.9',
    total: 44,
    source: 'Google',
  },
  // Mensagem padrão do WhatsApp.
  whatsappMessage:
    'Olá, Tia Kel! Gostaria de agendar um banho e tosa para o meu pet.',
}

export const whatsappLink = (message?: string) =>
  `${siteConfig.whatsapp}?text=${encodeURIComponent(message ?? siteConfig.whatsappMessage)}`