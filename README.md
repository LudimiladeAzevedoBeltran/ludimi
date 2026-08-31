# Ludimi — Blog

Blog estático em HTML/CSS para divulgação científica sobre dados, estatística, programação e pós-graduação.
Por **Ludimila Beltran**.

## Estrutura

```
ludimi/
├── index.html                  # Página inicial (cartões de temas)
├── about.html                  # Página "Sobre"
├── tema.html                   # Página de um tema (?t=<id>)
├── css/estilo.css              # Estilos do blog
├── js/categorias.js            # CATEGORIAS e seus itens (é aqui que se cadastra)
├── js/index.js                 # Renderiza a home
├── js/tema.js                  # Renderiza uma página de tema
├── guias/                      # Guias (html) + guia.css compartilhado
└── posts/                      # Páginas avulsas
```

## Como adicionar um conteúdo (guia ou post)

1. Crie o HTML em `guias/` (para um guia) ou `posts/` (para um post avulso). Para guias, use `guias/guia.css`.
2. Cadastre-o em `js/categorias.js`, dentro do tema adequado, no array `itens`:

```js
{
  titulo: "Título do conteúdo",
  tag: "Categoria",
  resumo: "Uma descrição curta.",
  data: "2026-08-31",
  link: "guias/meu-guia.html"
}
```

Se quiser que ele apareça também em "Mais recentes" na home, coloque a mesma entrada em `js/categorias.js` (arquivo `avulsos`), ou ele já entra se estiver em um tema.

## Publicar no GitHub Pages (grátis)

### Passo 1 — Enviar os arquivos com o GitHub Desktop
1. Abra o **GitHub Desktop**.
2. **File → New repository** — nome: `ludimi`; escolha a pasta como o local do repositório.
3. **Publicar repositório** (uncheck "Keep this code private" se quiser público).
4. Commit e Push dos arquivos.

### Passo 2 — Ativar o GitHub Pages
1. No GitHub, abra o repositório **ludimi** → **Settings** → **Pages**.
2. Em **Branch**, escolha `main` e a pasta `/(root)` — e salve.
3. Aguarde 1–2 minutos. Seu site estará em:

```
https://SEU-USUARIO.github.io/ludimi/
```

## Testar localmente

Abra o `index.html` diretamente no navegador, ou rode um servidor:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.
