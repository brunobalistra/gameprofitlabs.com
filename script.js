// Simple i18n for EN / PT / ES
const messages = {
  en: {
    nav_services: "Services",
    nav_plans: "Plans",
    nav_media: "In the media",
    nav_contact: "Contact",
    hero_title: "Maximize Your Game’s Revenue with AI",
    hero_sub: "Unlock your game’s full potential through advanced AI‑driven monetization strategies.",
    cta_free_analysis: "Get Free Analysis",
    cta_view_plans: "View Plans",
    services_title: "What we do",
    svc_ai_title: "AI‑Powered Insights",
    svc_ai_desc: "Data‑driven strategies powered by AI to boost ARPDAU, LTV, and retention.",
    svc_consult_title: "Custom Consultation",
    svc_consult_desc: "Hands‑on monetization advisory tailored to your genre and lifecycle.",
    svc_templates_title: "Monetization Templates",
    svc_templates_desc: "Ready‑to‑use kits: ad placements, economy models, waterfall & reporting.",
    plans_title: "Plans & Pricing",
    one_time: "(one‑time)",
    starter_1: "Monetization templates",
    starter_2: "1× 30‑min consulting call",
    starter_3: "7 days email support",
    pro_1: "Everything in Starter",
    pro_2: "Waterfall optimization (1 platform)",
    pro_3: "Tracking/analytics design + validation",
    pro_4: "3× 60‑min strategy calls",
    pro_5: "30 days follow‑up",
    most_popular: "Most popular",
    custom_note: "Need custom scope or monthly retainer? Contact us for Elite plans.",
    featured_title: "As Featured In",
    quote_text: "“Hybrid waterfalls are more dynamic and adaptable. Combine real‑time bidding with smart floors to maximize ARPDAU without hurting UX.”",
    contact_title: "Contact",
    contact_alt: "Or schedule a free call — it takes 30 seconds.",
    cta_book_call: "Book a Call",
  },
  pt: {
    nav_services: "Serviços",
    nav_plans: "Planos",
    nav_media: "Na mídia",
    nav_contact: "Contato",
    hero_title: "Maximize a Receita do Seu Jogo com IA",
    hero_sub: "Desbloqueie todo o potencial do seu jogo com estratégias de monetização orientadas por IA.",
    cta_free_analysis: "Análise Gratuita",
    cta_view_plans: "Ver Planos",
    services_title: "O que fazemos",
    svc_ai_title: "Insights com IA",
    svc_ai_desc: "Estratégias orientadas por dados para aumentar ARPDAU, LTV e retenção.",
    svc_consult_title: "Consultoria Personalizada",
    svc_consult_desc: "Aconselhamento prático de monetização para seu gênero e estágio de vida.",
    svc_templates_title: "Templates de Monetização",
    svc_templates_desc: "Kits prontos: placements de anúncios, economia, waterfall e relatórios.",
    plans_title: "Planos e Preços",
    one_time: "(pagamento único)",
    starter_1: "Templates de monetização",
    starter_2: "1× call de 30 min",
    starter_3: "7 dias de suporte por e‑mail",
    pro_1: "Tudo do Starter",
    pro_2: "Otimização de waterfall (1 plataforma)",
    pro_3: "Desenho + validação de tracking/analytics",
    pro_4: "3× calls estratégicas de 60 min",
    pro_5: "Acompanhamento de 30 dias",
    most_popular: "Mais popular",
    custom_note: "Precisa de escopo customizado ou retainer mensal? Fale sobre o plano Elite.",
    featured_title: "Na Mídia",
    quote_text: "“Waterfalls híbridas são mais dinâmicas e adaptáveis. Combine bidding em tempo real com pisos inteligentes para maximizar o ARPDAU sem prejudicar a UX.”",
    contact_title: "Contato",
    contact_alt: "Ou agende uma call — leva 30 segundos.",
    cta_book_call: "Agendar Call",
  },
  es: {
    nav_services: "Servicios",
    nav_plans: "Planes",
    nav_media: "En los medios",
    nav_contact: "Contacto",
    hero_title: "Maximiza los Ingresos de tu Juego con IA",
    hero_sub: "Libera el potencial total de tu juego con estrategias de monetización impulsadas por IA.",
    cta_free_analysis: "Análisis Gratis",
    cta_view_plans: "Ver Planes",
    services_title: "Qué hacemos",
    svc_ai_title: "Insights con IA",
    svc_ai_desc: "Estrategias basadas en datos para elevar ARPDAU, LTV y retención.",
    svc_consult_title: "Consultoría Personalizada",
    svc_consult_desc: "Asesoría práctica de monetización según tu género y etapa.",
    svc_templates_title: "Plantillas de Monetización",
    svc_templates_desc: "Kits listos: ubicaciones de anuncios, economía, waterfall y reportes.",
    plans_title: "Planes y Precios",
    one_time: "(pago único)",
    starter_1: "Plantillas de monetización",
    starter_2: "1× llamada de 30 min",
    starter_3: "7 días de soporte por correo",
    pro_1: "Todo del Starter",
    pro_2: "Optimización de waterfall (1 plataforma)",
    pro_3: "Diseño + validación de tracking/analytics",
    pro_4: "3× llamadas estratégicas de 60 min",
    pro_5: "Seguimiento por 30 días",
    most_popular: "Más popular",
    custom_note: "¿Necesitas alcance a medida o retainer mensual? Consulta por el plan Elite.",
    featured_title: "En los Medios",
    quote_text: "“Las waterfalls híbridas son más dinámicas y adaptables. Combina pujas en tiempo real con pisos inteligentes para maximizar el ARPDAU sin afectar la UX.”",
    contact_title: "Contacto",
    contact_alt: "O agenda una llamada — toma 30 segundos.",
    cta_book_call: "Agendar Llamada",
  }
};

function setLang(lang){
  const dict = messages[lang] || messages.en;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key]) el.textContent = dict[key];
  });
  // update html lang
  document.documentElement.setAttribute("lang", lang);
  // store
  try{ localStorage.setItem("gpl_lang", lang);}catch(e){}
}

document.addEventListener("click", e=>{
  const btn = e.target.closest(".lang-btn");
  if(btn){
    setLang(btn.dataset.lang);
  }
});

// init
const saved = (typeof localStorage !== "undefined" && localStorage.getItem("gpl_lang")) || "en";
setLang(saved);
