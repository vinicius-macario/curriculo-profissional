/**
 * Direção visual: Dossiê Editorial Contemporâneo — leitura assimétrica,
 * fundo marfim, azul-petróleo como assinatura e tipografia editorial.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Layers3,
  MoveUpRight,
  Sparkles,
} from "lucide-react";

const experience = [
  {
    period: "Jan. 2024 — atual",
    organization: "Secretaria Municipal da Fazenda de São Paulo",
    role: "Chefe da Assessoria Econômica",
    details: [
      "Atua na estruturação econômico-financeira, governança e regras de compliance do projeto de eletrificação da frota de ônibus da cidade.",
      "Contribuiu para operações de crédito com Banco Mundial, BID, Banco da China e BNDES, viabilizando US$ 1,2 bilhão para 3.000 ônibus elétricos.",
      "Coordena uma equipe multidisciplinar de 9 profissionais e consolida a projeção das receitas municipais para o orçamento de 2026.",
    ],
  },
  {
    period: "2024 — atual",
    organization: "SPDA — São Paulo Desenvolvimento e Mobilização de Ativos",
    role: "Membro do Conselho de Administração",
    details: [
      "Participa da governança de sociedade de economia mista voltada à otimização de recursos financeiros para projetos prioritários e à administração de dívidas do Município.",
    ],
  },
  {
    period: "Atuação internacional",
    organization: "C40 Cities",
    role: "Gerente Sênior de Finanças Locais",
    details: [
      "Apoia 20 cidades na formulação de projetos de transporte e gestão de resíduos, mapeando fontes de financiamento e programas de apoio aos municípios.",
      "Estrutura o componente financeiro da assistência técnica de 26 projetos e conduz parcerias com WRI Brasil, CCFLA e FNP em financiamento climático urbano.",
    ],
  },
  {
    period: "Jun. 2023 — Dez. 2023",
    organization: "Secretaria Municipal da Fazenda de São Paulo",
    role: "Assessor na Assessoria Econômica",
    details: [
      "Ofereceu suporte técnico à eletrificação do transporte público, incluindo operações de crédito com bancos multilaterais e nacionais, em iniciativas que totalizaram R$ 6 bilhões em investimentos.",
    ],
  },
  {
    period: "Out. 2022 — Mai. 2023",
    organization: "Secretaria Municipal de Saúde de São Paulo",
    role: "Analista de Políticas Públicas e Gestão Governamental",
    details: [
      "Trabalhou na integração entre política de saúde, planejamento urbano e análise orçamentária.",
    ],
  },
  {
    period: "Jun. 2016 — Set. 2021",
    organization: "Secretaria Municipal de Governo de São Paulo",
    role: "Analista de Políticas Públicas e Gestão Governamental",
    details: [
      "Atuou no planejamento estratégico, monitoramento de metas prioritárias, orçamento e indicadores, com foco em mobilidade, infraestrutura urbana e meio ambiente.",
      "Apoiou a estruturação da Agenda ODS 2030 no Município, a política de bonificação por resultados e a formação em gerenciamento de projetos.",
    ],
  },
];

const earlierExperience = [
  ["2021 — 2022", "Consórcio Conectar", "Assessor Técnico"],
  ["2015 — 2016", "Secretaria-Geral da Presidência da República", "Coordenador de Relações Institucionais"],
  ["2014 — 2015", "Ministério do Desenvolvimento Agrário", "Assessor da Secretaria de Desenvolvimento Territorial"],
  ["2013", "Prefeitura Municipal de São Paulo", "Coordenador-Geral de Conectividade e Convergência Digital"],
  ["2009 — 2011", "Ministério do Desenvolvimento Agrário", "Coordenador do Núcleo de Estudos Agrários"],
];

const education = [
  {
    year: "2021",
    course: "Especialização em Análise de Big Data",
    institution: "Lab Data / Fundação Instituto de Administração (FIA)",
    theme: "Tempo de atendimento e atrasos no SP 156 da Prefeitura Municipal de São Paulo.",
  },
  {
    year: "2013",
    course: "Mestrado em Administração Pública e Governo",
    institution: "Fundação Getulio Vargas (FGV-SP)",
    theme: "Coordenação governamental no presidencialismo de coalizão: o PAC e seu impacto no Ministério dos Transportes.",
  },
  {
    year: "2008",
    course: "Graduação em Ciências Sociais",
    institution: "Universidade de São Paulo (USP)",
    theme: "Formação de base para análise social, institucional e de políticas públicas.",
  },
];

const expertise = [
  "Finanças públicas e orçamento",
  "Financiamento climático urbano",
  "Políticas públicas e governança",
  "Mobilidade sustentável",
  "Estruturação de projetos",
  "Dados, indicadores e monitoramento",
  "Relações institucionais",
  "Gestão de equipes multidisciplinares",
];

function SectionHeading({ eyebrow, title, index }: { eyebrow: string; title: string; index: string }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const handlePrint = () => window.print();

  return (
    <div className="resume-shell">
      <header className="topbar" aria-label="Navegação principal">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="monogram-mark" aria-hidden="true" />
          <span>Dossiê profissional</span>
        </a>
        <nav className="desktop-nav" aria-label="Seções do currículo">
          <a href="#perfil">Perfil</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#formacao">Formação</a>
          <a href="#publicacao">Publicação</a>
        </nav>
        <button className="print-link" type="button" onClick={handlePrint}>
          <Download size={15} strokeWidth={1.8} />
          <span>Imprimir</span>
        </button>
      </header>

      <main id="inicio">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid">
          <aside className="personal-rail reveal-item" aria-label="Ficha profissional">
            <div className="rail-heading"><span>Dossiê</span><strong>2026</strong></div>
            <dl>
              <div><dt>Foco</dt><dd>Finanças locais<br />e cidades</dd></div>
              <div><dt>Atuação</dt><dd>Setor público<br />e redes urbanas</dd></div>
              <div><dt>Contato</dt><dd><a className="contact-link" href="mailto:macariopvinicius@gmail.com">macariopvinicius<br />@gmail.com</a><a className="contact-link" href="https://www.linkedin.com/in/vinicius-macario/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={11} strokeWidth={1.8} /></a></dd></div>
            </dl>
            <a href="#trajetoria">Índice <span>03</span></a>
          </aside>

          <div className="hero-copy reveal-item">
              <p className="eyebrow hero-eyebrow"><Sparkles size={14} strokeWidth={1.7} /> currículo selecionado</p>
              <h1 id="hero-title">
                Vinicius
                <em> Macário.</em>
              </h1>
              <p className="hero-role">Finanças locais, políticas públicas e cidades.</p>
              <p className="hero-intro">
                Trajetória dedicada a planejamento, orçamento, mobilidade sustentável e estruturação de projetos para ampliar a capacidade de ação das cidades.
              </p>
              <div className="hero-actions">
                <a className="primary-action" href="#trajetoria">
                  Ver trajetória
                  <ArrowDownRight size={18} strokeWidth={1.8} />
                </a>
                <button className="text-action" type="button" onClick={handlePrint}>
                  Versão para impressão <MoveUpRight size={15} strokeWidth={1.8} />
                </button>
              </div>
            </div>

            <div className="hero-art reveal-item" aria-label="Composição editorial abstrata">
              <div className="hero-art-frame">
                <div className="hero-generated-image" role="img" aria-label="Composição abstrata em azul-petróleo, marfim e terracota" />
                <div className="hero-map-marks" aria-hidden="true"><span></span><span></span><span></span><i></i><i></i></div>
                <p className="hero-art-label">Mapa de operações<br />urbanas — 01</p>
              </div>
              <div className="hero-art-caption">
                <span>01</span>
                <p>Estratégia, orçamento e mobilidade em escala urbana.</p>
              </div>
            </div>
          </div>

          <div className="hero-facts reveal-item" aria-label="Resumo de atuação">
            <div><strong>Desde 2009</strong><span>experiência no setor público</span></div>
            <div><strong>20 cidades</strong><span>apoiadas na estruturação de projetos</span></div>
            <div><strong>26 projetos</strong><span>com assistência técnica financeira</span></div>
            <div><strong>US$ 1,2 bi</strong><span>em investimentos para ônibus elétricos</span></div>
          </div>
        </section>

        <section id="perfil" className="editorial-section profile-section">
          <aside className="section-aside">
            <SectionHeading eyebrow="Síntese" title="Perfil" index="02" />
            <p className="aside-note">Uma atuação que combina análise econômica, coordenação institucional e entrega de políticas públicas.</p>
          </aside>
          <div className="profile-main">
            <p className="display-statement">
              Estrutura estratégias financeiras e institucionais para tornar <span>projetos urbanos</span> tecnicamente sólidos, financiáveis e alinhados ao interesse público.
            </p>
            <div className="profile-detail-grid">
              <div className="profile-card">
                <BriefcaseBusiness size={21} strokeWidth={1.5} />
                <h3>Foco de atuação</h3>
                <p>Finanças públicas, financiamento climático, mobilidade, planejamento urbano e governança intersetorial.</p>
              </div>
              <div className="profile-card">
                <Layers3 size={21} strokeWidth={1.5} />
                <h3>Modo de trabalho</h3>
                <p>Transforma agendas complexas em estratégias, operações, indicadores e articulações que viabilizam resultados.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="trajetoria" className="editorial-section trajectory-section">
          <aside className="section-aside sticky-aside">
            <SectionHeading eyebrow="Experiência" title="Trajetória" index="03" />
            <p className="aside-note">Atuação em governos, organismos internacionais e redes de cidades.</p>
            <div className="aside-art" role="img" aria-label="Abstração editorial com linha vertical e marcadores" />
          </aside>
          <div className="timeline" role="list">
            {experience.map((item, index) => (
              <article className="timeline-entry" key={`${item.organization}-${item.role}`} role="listitem">
                <div className="timeline-marker" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
                <div className="timeline-content">
                  <p className="period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <h4>{item.organization}</h4>
                  <ul>
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </article>
            ))}

            <div className="earlier-experience">
              <p className="eyebrow">Trajetória anterior</p>
              <div className="earlier-list">
                {earlierExperience.map(([period, organization, role]) => (
                  <div className="earlier-row" key={`${organization}-${role}`}>
                    <span>{period}</span>
                    <strong>{organization}</strong>
                    <p>{role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section expertise-section" aria-labelledby="expertise-title">
          <aside className="section-aside">
            <SectionHeading eyebrow="Competências" title="Expertise" index="04" />
          </aside>
          <div className="expertise-main">
            <h2 id="expertise-title" className="sr-only">Competências principais</h2>
            <p className="expertise-intro">Áreas que conectam orçamento, clima, território e capacidade institucional.</p>
            <div className="skills-cloud">
              {expertise.map((skill, index) => <span key={skill} className={index === 0 || index === 3 ? "skill-tag featured" : "skill-tag"}>{skill}</span>)}
            </div>
            <div className="consulting-strip">
              <ArrowUpRight size={22} strokeWidth={1.5} />
              <p>Experiência complementar como consultor da Organização Internacional do Trabalho, diretor-geral da APOGESP e fundador do Coletivo Arrua.</p>
            </div>
          </div>
        </section>

        <section id="formacao" className="editorial-section education-section">
          <aside className="section-aside">
            <SectionHeading eyebrow="Base acadêmica" title="Formação" index="05" />
          </aside>
          <div className="education-list">
            {education.map((item) => (
              <article className="education-card" key={item.course}>
                <span className="education-year">{item.year}</span>
                <div>
                  <GraduationCap size={22} strokeWidth={1.5} />
                  <h3>{item.course}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="education-theme">{item.theme}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="publicacao" className="publication-section">
          <div className="publication-art" aria-hidden="true">
            <div className="publication-generated-image" />
          </div>
          <div className="publication-content">
            <p className="eyebrow"><BookOpen size={14} strokeWidth={1.7} /> publicação</p>
            <h2>Capacidades estatais, democracia e política pública.</h2>
            <blockquote>
              “Democracia, arenas decisórias e políticas públicas: o Programa Minha Casa Minha Vida.”
            </blockquote>
            <p className="citation">LOUREIRO, M. R.; MACÁRIO, V. P.; GUERRA, P. H. In: <em>Capacidades Estatais e Democracia: Arranjos Institucionais de Políticas Públicas</em>. IPEA, 2014, p. 113–136.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio">
          <span className="monogram-mark" aria-hidden="true" />
          <span>Vinicius Macário</span>
        </a>
        <p>Gestão pública, financiamento e cidades sustentáveis.</p>
        <button type="button" onClick={handlePrint}>Imprimir currículo <Download size={14} strokeWidth={1.8} /></button>
      </footer>
    </div>
  );
}
