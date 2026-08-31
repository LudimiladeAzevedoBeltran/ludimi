function renderizarTemas() {
  const grid = document.getElementById("grid-temas");
  grid.innerHTML = categorias
    .map((cat) => {
      const qtd = cat.itens.length;
      return `
        <a class="cartao cartao-tema" href="tema.html?t=${cat.id}">
          <div class="icone-tema">${cat.icone}</div>
          <h4>${cat.nome}</h4>
          <p>${cat.desc}</p>
          <div class="data">${qtd > 0 ? qtd + (qtd === 1 ? " guia" : " guias") : "em breve"}</div>
        </a>`;
    })
    .join("");
}

function renderizarRecentes() {
  const grid = document.getElementById("grid-recentes");
  const vistos = new Set();
  const recentes = avulsos
    .concat(categorias.flatMap((c) => c.itens))
    .filter((item) => {
      if (vistos.has(item.link)) return false;
      vistos.add(item.link);
      return true;
    })
    .sort((a, b) => (a.data < b.data ? 1 : -1))
    .slice(0, 5);
  grid.innerHTML = recentes.map(cartaoItem).join("");
}

renderizarTemas();
renderizarRecentes();
