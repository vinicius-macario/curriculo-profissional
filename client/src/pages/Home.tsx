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
    period: "Novembro 2025 - Julho 2026",
    organization: "C40 Cities",
    role: "Gerente Sênior de Finanças Locais",
    details: [
      "Apoio a 20 cidades brasileiras na estruturação de projetos de ação climática nas áreas de transporte e gestão de resíduos, incluindo identificação de fontes, instrumentos e programas de financiamento e análise de sua adequação às necessidades dos municípios.",
      "Estruturação do componente financeiro da Assistência Técnica de 26 projetos, incluindo definição de produtos relacionados a orçamento, modelagem econômico-financeira e estratégias de financiamento.",
      "Gestão da parceria com o WRI Brasil para o desenvolvimento da agenda técnica de financiamento climático local e articulação com instituições financeiras e bancos de desenvolvimento, com foco na identificação e superação de barreiras regulatórias ao financiamento climático subnacional urbano.",
      "Gestão da parceria com a Cities Climate Finance Leadership Alliance (CCFLA) para a publicação e disseminação do relatório State of Cities Climate Finance, incluindo análise do financiamento climático urbano no Brasil.",
      "Gestão da parceria com a Frente Nacional de Prefeitos (FNP) para criação e facilitação de grupo de trabalho com o Fórum de Secretários de Finanças, voltado à identificação de barreiras e proposição de soluções para ampliar o acesso dos municípios ao financiamento de ações climáticas.",
      "Facilitação do CHAMP Local Climate Finance Working Group, plataforma de coordenação entre Banco Mundial, GIZ, WRI, CCFLA, FNP e outros atores estratégicos do financiamento subnacional no Brasil.",
    ],
  },
  {
    period: "Janeiro 2024 — Outubro 2025",
    organization: "Secretaria Municipal da Fazenda de São Paulo",
    role: "Chefe da Assessoria Econômica",
    details: [
      "Integrante da Unidade de Gestão do projeto de eletrificação da frota de ônibus, responsável pela estruturação dos aspectos econômico-financeiros, da governança e das regras de compliance. Atuação direta no desenvolvimento e negociação de operações de crédito com o Banco Mundial, BID, Banco da China e BNDES, viabilizando US$ 1,2 bilhão em investimentos para a implantação de 3.000 ônibus elétricos.",
      "Ponto focal na Rede de Secretários de Finanças de Cidades da América Latina do BID, promovendo intercâmbio e articulação entre governos subnacionais da região.",
      "Responsável pela consolidação do orçamento das receitas municipais, estimado em US$ 23 bilhões para 2026, abrangendo receitas tributárias, operações de crédito, instrumentos de captura de valorização imobiliária, transferências federais e estaduais e subvenções.",
      "Elaboração do Relatório de Gestão Fiscal, apresentado trimestralmente à Câmara Municipal, com análise do cumprimento das metas fiscais e da trajetória da dívida pública.",
      "Assessoramento direto ao Secretário da Fazenda em temas relacionados a financiamento e finanças públicas, incluindo reequilíbrio econômico-financeiro de contratos de PPP, avaliação de impacto de políticas públicas e reforma tributária.",
      "Coordenação de equipe multidisciplinar de nove profissionais, incluindo advogados, contadores, administradores e economistas.",
    ],
  },
  {
    period: "Maio 2024 — Outubro 2025 ",
    organization: "SPDA — São Paulo Desenvolvimento e Mobilização de Ativos",
    role: "Membro do Conselho de Administração",
    details: [
      "Análise e aprovação de garantias relacionadas a projetos de parcerias público-privadas no setor habitacional.",
      "Acompanhamento da implementação da estratégia institucional e dos mecanismos de aprimoramento da governança.",
    ],
  },
  {
    period: "Junho 2023 — Dezembro 2023",
    organization: "Secretaria Municipal da Fazenda de São Paulo",
    role: "Assessor na Assessoria Econômica",
    details: [
      "Ofereceu suporte técnico à eletrificação do transporte público, incluindo operações de crédito com bancos multilaterais e nacionais.",
    ],
  },
  {
    period: "Junho 2016 — Setembro 2021",
    organization: "Secretaria Municipal de Governo de São Paulo",
    role: "Analista de Políticas Públicas e Gestão Governamental",
    details: [
      "Atuação na unidade de planejamento estratégico e apoio ao sistema de governança para o monitoramento de indicadores e orçamento de metas prioritárias do Prefeito",
      "Foco de atuação junto às Secretarias de Transporte e Mobilidade, de Infraestrutura Urbana, e de Meio Ambiente; incluindo apoio à estruturação da Agenda ODS 2030 no Município.",
      "Organização e participação em audiências e consultas públicas, incluindo definições metodológicas e sistematização dos resultados.",
      "Elaboração de relatórios e balanços, apresentação de resultados para equipes técnicas, médio e alto escalão.",
      "Atuação junto às unidades de planejamento dos demais órgãos para elaboração de metas, projetos e KPIs.
",
    ],
  },
];

const earlierExperience = [
  ["2021 — 2022", "Consórcio de Municípios Conectar", "Assessor Técnico"],
  ["2015 — 2016", "Secretaria-Geral da Presidência da República", "Coordenador de Relações Institucionais"],
  ["2014 — 2015", "Ministério do Desenvolvimento Agrário", "Assessor da Secretaria de Desenvolvimento Territorial"],
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
            <p className="aside-note">Finanças públicas, infraestrutura e serviços urbanos, clima.</p>
            <div className="contact-panel">
              <p>Contato</p>
              <a href="mailto:macariopvinicius@gmail.com">macariopvinicius@gmail.com</a>
              <a href="https://www.linkedin.com/in/vinicius-macario/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} strokeWidth={1.8} /></a>
            </div>
          </aside>
          <div className="profile-main">
            <p className="display-statement">
              Profissional com mais de 10 anos em políticas públicas, finanças públicas e financiamento do desenvolvimento, com experiência em financiamento climático, bancos multilaterais, estruturação financeira, projetos de infraestrutura e articulação institucional.
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
