/*
 * Categorias do Ludimi
 * Cada categoria agrupa itens (guias, artigos, posts) e é exibida como
 * um cartão na home. Ao clicar, o leitor é levado para tema.html?t=<id>,
 * que lista os itens daquela área.
 */
const categorias = [
  {
    id: "dados",
    nome: "Dados & Analytics",
    desc: "Big Data, ciência de dados, analytics, storytelling e arquitetura de dados.",
    icone: "&#128200;",
    itens: [
      {
        titulo: "Big Data e Ciência de Dados — Guia",
        tag: "Dados",
        resumo: "Um guia para descobrir o que são e como funcionam, com roteiro prático para começar.",
        data: "2026-08-31",
        link: "guias/big-data-ciencia-de-dados.html"
      },
      {
        titulo: "Analytics e a Tomada de Decisão — Guia",
        tag: "Dados",
        resumo: "Do dado bruto ao insight: os 4 níveis de análise e como embasar decisões.",
        data: "2026-08-31",
        link: "guias/analytics-tomada-de-decisao.html"
      },
      {
        titulo: "Data Storytelling — Guia",
        tag: "Comunicação",
        resumo: "A arte de contar histórias com dados: estruturas, público e princípios de visualização.",
        data: "2026-08-31",
        link: "guias/data-storytelling.html"
      },
      {
        titulo: "Arquitetura de Dados — Guia",
        tag: "Dados",
        resumo: "Como estruturar, armazenar e governar dados: warehouse, lake, lakehouse e data mesh.",
        data: "2026-08-31",
        link: "guias/arquitetura-de-dados.html"
      }
    ]
  },
  {
    id: "banco",
    nome: "Banco de Dados",
    desc: "Introdução a bancos de dados, banco de dados geográficos, coleta e armazenamento.",
    icone: "&#128451;",
    itens: [
      {
        titulo: "Introdução a Banco de Dados — Guia",
        tag: "Banco de dados",
        resumo: "Modelo relacional, entidades, normalização e SQL — com Python na prática.",
        data: "2026-08-31",
        link: "guias/introducao-banco-de-dados.html"
      },
      {
        titulo: "Mineração de Dados e NoSQL — Guia",
        tag: "Dados",
        resumo: "Classificação, agrupamento, associação e anomalias, e o que são os bancos NoSQL.",
        data: "2026-08-31",
        link: "guias/mineracao-dados-nosql.html"
      },
      {
        titulo: "Bancos de Dados Geográficos — Guia",
        tag: "Geotecnologias",
        resumo: "Dados espaciais, modelos matricial e vetorial, PostGIS e geopandas.",
        data: "2026-08-31",
        link: "guias/banco-de-dados-geograficos.html"
      }
    ]
  },
  {
    id: "geo",
    nome: "Geotecnologias",
    desc: "SIG, geoprocessamento, sensoriamento remoto e dados geográficos.",
    icone: "&#127757;",
    itens: []
  },
  {
    id: "ia",
    nome: "Inteligência Artificial",
    desc: "Machine learning, deep learning e o profissional do futuro.",
    icone: "&#129504;",
    itens: []
  },
  {
    id: "pesquisa",
    nome: "Pesquisa & Ética",
    desc: "Metodologia científica, segurança de dados e direitos humanos.",
    icone: "&#128218;",
    itens: []
  }
];

/* Itens avulsos (posts individuais), exibidos na home em "Mais recentes". */
const avulsos = [
  {
    titulo: "PCA e Clusters: uma introdução prática",
    tag: "Estatística",
    resumo: "Explorando como reduzir dimensionalidade e agrupar dados com PCA e clustering no Python.",
    data: "2026-08-01",
    link: "posts/pca-clusters.html"
  },
  {
    titulo: "Seleção de Features com Scikit-Learn",
    tag: "Programação",
    resumo: "Como escolher as variáveis mais relevantes para melhorar a performance dos modelos.",
    data: "2026-07-15",
    link: "posts/feature-selection.html"
  },
  {
    titulo: "Sobrevivendo à pós-graduação",
    tag: "Pós-graduação",
    resumo: "Rotina, ferramentas e lições que aprendi ao longo do mestrado.",
    data: "2026-07-01",
    link: "posts/pos-graduacao.html"
  }
];

function cartaoItem(item) {
  return `
    <a class="cartao" href="${item.link}">
      <span class="tag">${item.tag}</span>
      <h4>${item.titulo}</h4>
      <p>${item.resumo}</p>
      <div class="data">${item.data}</div>
    </a>`;
}

function categoriaPorId(id) {
  return categorias.find((c) => c.id === id);
}
