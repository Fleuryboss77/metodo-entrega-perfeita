import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  CreditCard,
  Hammer,
  Menu,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const checkoutUrl = "#oferta";

const steps = [
  ["01", "Inspecionar", "Avaliação inicial do imóvel e dos resíduos antes de começar."],
  ["02", "Preparar", "Equipamentos, proteção e produtos certos para cada situação."],
  ["03", "Remover", "Eliminação segura de cimento, tinta, gesso e sujeiras pesadas."],
  ["04", "Limpar", "Higienização técnica de superfícies, pisos, paredes e vidros."],
  ["05", "Detalhar", "Cantos, trilhos, rejuntes e aqueles detalhes que fazem diferença."],
  ["06", "Revisar", "Controle de qualidade para encontrar falhas antes do cliente."],
  ["07", "Entregar", "Apresentação profissional que transforma limpeza em experiência."],
];

const modules = [
  ["Módulo 1", "Fundamentos e Avaliação de Imóveis Pós-Obra", "Aprenda a identificar o nível de sujeira, resíduos e cuidados necessários antes de tocar em qualquer superfície."],
  ["Módulo 2", "Equipamentos e Produtos Essenciais", "Monte seu kit de trabalho sem gastar demais e entenda o que realmente precisa levar para cada serviço."],
  ["Módulo 3", "As 7 Etapas de Execução", "Siga uma sequência lógica para trabalhar com mais segurança, velocidade e menos retrabalho."],
  ["Módulo 4", "Técnicas para Vidros, Trilhos, Rejuntes e Pisos", "Resolva pontos críticos que costumam consumir tempo e podem causar prejuízo quando tratados de forma errada."],
  ["Módulo 5", "Precificação e Primeiros Clientes", "Entenda como estruturar o preço do serviço e se apresentar de forma mais profissional."],
];

