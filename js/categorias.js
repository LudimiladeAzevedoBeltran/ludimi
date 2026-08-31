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
      }
    ]
  },
  {
    id: "geo",
    nome: "Geotecnologias",
    desc: "SIG, geoprocessamento, sensoriamento remoto e dados geográficos.",
    icone: "&#127757;",
    itens: [
      {
        titulo: "Bancos de Dados Geográficos — Guia",
        tag: "Geotecnologias",
        resumo: "Dados espaciais, modelos matricial e vetorial, PostGIS e geopandas.",
        data: "2026-08-31",
        link: "guias/banco-de-dados-geograficos.html"
      },
      {
        titulo: "Geoprocessamento Aplicado — Guia",
        tag: "Geotecnologias",
        resumo: "Do conceito ao mapeamento de bacias e ao planejamento urbano.",
        data: "2026-08-31",
        link: "guias/geoprocessamento-aplicado.html"
      },
      {
        titulo: "Sensoriamento Remoto e VANTs — Guia",
        tag: "Geotecnologias",
        resumo: "Espectro eletromagnético, satélites e drones, com regulamentação.",
        data: "2026-08-31",
        link: "guias/sensoriamento-remoto-vants.html"
      },
      {
        titulo: "Sistemas de Informação Geográfica (SIG) — Guia",
        tag: "Geotecnologias",
        resumo: "Componentes de um SIG, aplicações e a escolha entre ArcGIS e QGIS.",
        data: "2026-08-31",
        link: "guias/sistemas-informacao-geografica.html"
      },
      {
        titulo: "Processamento de Dados Geográficos — Guia",
        tag: "Geotecnologias",
        resumo: "A ciência da informação geográfica: aplicações, disciplinas e funções de um SIG.",
        data: "2026-08-31",
        link: "guias/processamento-dados-geograficos.html"
      },
      {
        titulo: "Python — Gráficos de Dados Espaciais",
        tag: "Python",
        resumo: "Mapas temáticos, pontos e polígonos com geopandas e shapely.",
        data: "2026-08-31",
        link: "guias/python-intermediario-graficos-espaciais.html"
      },
      {
        titulo: "Python — Dados Espaciais: CRS e Análise",
        tag: "Python",
        resumo: "Reprojeção, joins espaciais e mapas interativos com folium.",
        data: "2026-08-31",
        link: "guias/python-avancado-dados-espaciais-crs.html"
      }
    ]
  },
  {
    id: "ia",
    nome: "Inteligência Artificial",
    desc: "Machine learning, deep learning e o profissional do futuro.",
    icone: "&#129504;",
    itens: [
      {
        titulo: "Machine Learning e Deep Learning — Guia",
        tag: "Inteligência Artificial",
        resumo: "Tipos de aprendizado, overfitting, validação e redes neurais.",
        data: "2026-08-31",
        link: "guias/machine-learning-deep-learning.html"
      },
      {
        titulo: "Meios Digitais e o Profissional do Futuro — Guia",
        tag: "Inteligência Artificial",
        resumo: "Transformação digital, tecnologias emergentes e competências.",
        data: "2026-08-31",
        link: "guias/transformacao-digital-profissional-futuro.html"
      }
    ]
  },
  {
    id: "python",
    nome: "Python",
    desc: "Trilha de programação do básico ao avançado, com código e explicação intercalados.",
    icone: "&#128220;",
    niveis: ["Básico", "Intermediário", "Avançado"],
    itens: [
      {
        titulo: "Python — Primeiros Passos",
        tag: "Básico",
        resumo: "Variáveis, tipos de dados e operadores: o ponto de partida da trilha.",
        data: "2026-08-31",
        link: "guias/python-basico-primeiros-passos.html"
      },
      {
        titulo: "Python — Estruturas de Dados",
        tag: "Básico",
        resumo: "Listas, tuplas e dicionários para guardar e percorrer vários valores.",
        data: "2026-08-31",
        link: "guias/python-basico-estruturas-de-dados.html"
      },
      {
        titulo: "Python — Condicionais e Funções",
        tag: "Básico",
        resumo: "Tomar decisões com if e reaproveitar código com funções: a base da lógica.",
        data: "2026-08-31",
        link: "guias/python-basico-condicionais-funcoes.html"
      },
      {
        titulo: "Python — Pandas",
        tag: "Intermediário",
        resumo: "A biblioteca que analisa dados de verdade: ler, explorar, filtrar e agrupar.",
        data: "2026-08-31",
        link: "guias/python-intermediario-pandas.html"
      },
      {
        titulo: "Python — Gráficos",
        tag: "Intermediário",
        resumo: "Visualizar dados com matplotlib e seaborn: do simples ao gráfico publicável.",
        data: "2026-08-31",
        link: "guias/python-intermediario-graficos.html"
      },
      {
        titulo: "Python — Estatística e Distribuições",
        tag: "Intermediário",
        resumo: "Média, desvio, padronização e distribuição normal com scipy.",
        data: "2026-08-31",
        link: "guias/python-intermediario-estatistica-distribuicoes.html"
      },
      {
        titulo: "Python — Gráficos de Dados Espaciais",
        tag: "Intermediário",
        resumo: "Mapas temáticos, pontos e polígonos com geopandas e shapely.",
        data: "2026-08-31",
        link: "guias/python-intermediario-graficos-espaciais.html"
      },
      {
        titulo: "Python — Regressão Linear",
        tag: "Avançado",
        resumo: "Modelar relações e prever com regressão simples e múltipla.",
        data: "2026-08-31",
        link: "guias/python-avancado-regressao-linear.html"
      },
      {
        titulo: "Python — Dados Espaciais: CRS e Análise",
        tag: "Avançado",
        resumo: "Sistemas de coordenadas, reprojeção, joins espaciais e mapas interativos.",
        data: "2026-08-31",
        link: "guias/python-avancado-dados-espaciais-crs.html"
      }
    ]
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
  const corNivel =
    item.tag === "Avançado" ? "nivel-avancado"
    : item.tag === "Intermediário" ? "nivel-intermediario"
    : "nivel-basico";
  return `
    <a class="cartao" href="${item.link}">
      <span class="tag ${item.tag ? corNivel : ""}">${item.tag}</span>
      <h4>${item.titulo}</h4>
      <p>${item.resumo}</p>
      <div class="data">${item.data}</div>
    </a>`;
}

function categoriaPorId(id) {
  return categorias.find((c) => c.id === id);
}
