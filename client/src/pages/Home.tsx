/**
 * Direção visual: currículo editorial minimalista — foco em trajetória,
 * formação e publicação, com marca pessoal discreta e leitura direta.
 */
import {
  ArrowUpRight,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const experience = [
  {
    period: "Nov. 2025 - Jul. 2026",
    organization: "C40 Cities",
    role: "Gerente Sênior de Finanças Locais",
    details: [
      "Apoia 20 cidades na formulação de projetos de transporte e gestão de resíduos, mapeando fontes de financiamento e programas de apoio aos municípios.",
      "Estrutura o componente financeiro da assistência técnica de 26 projetos e conduz parcerias com WRI Brasil, CCFLA e FNP em financiamento climático urbano.",
    ],
  },
  {
    period: "Jan. 2024 — Out. 2025",
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
    period: "Jun. 2023 — Dez. 2023",
    organization: "Secretaria Municipal da Fazenda de São Paulo",
    role: "Assessor na Assessoria Econômica",
    details: [
      "Ofereceu suporte técnico à eletrificação do transporte público, incluindo operações de crédito com bancos multilaterais e nacionais, em iniciativas que totalizaram R$ 6 bilhões em investimentos.",
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

function SectionHeading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="resume-shell">
      <header className="topbar" aria-label="Cabeçalho do currículo">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="monogram-mark" aria-hidden="true" />
          <span>Vinicius Macário</span>
        </a>
      </header>

      <main id="inicio">
        <section id="perfil" className="editorial-section profile-section">
          <aside className="section-aside">
            <SectionHeading eyebrow="Perfil" title="Vinicius Macário" />
            <p className="aside-note">Gestão pública, finanças locais e cidades sustentáveis.</p>
            <div className="contact-panel">
              <p>Contato</p>
              <a href="mailto:macariopvinicius@gmail.com">macariopvinicius@gmail.com</a>
              <a href="https://www.linkedin.com/in/vinicius-macario/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} strokeWidth={1.8} /></a>
            </div>
          </aside>
          <div className="profile-main">
            <p className="display-statement">
              Estrutura estratégias financeiras e institucionais para tornar <span>projetos urbanos</span> tecnicamente sólidos, financiáveis e alinhados ao interesse público.
            </p>
          </div>
        </section>

        <section id="trajetoria" className="editorial-section trajectory-section">
          <aside className="section-aside sticky-aside">
            <SectionHeading title="Trajetória" />
            <p className="aside-note">Atuação em governos, organismos internacionais e redes de cidades.</p>
            <div className="aside-art" role="img" aria-label="Abstração editorial com linha vertical e marcadores" />
          </aside>
          <div className="timeline" role="list">
            {experience.map((item) => (
              <article className="timeline-entry" key={`${item.organization}-${item.role}`} role="listitem">
                <div className="timeline-marker" aria-hidden="true" />
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

        <section id="formacao" className="editorial-section education-section">
          <aside className="section-aside">
            <SectionHeading title="Formação" />
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

        <section id="publicacao" className="editorial-section publication-section">
          <aside className="section-aside">
            <SectionHeading title="Publicação" />
          </aside>
          <div className="publication-content">
            <p className="eyebrow"><BookOpen size={14} strokeWidth={1.7} /> publicação</p>
            <h2>Capacidades estatais, democracia e política pública.</h2>
            <blockquote>“Democracia, arenas decisórias e políticas públicas: o Programa Minha Casa Minha Vida.”</blockquote>
            <p className="citation">LOUREIRO, M. R.; MACÁRIO, V. P.; GUERRA, P. H. In: <em>Capacidades Estatais e Democracia: Arranjos Institucionais de Políticas Públicas</em>. IPEA, 2014, p. 113–136.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio">
          <span className="monogram-mark" aria-hidden="true" />
          <span>Vinicius Macário</span>
        </a>
      </footer>
    </div>
  );
}