const faqs = [
  ["Como recebo o acesso ao material?", "Após a confirmação do pagamento, o material é enviado para o e-mail informado na compra, em PDF. O acesso é imediato."],
  ["Preciso ter experiência prévia?", "Não. O Método foi estruturado para quem está começando e também para quem já trabalha com limpeza e quer profissionalizar o processo."],
  ["Preciso comprar máquinas caras para começar?", "Não. O conteúdo mostra o essencial para começar com baixo investimento, evitando compras desnecessárias."],
  ["Tenho garantia?", "Sim. Você tem 7 dias para conhecer o material. Se entender que não é para você, pode solicitar o reembolso dentro do prazo da garantia."],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openModule, setOpenModule] = useState<number | null>(0);

  const go = () => setMenuOpen(false);

  return (
    <div className="landing-page">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={go} aria-label="Método Entrega Perfeita">
            <span className="brand-mark"><Sparkles size={16} /></span>
            <span>MÉTODO <strong>ENTREGA PERFEITA</strong></span>
          </a>
          <button className="mobile-menu" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <a href="#metodo" onClick={go}>O Método</a>
            <a href="#publico" onClick={go}>Para Quem É</a>
            <a href="#conteudo" onClick={go}>O Conteúdo</a>
            <a href="#bonuses" onClick={go}>Bônus</a>
            <a href="#faq" onClick={go}>FAQ</a>
            <a className="nav-cta" href="#oferta" onClick={go}>Quero me Inscrever <ArrowRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Treinamento Prático & Metodologia Passo a Passo</div>
              <h1>Transforme a <em>Limpeza Pós-Obra</em> em uma Fonte de Renda Profissional e Lucrativa.</h1>
              <p className="hero-subtitle">Aprenda a sequência exata de <strong>7 etapas</strong> para limpar, organizar e entregar qualquer imóvel pós-reforma sem estragar superfícies — e cobrando o preço justo.</p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-large" href="#oferta">Quero Garantir Meu Acesso por R$ 37 <ArrowRight size={18} /></a>
                <span className="microcopy"><ShieldCheck size={15} /> Compra protegida • 7 dias de garantia</span>
              </div>
              <div className="trust-row">
                <div><ShieldCheck size={20} /><span><b>7 dias</b><small>Garantia</small></span></div>
                <div><Zap size={20} /><span><b>Imediato</b><small>Acesso ao material</small></span></div>
                <div><CreditCard size={20} /><span><b>Seguro</b><small>Pagamento protegido</small></span></div>
              </div>
            </div>
            <div className="hero-visual" aria-label="Mockup do Método Entrega Perfeita">
              <div className="floating-tag tag-top"><Check size={15} /> 7 etapas organizadas</div>
              <div className="device-shadow" />
              <div className="book-mockup">
                <div className="book-spine" />
                <div className="book-cover">
                  <span className="cover-mini">GUIA PRÁTICO</span>
                  <div className="cover-icon"><ClipboardCheck size={34} /></div>
                  <h2>MÉTODO<br /><strong>ENTREGA<br />PERFEITA</strong></h2>
                  <p>Limpeza Pós-Obra<br />Profissional</p>
                  <div className="cover-line" />
                  <small>E-BOOK + BÔNUS</small>
                </div>
              </div>
              <div className="checklist-card">
                <div className="checklist-head"><span>CHECKLIST</span><ClipboardCheck size={17} /></div>
                {["Inspecionar imóvel", "Preparar equipamentos", "Remover resíduos", "Revisar entrega"].map((item, i) => <div className="check-item" key={item}><span className="check-circle"><Check size={11} /></span>{item}<small>{i < 3 ? "OK" : "FINAL"}</small></div>)}
                <div className="progress"><span /></div>
                <div className="progress-label"><span>Progresso</span><b>100%</b></div>
              </div>
              <div className="floating-tag tag-bottom"><Star size={14} fill="currentColor" /> Entrega impecável</div>
            </div>
          </div>
        </section>

        <section className="pain-section section" id="problemas">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-kicker">A diferença entre faxina e serviço profissional</span>
              <h2>Limpeza Pós-Obra <span>NÃO É</span> apenas uma faxina pesada.</h2>
              <p>Remover cimento, tinta, cola, gesso, argamassa e poeira fina exige técnica. Sem um processo, você pode estragar superfícies caras, perder horas e terminar o serviço com retrabalho.</p>
            </div>
            <div className="pain-grid">
              {[
                [Target, "Não sabe por onde começar?", "Sem uma ordem clara, cada ambiente vira uma tentativa — e o serviço demora mais."],
                [ShieldCheck, "Medo de estragar pisos ou vidros?", "Alguns resíduos e superfícies exigem cuidados específicos. O erro pode sair caro."],
                [PackageCheck, "Dúvidas sobre quais produtos usar?", "Evite comprar tudo o que aparece pela frente e aprenda a montar um kit inteligente."],
                [CreditCard, "Não sabe quanto cobrar?", "Aprenda a pensar o preço do serviço de forma mais profissional e evitar trabalhar no prejuízo."],
              ].map(([Icon, title, text]) => <div className="pain-card" key={title as string}><div className="icon-box"><Icon size={21} /></div><h3>{title as string}</h3><p>{text as string}</p></div>)}
            </div>
          </div>
        </section>

        <section className="method-section section" id="metodo">
          <div className="container">
            <div className="section-heading centered light-heading">
              <span className="section-kicker">O mecanismo</span>
              <h2>Conheça o Método das <span>7 Etapas</span> para uma Entrega Impecável.</h2>
              <p>Um processo estruturado para transformar o caos pós-obra em um imóvel pronto para morar — com começo, meio e fim.</p>
            </div>
            <div className="steps-grid">
              {steps.map(([number, title, text], i) => <div className="step-card" key={number}><div className="step-number">{number}</div><div className="step-icon">{i === 0 ? <Target /> : i === 1 ? <PackageCheck /> : i === 2 ? <Hammer /> : i === 3 ? <Sparkles /> : i === 4 ? <ClipboardCheck /> : i === 5 ? <BadgeCheck /> : <Check />}</div><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="audience-section section" id="publico">
          <div className="container audience-grid">
            <div className="audience-intro"><span className="section-kicker">Feito para você</span><h2>Um método para <span>começar</span> e para <span>evoluir.</span></h2><p>Não importa se você está buscando uma nova fonte de renda ou já presta serviços. O foco é colocar ordem no processo e elevar o padrão da entrega.</p><a href="#oferta" className="text-link">Quero aprender o método <ArrowRight size={16} /></a></div>
            <div className="audience-card"><div className="audience-icon"><Zap /></div><span>PARA INICIANTES</span><h3>Comece do zero com direção.</h3><p>Para quem deseja aprender uma nova profissão, trabalhar por conta própria e começar com baixo investimento inicial.</p><ul><li><Check /> Sequência passo a passo</li><li><Check /> Equipamentos essenciais</li><li><Check /> Base para conseguir os primeiros clientes</li></ul></div>
            <div className="audience-card featured"><div className="audience-icon"><Star /></div><span>PARA PROFISSIONAIS</span><h3>Organize e profissionalize seu serviço.</h3><p>Para quem já trabalha com limpeza, mas quer reduzir erros, ganhar produtividade e transmitir mais profissionalismo.</p><ul><li><Check /> Processo padronizado</li><li><Check /> Menos retrabalho e desperdício</li><li><Check /> Orientação de precificação</li></ul></div>
          </div>
        </section>

        <section className="content-section section" id="conteudo">
          <div className="container content-grid">
            <div className="content-sticky"><span className="section-kicker">Por dentro do material</span><h2>Você não recebe apenas informação. <span>Recebe um caminho.</span></h2><p>O e-book foi pensado para ser consultado durante a preparação e a execução do serviço, com conteúdo direto e aplicável.</p><div className="content-stat"><BookOpen size={19} /><div><b>5 módulos</b><small>do fundamento à primeira venda</small></div></div></div>
            <div className="module-list">{modules.map(([label, title, text], i) => <div className={openModule === i ? "module open" : "module"} key={label}><button onClick={() => setOpenModule(openModule === i ? null : i)}><span className="module-number">0{i + 1}</span><span className="module-title"><small>{label}</small>{title}</span><ChevronDown size={19} /></button>{openModule === i && <div className="module-body"><p>{text}</p><span><Check size={15} /> Conteúdo prático e organizado</span></div>}</div>)}</div>
          </div>
        </section>

        <section className="bonus-section section" id="bonuses">
          <div className="container">
            <div className="section-heading centered"><span className="section-kicker">Além do e-book</span><h2>Você também recebe <span>3 bônus práticos.</span></h2><p>Materiais pensados para tirar o método do papel e facilitar sua rotina de trabalho.</p></div>
            <div className="bonus-grid">
              {[ [ClipboardCheck, "Bônus 01", "Checklist Digital de Inspeção & Entrega", "Pronto para usar antes, durante e no final de cada serviço."], [BookOpen, "Bônus 02", "Guia Rápido de Produtos & Superfícies", "Saiba o que usar — e principalmente o que EVITAR — em cada situação."], [CreditCard, "Bônus 03", "Modelo de Tabela de Precificação", "Uma base simples para organizar seus custos e pensar no preço do serviço."] ].map(([Icon, label, title, text]) => <div className="bonus-card" key={label as string}><div className="bonus-top"><div className="bonus-icon"><Icon size={23} /></div><span>{label as string}</span></div><h3>{title as string}</h3><p>{text as string}</p><div className="bonus-included"><Check size={15} /> Incluso na compra</div></div>)}
            </div>
          </div>
        </section>

        <section className="offer-section section" id="oferta">
          <div className="container offer-wrap">
            <div className="offer-glow" />
            <div className="offer-copy"><span className="offer-badge"><Sparkles size={14} /> CONDIÇÃO ESPECIAL DE LANÇAMENTO</span><h2>Comece agora a entregar serviços com <span>mais método e confiança.</span></h2><p>Você pode continuar tentando descobrir tudo sozinho — ou ter um caminho estruturado para consultar sempre que precisar.</p><div className="offer-list"><div><Check /> E-book completo Método Entrega Perfeita</div><div><Check /> Todos os materiais complementares & bônus</div><div><Check /> Acesso imediato e vitalício</div></div></div>
            <div className="price-card"><div className="price-label">DE <s>R$ 97,00</s> POR APENAS</div><div className="price"><small>R$</small>37<span>,00</span></div><div className="installment">ou 4x de R$ 9,90</div><a className="btn btn-yellow btn-large full" href={checkoutUrl}>SIM! QUERO O MÉTODO POR R$ 37 <ArrowRight size={18} /></a><div className="secure-line"><ShieldCheck size={16} /> Pagamento seguro e acesso imediato</div><div className="guarantee"><div className="guarantee-seal"><ShieldCheck size={27} /></div><div><b>7 DIAS DE GARANTIA</b><p>Teste o material por 7 dias. Se não gostar, solicite o reembolso dentro do prazo.</p></div></div></div>
          </div>
        </section>

        <section className="faq-section section" id="faq">
          <div className="container faq-grid"><div><span className="section-kicker">Ainda ficou alguma dúvida?</span><h2>Perguntas <span>frequentes.</span></h2><p>As respostas mais importantes antes de começar.</p><a href="#oferta" className="btn btn-primary">Quero garantir meu acesso <ArrowRight size={17} /></a></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={openFaq === i ? "faq open" : "faq"} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown size={18} /></button>{openFaq === i && <div className="faq-answer"><p>{a}</p></div>}</div>)}</div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark"><Sparkles size={16} /></span><span>MÉTODO <strong>ENTREGA PERFEITA</strong></span></a><p>Conhecimento prático para elevar o padrão da limpeza pós-obra.</p></div><div className="footer-links"><a href="#metodo">O Método</a><a href="#conteudo">Conteúdo</a><a href="#bonuses">Bônus</a><a href="#faq">FAQ</a></div><div className="footer-legal"><a href="#">Termos de Uso</a><a href="#">Políticas de Privacidade</a><a href="#">Suporte ao Cliente</a></div></div><div className="container copyright">Direitos Reservados © {new Date().getFullYear()} Método Entrega Perfeita.</div></footer>
    </div>
  );
}
