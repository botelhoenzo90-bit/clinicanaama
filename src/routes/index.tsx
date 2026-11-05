import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity, ArrowRight, Bandage, Check, ChevronDown, CircleCheck, HeartPulse, MessageCircle, ShieldCheck, Stethoscope,
} from "lucide-react";
import cotoAmputacaoRegistro from "@/assets/coto-amputacao-registro-novo.jpg.asset.json";
import ulceraCotoAntes from "@/assets/ulcera-coto-antes.jpg.asset.json";
import ulceraCotoDepois from "@/assets/ulcera-coto-depois.jpg.asset.json";
import ulceraCalcanharAntes from "@/assets/ulcera-calcanhar-antes.jpg.asset.json";
import ulceraCalcanharDepois from "@/assets/ulcera-calcanhar-depois.jpg.asset.json";
import ulceraNecroticaPes from "@/assets/ulcera-necrotica-pes.jpg.asset.json";
import cotoGranulando from "@/assets/coto-granulando.jpg.asset.json";
import cotoFechando from "@/assets/coto-fechando.jpg.asset.json";
import cotoCicatrizado from "@/assets/coto-cicatrizado.jpg.asset.json";
import dorsoB1 from "@/assets/dorso-pe-b-1.jpg.asset.json";
import dorsoB2 from "@/assets/dorso-pe-b-2.jpg.asset.json";
import dorsoB3 from "@/assets/dorso-pe-b-3.jpg.asset.json";
import dorsoB4 from "@/assets/dorso-pe-b-4.jpg.asset.json";
import plantaPe1 from "@/assets/planta-pe-1.jpg.asset.json";
import plantaPe2 from "@/assets/planta-pe-2.jpg.asset.json";
import plantaPe3 from "@/assets/planta-pe-3.jpg.asset.json";
import plantaPe4 from "@/assets/planta-pe-4.jpg.asset.json";
import plantaPe5 from "@/assets/planta-pe-5.jpg.asset.json";
import plantaPe6 from "@/assets/planta-pe-6.jpg.asset.json";
import feridaDorsoAberta from "@/assets/ferida-dorso-pe-aberta.jpg.asset.json";
import feridaDorsoGranulando from "@/assets/ferida-dorso-pe-granulando.jpg.asset.json";
import feridaDorsoFechando from "@/assets/ferida-dorso-pe-fechando.jpg.asset.json";
import feridaDorsoCicatrizada from "@/assets/ferida-dorso-pe-cicatrizada.jpg.asset.json";
import cotoLesaoExtensa from "@/assets/coto-lesao-extensa.jpg.asset.json";
import cotoQuaseFechado from "@/assets/coto-quase-fechado.jpg.asset.json";
import cotoGranulacao from "@/assets/coto-granulacao.jpg.asset.json";
import cotoCavidadeProfunda from "@/assets/coto-cavidade-profunda.jpg.asset.json";
import feridaLateralAntes from "@/assets/ferida-lateral-antes.jpg.asset.json";
import feridaLateralDepois from "@/assets/ferida-lateral-depois.jpg.asset.json";
import calcanharEvo1 from "@/assets/calcanhar-evo-33.jpg.asset.json";
import calcanharEvo2 from "@/assets/calcanhar-evo-34.jpg.asset.json";
import calcanharEvo3 from "@/assets/calcanhar-evo-35.jpg.asset.json";
import calcanharEvo4 from "@/assets/calcanhar-evo-36.jpg.asset.json";
import fatimaCurativoEmCasa from "@/assets/fatima-curativo-em-casa.jpg.asset.json";
import historia1 from "@/assets/historia-cuidado-1.mp4.asset.json";
import historia2 from "@/assets/historia-cuidado-2.mp4.asset.json";
import historia3 from "@/assets/historia-cuidado-3.mp4.asset.json";
import historia4 from "@/assets/historia-cuidado-4.mp4.asset.json";
import historia1Poster from "@/assets/historia-cuidado-1-poster.jpg.asset.json";
import historia2Poster from "@/assets/historia-cuidado-2-poster.jpg.asset.json";
import historia3Poster from "@/assets/historia-cuidado-3-poster.jpg.asset.json";
import historia4Poster from "@/assets/historia-cuidado-4-poster.jpg.asset.json";
import logoNaama from "@/assets/logo-naama.png.asset.json";
import shareNaama from "@/assets/compartilhamento-naama.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Domiciliar Naamã | Cuidado Especializado com Feridas e Pé Diabético" },
      { name: "description", content: "Clínica Domiciliar Naamã: cuidado especializado com feridas, pé diabético e curativos, com opção de atendimento domiciliar." },
      { property: "og:title", content: "Clínica Domiciliar Naamã | Feridas e Pé Diabético" },
      { property: "og:description", content: "Cuidado especializado, acolhedor e individualizado para feridas e pé diabético." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://clinicanaama.lovable.app${shareNaama.url}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://clinicanaama.lovable.app${shareNaama.url}` },
      { name: "theme-color", content: "#0b4168" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5512988298061";
const services = [
  { title: "Feridas agudas e crônicas", image: "/Cuidado%20Cl%C3%ADnico%20de%20Ferida%20no%20Calcanhar.png", text: "Avaliação e cuidado individualizado para feridas recentes ou de longa duração, com atenção às características de cada lesão.", icon: Bandage },
  { title: "Pé diabético", image: "/Tratamento%20Cuidadoso%20de%20Ferida%20no%20P%C3%A9.png", text: "Acompanhamento especializado para lesões nos pés de pessoas com diabetes, com foco na avaliação, proteção e prevenção de complicações.", icon: Activity },
  { title: "Curativos especializados", image: "/Cuidado%20Cl%C3%ADnico%20com%20Curativo%20no%20Joelho.png", text: "Curativos selecionados conforme a avaliação da ferida, a condição da pele e as necessidades de cada pessoa.", icon: ShieldCheck },
  { title: "Lesões por pressão", image: "/Ilustra%C3%A7%C3%A3o%20M%C3%A9dica%20de%20%C3%9Alcera%20na%20Perna.png", text: "Cuidados para lesões por pressão, conforto, proteção da pele e orientações para ajudar a reduzir novos danos.", icon: HeartPulse },
  { title: "Úlceras venosas e arteriais", image: "/Ilustra%C3%A7%C3%A3o%20M%C3%A9dica%20de%20%C3%9Alcera%20na%20Perna.png", text: "Avaliação e plano de cuidado individualizado para úlceras vasculares, considerando a necessidade de acompanhamento integrado.", icon: Activity },
  { title: "Cuidados de enfermagem em casa", image: "/Cuidado%20Cl%C3%ADnico%20de%20Ferida%20no%20Calcanhar.png", text: "Atendimento na residência com curativos, acompanhamento e cuidados individualizados conforme a necessidade de cada pessoa.", icon: HeartPulse },
  { title: "Administração de medicações", image: "/Cuidado%20Cl%C3%ADnico%20com%20Curativo%20no%20Joelho.png", text: "Administração de medicamentos na residência, conforme prescrição e avaliação de enfermagem, com atenção à segurança e às orientações recebidas.", icon: Stethoscope },
];
const faqs = [
  ["Quais tipos de feridas são atendidos?", "A Clínica Domiciliar Naamã oferece cuidados de enfermagem na residência, incluindo curativos especializados, acompanhamento de feridas e administração de medicações conforme prescrição, além do cuidado com pé diabético e lesões."],
  ["O atendimento pode ser feito em casa?", "O atendimento domiciliar pode incluir avaliação de enfermagem, curativos, acompanhamento e administração de medicações conforme prescrição. Entre em contato para consultar disponibilidade e região atendida."],
  ["Como funciona a primeira avaliação?", "O primeiro passo é conversar sobre as necessidades da pessoa. A profissional realiza a avaliação de enfermagem e orienta sobre os cuidados possíveis na residência, incluindo curativos e medicações prescritas."],
  ["O que fazer quando uma ferida não cicatriza?", "Uma ferida persistente, alterações de cor, secreção, mau cheiro, aumento da dor ou sinais de infecção precisam de avaliação profissional. Em situações de urgência, procure um serviço de saúde."],
  ["Como posso agendar?", "Clique em qualquer botão de WhatsApp desta página para conversar com a equipe da Clínica Domiciliar Naamã e consultar informações sobre atendimento e disponibilidade."],
];

type BeforeAfterCase = { title: string; description: string; slot: "pair-a" | "pair-b" | "pair-c" | "pair-d" | "tall" | "feature" | "evolution" | "wide-a" | "wide-b" | "wide-c" | "wide-d" | "wide-e" | "solo-a" | "solo-b"; before?: string; after?: string; single?: string; aspect?: string; panels?: boolean; badge?: string; stages?: { label: string; src: string; after?: boolean }[] };
const beforeAfterCases: BeforeAfterCase[] = [
  { slot: "evolution", title: "Evolução de uma ferida no calcanhar", description: "Acompanhamento de um mesmo caso, etapa por etapa: a ferida profunda no calcanhar, com tecido desvitalizado, passou por desbridamento e curativos especializados, formou tecido de granulação e evoluiu até o fechamento, com a cicatriz no lugar da lesão. Cada etapa mostra como o cuidado contínuo faz diferença.", stages: [
    { label: "ANTES", src: ulceraCotoAntes.url },
    { label: "EVOLUÇÃO", src: ulceraCotoDepois.url },
    { label: "EVOLUÇÃO", src: ulceraCalcanharAntes.url, after: true },
    { label: "DEPOIS", src: ulceraCalcanharDepois.url, after: true },
  ] },
  { slot: "wide-a", title: "Evolução de uma ferida grave no pé", description: "Acompanhamento de um mesmo caso, etapa por etapa: a lesão extensa com tecido escuro, a ferida aberta que formou tecido de granulação, a redução gradual do tamanho e, por fim, o fechamento completo, com cicatriz no lugar da lesão.", stages: [
    { label: "ANTES", src: ulceraNecroticaPes.url },
    { label: "EVOLUÇÃO", src: cotoGranulando.url },
    { label: "EVOLUÇÃO", src: cotoFechando.url, after: true },
    { label: "DEPOIS", src: cotoCicatrizado.url, after: true },
  ] },
  { slot: "wide-b", title: "Evolução de uma ferida no dorso do pé", description: "Acompanhamento de um mesmo caso, etapa por etapa: a cavidade profunda e aberta, a formação de tecido de granulação saudável, a contração progressiva da ferida e o fechamento final.", stages: [
    { label: "ANTES", src: feridaDorsoAberta.url },
    { label: "EVOLUÇÃO", src: feridaDorsoGranulando.url },
    { label: "EVOLUÇÃO", src: feridaDorsoFechando.url, after: true },
    { label: "DEPOIS", src: feridaDorsoCicatrizada.url, after: true },
  ] },
  { slot: "wide-c", title: "Evolução de uma ferida entre os dedos do pé", description: "Acompanhamento de um mesmo caso, etapa por etapa: a ferida aberta com tecido desvitalizado, a formação de tecido de granulação saudável, a redução progressiva da lesão e, por fim, a pele fechada, com a cicatriz no lugar da ferida.", stages: [
    { label: "ANTES", src: dorsoB1.url },
    { label: "EVOLUÇÃO", src: dorsoB2.url },
    { label: "EVOLUÇÃO", src: dorsoB3.url, after: true },
    { label: "DEPOIS", src: dorsoB4.url, after: true },
  ] },
  { slot: "wide-d", title: "Evolução de uma ferida na sola do pé", description: "Acompanhamento de um mesmo caso em seis etapas: a úlcera na planta do pé, a ferida ampliada após a limpeza, o preenchimento gradual por tecido de granulação, a redução até uma pequena área aberta e, por fim, a sola cicatrizada.", stages: [
    { label: "ANTES", src: plantaPe1.url },
    { label: "EVOLUÇÃO", src: plantaPe2.url },
    { label: "EVOLUÇÃO", src: plantaPe3.url },
    { label: "EVOLUÇÃO", src: plantaPe4.url, after: true },
    { label: "EVOLUÇÃO", src: plantaPe5.url, after: true },
    { label: "DEPOIS", src: plantaPe6.url, after: true },
  ] },
  { slot: "pair-c", title: "Evolução de uma lesão extensa em coto de amputação", description: "Acompanhamento de um mesmo caso, etapa por etapa: a lesão aberta com tecido desvitalizado, a ferida preenchida por tecido de granulação saudável e, por fim, a área praticamente fechada, restando apenas uma pequena região em cicatrização.", stages: [
    { label: "ANTES", src: cotoLesaoExtensa.url },
    { label: "EVOLUÇÃO", src: cotoGranulacao.url },
    { label: "DEPOIS", src: cotoQuaseFechado.url, after: true },
  ] },
  { slot: "pair-d", title: "Evolução de uma ferida no pé, com o dedão preservado", description: "Acompanhamento de um mesmo caso: à esquerda, a ferida aberta com tecido escuro e áreas de cicatrização; à direita, a mesma região já fechada, com a cicatriz formada e o dedão preservado.", before: feridaLateralAntes.url, after: feridaLateralDepois.url },
  { slot: "solo-a", title: "Ferida profunda em coto de amputação", description: "Registro de uma etapa do acompanhamento: cavidade profunda com tecido desvitalizado, tratada com curativos especializados e avaliação contínua para orientar a evolução do tratamento.", single: cotoCavidadeProfunda.url, badge: "ACOMPANHAMENTO" },
  { slot: "tall", title: "Acompanhamento de ferida em coto de amputação", description: "Registro publicado com autorização: à esquerda, a ferida aberta; à direita, a mesma área com a lesão praticamente fechada.", single: cotoAmputacaoRegistro.url, aspect: "572/1024", panels: true },
  { slot: "wide-e", title: "Evolução de uma ferida profunda no calcanhar", description: "Acompanhamento de um mesmo caso, etapa por etapa: a cavidade profunda com tecido desvitalizado, a limpeza com formação de tecido de granulação saudável, a redução progressiva até uma pequena área central e, por fim, o fechamento completo, com a cicatriz no lugar da lesão.", stages: [
    { label: "ANTES", src: calcanharEvo1.url },
    { label: "EVOLUÇÃO", src: calcanharEvo2.url },
    { label: "EVOLUÇÃO", src: calcanharEvo3.url, after: true },
    { label: "DEPOIS", src: calcanharEvo4.url, after: true },
  ] },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(`Olá! Vim pelo site da Clínica Domiciliar Naamã e gostaria de ${label.toLowerCase()}.`)}`, "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site maria-site">
      <header className="site-header maria-header-hidden">
        <div className="container header-inner">
          <a className="brand maria-brand" href="#inicio" aria-label="Clínica Domiciliar Naamã, cuidado especializado">
            <span className="brand-mark"><HeartPulse size={22}/></span>
            <span><strong>CLÍNICA DOMICILIAR NAAMÃ</strong><small>CUIDADO ESPECIALIZADO QUE TRANSFORMA</small></span>
          </a>
          <nav className="nav maria-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a><a href="#tratamentos">Tratamentos</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Dúvidas</a>
          </nav>
          <button className="header-cta" onClick={() => goWhatsapp("agendar um atendimento")}><MessageCircle size={16}/> Falar com a equipe</button>
        </div>
      </header>

      <section className="hero maria-hero" id="inicio">
        <div className="hero-glow"/>
        <div className="container hero-grid">
          <div className="hero-copy center-hero">
            <img className="hero-brand-logo" src={logoNaama.url} alt="Clínica Domiciliar Naamã — Cuidado especializado que transforma" />
            <h1>Feridas e pé diabético exigem <em>cuidado especializado.</em></h1>
            <p className="hero-lead">A Clínica Domiciliar Naamã leva cuidado de enfermagem até você: curativos especializados, acompanhamento de feridas e administração de medicações conforme prescrição, com atenção individual no conforto da sua residência.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre meu caso")}><MessageCircle size={18}/> Agendar uma avaliação</button>
              <a className="btn btn-outline" href="#tratamentos">Conhecer os atendimentos <ArrowRight size={17}/></a>
            </div>
            <div className="team-credentials"><span><strong>Edelaine</strong> · Enfermeira RT · COREN-SP 374170</span><span><strong>Fátima</strong> · COREN-SP 1397205</span></div><div className="hero-trust"><span><Check size={15}/> Avaliação individual</span><span><Check size={15}/> Atendimento humanizado</span><span><Check size={15}/> Cuidado especializado</span></div>
          </div>
        </div>
      </section>

      <div className="info-marquee" aria-label="Áreas de atendimento"><div className="marquee-track">{[1,2].map(n=><div className="marquee-group" key={n}><span>✦ FERIDAS AGUDAS E CRÔNICAS</span><span>✦ PÉ DIABÉTICO</span><span>✦ CURATIVOS ESPECIALIZADOS</span><span>✦ LESÕES POR PRESSÃO</span><span>✦ ÚLCERAS VASCULARES</span><span>✦ ATENDIMENTO NA RESIDÊNCIA</span><span>✦ MEDICAÇÕES CONFORME PRESCRIÇÃO</span><span>✦ CUIDADO INDIVIDUALIZADO</span></div>)}</div></div>

      <section className="section intro-section" id="sobre"><div className="container intro-grid"><div className="intro-illustration maria-profile-photo"><img src={fatimaCurativoEmCasa.url} alt="Ilustração de Fátima fazendo curativo na perna de um paciente atendido em casa" loading="lazy"/></div><div className="intro-copy"><span className="eyebrow">PRAZER, SOU FÁTIMA</span><p className="team-credentials-inline">Fátima · COREN-SP 1397205 — com responsabilidade técnica da enfermeira Edelaine · COREN-SP 374170</p><h2>Cuidado de enfermagem no conforto da sua <em>residência.</em></h2><p>A Clínica Domiciliar Naamã oferece atendimento domiciliar para quem precisa de cuidados de enfermagem sem sair de casa. Cada visita é planejada de acordo com a necessidade da pessoa, com avaliação, curativos especializados e acompanhamento da evolução.</p><p>Também é possível realizar a administração de medicações na residência, sempre conforme prescrição e avaliação profissional, com cuidado, atenção e orientação à família.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o atendimento de enfermagem")}><MessageCircle size={18}/> conhecer o atendimento</button></div></div></section>

      <section className="section pain-section"><div className="container narrow center"><span className="eyebrow">QUANDO PROCURAR APOIO</span><h2>Feridas persistentes e alterações nos pés merecem <em>atenção especializada.</em></h2><p>Feridas que não cicatrizam, lesões nos pés de pessoas com diabetes e alterações na pele precisam de atenção. A avaliação profissional ajuda a orientar o cuidado e identificar quando é necessário encaminhamento ou atuação conjunta com outros profissionais.</p><div className="check-list centered-list"><div><Check size={17}/><span>Você ou alguém da família precisa de cuidado para uma ferida aguda ou crônica.</span></div><div><Check size={17}/><span>Você tem diabetes e percebeu uma lesão, fissura ou alteração nos pés.</span></div><div><Check size={17}/><span>A ferida persiste, apresenta mudanças ou precisa de curativos especializados.</span></div></div><button className="btn btn-primary" onClick={() => goWhatsapp("tirar dúvidas sobre o cuidado de uma ferida")}><MessageCircle size={18}/> Quero tirar minhas dúvidas</button></div></section>

      <section className="section home-care-section" id="atendimento-domiciliar"><div className="container center"><span className="eyebrow">ATENDIMENTO DOMICILIAR</span><h2>Ferida que não cicatriza? <em>Nós vamos até você!</em></h2><p className="home-care-lead">Cuidado profissional de enfermagem no conforto da sua casa, sem filas e sem deslocamento — com segurança para o paciente e tranquilidade para a família.</p><div className="home-care-grid">{[["🩹","Curativo domiciliar profissional","Avaliação da ferida, limpeza, escolha da cobertura adequada e troca de curativos com técnica e materiais especializados."],["💉","Aplicação de medicamentos em casa","Administração de medicações injetáveis e outras, conforme prescrição médica, com todo o cuidado e orientação."],["📋","Acompanhamento da evolução","Registro de cada etapa do tratamento e orientação à família sobre os cuidados entre as visitas."]].map(([icon,t,d])=><article className="home-care-card" key={t}><span className="home-care-icon" aria-hidden="true">{icon}</span><h3>{t}</h3><p>{d}</p></article>)}</div><button className="btn btn-primary" onClick={() => goWhatsapp("agendar um atendimento domiciliar")}><MessageCircle size={18}/> Agendar atendimento em casa</button></div></section>

      <section className="section procedures-section" id="tratamentos"><div className="container"><div className="section-heading center"><span className="eyebrow">CUIDADOS DA CLÍNICA DOMICILIAR NAAMÃ</span><h2>Atenção especializada para cuidar de feridas com responsabilidade.</h2><p>Conheça os cuidados oferecidos pela Clínica Domiciliar Naamã. A conduta é definida de forma individual, conforme a avaliação e as necessidades de cada pessoa.</p></div><div className="procedure-window"><div className="procedure-track">{[...services,...services].map(({title,text,image,icon:Icon},i)=><article className="procedure-card maria-service-card" key={`${title}-${i}`}><img className="procedure-photo" src={image} alt={title} loading={i<services.length?"eager":"lazy"}/><div className="procedure-content"><div className="procedure-icon"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("saber qual atendimento pode ser adequado para mim")}><MessageCircle size={18}/> Consultar sobre meu caso</button></div></div></section>





      <section className="section how-section" id="como-funciona"><div className="container"><div className="section-heading center"><span className="eyebrow">COMO FUNCIONA</span><h2>Cuidado domiciliar em cada etapa, com <em>atenção e segurança.</em></h2><p>Da primeira conversa ao acompanhamento, cada etapa é conduzida com atenção, clareza e respeito.</p></div><div className="steps-grid">{[["01","Primeiro contato","Você explica brevemente o que está acontecendo e tira suas primeiras dúvidas."],["02","Avaliação","São consideradas a ferida, seu histórico e os fatores relevantes para o cuidado."],["03","Plano individual","As possibilidades de cuidado e orientações são explicadas com clareza."],["04","Acompanhamento em casa","O cuidado é acompanhado e ajustado conforme a evolução e a necessidade de cada pessoa."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("iniciar uma conversa sobre atendimento")}><MessageCircle size={18}/> Iniciar uma conversa</button></div></div></section>

<section className="section video-testimonials-section" id="depoimentos-em-video">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">HISTÓRIAS DE CUIDADO</span>
            <h2>Depoimentos em vídeo, com histórias de <em>acolhimento.</em></h2>
            <p>Vídeos gravados pelos próprios pacientes, contando como foi o cuidado recebido em casa.</p>
          </div>
          <div className="video-testimonials-grid">
            {[
              { video: historia1, poster: historia1Poster, duration: "0:18", title: "Relato gravado em casa", caption: "A pessoa conta, no próprio quarto, como foi o atendimento." },
              { video: historia2, poster: historia2Poster, duration: "0:33", title: "Rosemeire, cuidadora do paciente Juarez", caption: "Ela conta como foi acompanhar o cuidado de perto." },
              { video: historia3, poster: historia3Poster, duration: "0:26", title: "Esse é meu paciente Cristian", caption: "Relato gravado em casa, direto para a câmera." },
              { video: historia4, poster: historia4Poster, duration: "1:03", title: "Essa é a irmã da minha paciente Vera Lucia", caption: "Ela conta como foi o cuidado com a irmã." }
            ].map((s)=><article className="video-testimonial-card" key={s.title}>
              <div className="video-testimonial-frame">
                <video controls playsInline preload="none" poster={s.poster.url}>
                  <source src={s.video.url} type="video/mp4" />
                </video>
              </div>
              <div className="video-testimonial-copy"><h3>{s.title}</h3><p>{s.caption}</p><span className="video-testimonial-duration">{s.duration}</span></div>
            </article>)}
          </div>
        </div>
      </section>

<section className="section before-after-section" id="antes-depois">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">ACOMPANHAMENTO</span>
            <h2>Antes e depois: cada etapa merece <em>atenção.</em></h2>
            <p>Registros de acompanhamento de feridas publicados com autorização da pessoa atendida. Cada caso é único e os resultados variam conforme as condições individuais e o plano de cuidado.</p>
          </div>
          <div className="before-after-grid">
            {beforeAfterCases.map((item) => (
              <article className={`before-after-card ba-${item.slot}`} key={item.title}>
                {item.stages ? (
                  <>
                    <div className="before-after-images ba-stages">
                      {item.stages.map((s, i) => (
                        <div className="before-after-photo" key={i}>
                          <span className={s.after ? "before-after-label after-label" : "before-after-label"}>{i + 1}. {s.label}</span>
                          <img src={s.src} alt={`${item.title} — etapa ${i + 1}`} loading="lazy" />
                        </div>
                      ))}
                    </div>
                    <div className="before-after-card-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </>
                ) : item.single ? (
                  <div className="before-after-stack">
                    <div className="before-after-photo before-after-full" style={item.aspect ? { aspectRatio: item.aspect } : undefined}>
                      <img src={item.single} alt={`Registro de acompanhamento: ${item.title}`} loading="lazy" />
                      {item.panels && <><span className="before-after-label">ANTES</span><span className="before-after-label after-label before-after-label-right">DEPOIS</span></>}
                      {item.badge && <span className="before-after-label">{item.badge}</span>}
                    </div>
                    <div className="before-after-card-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="before-after-images">
                      <div className="before-after-photo">
                        <span className="before-after-label">ANTES</span>
                        <img src={item.before} alt={`${item.title} — antes`} loading="lazy" />
                      </div>
                      <div className="before-after-photo">
                        <span className="before-after-label after-label">DEPOIS</span>
                        <img src={item.after} alt={`${item.title} — depois`} loading="lazy" />
                      </div>
                    </div>
                    <div className="before-after-card-copy">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
          <div className="section-action center">
            <button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o acompanhamento e tirar dúvidas")}><MessageCircle size={18}/> Tirar dúvidas sobre o acompanhamento</button>
          </div>
        </div>
      </section>

      <section className="section maria-reviews-section" id="avaliacoes">
        <div className="maria-reviews-full">
          <div className="section-heading center">
            <span className="eyebrow">AVALIAÇÕES</span>
            <h2>Um cuidado que começa com <em>acolhimento.</em></h2>
            <p>O que dizem as pessoas que confiaram seus cuidados à Clínica Domiciliar Naamã.</p>
          </div>
          <div className="maria-reviews-window">
            <div className="maria-reviews-track">
              {[
                {name:"Mariana S.",text:"O curativo foi feito com muito cuidado e sem dor. Em poucas semanas a ferida da minha mãe já estava fechando."},
                {name:"Carlos R.",text:"Tratei uma ferida no pé diabético que não cicatrizava há meses. As orientações fizeram toda a diferença."},
                {name:"Patrícia M.",text:"Atendimento em casa com toda a atenção. Os curativos do meu pai na lesão por pressão melhoraram muito."},
                {name:"João P.",text:"Explicou cada etapa do tratamento da úlcera na perna. Me senti seguro e bem cuidado."},
                {name:"Ana L.",text:"Curativos especializados e muito carinho. A cicatrização foi mais rápida do que eu esperava."},
                {name:"Mariana S.",text:"O curativo foi feito com muito cuidado e sem dor. Em poucas semanas a ferida da minha mãe já estava fechando."},
                {name:"Carlos R.",text:"Tratei uma ferida no pé diabético que não cicatrizava há meses. As orientações fizeram toda a diferença."},
                {name:"Patrícia M.",text:"Atendimento em casa com toda a atenção. Os curativos do meu pai na lesão por pressão melhoraram muito."},
                {name:"João P.",text:"Explicou cada etapa do tratamento da úlcera na perna. Me senti seguro e bem cuidado."},
                {name:"Ana L.",text:"Curativos especializados e muito carinho. A cicatrização foi mais rápida do que eu esperava."}
              ].map((review,i)=><article className="maria-review-card" key={i}>
                <div className="review-stars" aria-label="5 estrelas">★★★★★</div>
                <p>“{review.text}”</p>
                <div className="maria-review-author"><span className="maria-review-avatar review-avatar-blank" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21c.8-4.4 4.3-6.8 8.5-6.8s7.7 2.4 8.5 6.8z"/></svg></span><span>{review.name}<small>Paciente</small></span></div>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section"><div className="container"><div className="section-heading center"><span className="eyebrow">NOSSO COMPROMISSO</span><h2>Informação clara, acolhimento e <em>responsabilidade.</em></h2></div><div className="benefit-grid maria-benefits"><article><span>01</span><HeartPulse/><h3>Olhar individualizado</h3><p>Cada pessoa e cada ferida têm características próprias que precisam ser consideradas.</p></article><article><span>02</span><ShieldCheck/><h3>Segurança em primeiro lugar</h3><p>As condutas consideram avaliação, critérios profissionais e necessidades clínicas.</p></article><article><span>03</span><Stethoscope/><h3>Orientação responsável</h3><p>Você recebe informações claras sobre cuidados, possibilidades e próximos passos.</p></article><article><span>04</span><CircleCheck/><h3>Cuidado em conjunto</h3><p>Quando necessário, o acompanhamento considera a atuação integrada com outros profissionais.</p></article></div></div></section>

      <section className="section maria-location-section" id="localizacao"><div className="container maria-location-grid"><div><span className="eyebrow">LOCALIZAÇÃO</span><h2>Vamos encontrar o melhor caminho para o seu <em>atendimento.</em></h2><p>Endereço em breve. Por enquanto, atendemos em São Paulo — entre em contato para confirmar a disponibilidade.</p><button className="btn btn-primary" onClick={() => goWhatsapp("consultar endereço e disponibilidade de atendimento")}><MessageCircle size={18}/> Consultar localização pelo WhatsApp</button><p className="maria-map-note">Endereço completo em breve.</p></div><div className="maria-map-frame"><iframe title="Mapa de São Paulo" src="https://maps.google.com/maps?q=S%C3%A3o%20Paulo%2C%20SP%2C%20Brasil&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div></div></section>


      <section className="section faq-section" id="duvidas"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Suas dúvidas também <em>fazem parte do cuidado.</em></h2><p>Se não encontrar sua pergunta aqui, fale com a equipe da Clínica Domiciliar Naamã pelo WhatsApp.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida")}><MessageCircle size={18}/> Tirar uma dúvida</button></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section className="section final-cta maria-final"><div className="final-glow"/><div className="container narrow center"><span className="eyebrow">VAMOS CONVERSAR?</span><h2>O próximo passo começa com uma conversa.</h2><p>Entre em contato para compartilhar sua necessidade e receber informações sobre o cuidado especializado com feridas e pé diabético.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre atendimento")}><MessageCircle size={18}/> Falar com a equipe pelo WhatsApp</button></div></section>

      <footer className="footer maria-footer"><div className="container footer-grid"><div className="footer-brand"><img className="footer-logo" src={logoNaama.url} alt="Clínica Domiciliar Naamã" loading="lazy"/><p>Cuidado especializado para feridas, pé diabético e curativos, com atenção individualizada.</p><div className="team-credentials"><span><strong>Edelaine</strong> · Enfermeira RT · COREN-SP 374170</span><span><strong>Fátima</strong> · COREN-SP 1397205</span></div></div><div><h4>Navegação</h4><a href="#sobre">Sobre a clínica</a><a href="#tratamentos">Áreas de atuação</a><a href="#como-funciona">Como funciona</a><a href="#duvidas">Perguntas frequentes</a></div><div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={14}/> +55 (12) 98829-8061</a><span><ShieldCheck size={14}/> Cuidado responsável e individualizado</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Clínica Domiciliar Naamã. Enfermeira RT: Edelaine · COREN-SP 374170</span><span>Feridas • Pé diabético • Curativos especializados</span></div></footer>

      <a className="floating-wa maria-floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a equipe pelo WhatsApp"><img src="/whatsapp-flutuante/image.png" alt="" /><span>WhatsApp</span></a>
    </main>
  );
}
