function lerParametro(nome) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nome);
}

function renderizarTema() {
  const id = lerParametro("t") || "dados";
  const cat = categoriaPorId(id);
  document.getElementById("titulo-tema").textContent = cat.nome;
  document.getElementById("desc-tema").textContent = cat.desc;
  document.getElementById("breadcrumb").textContent = cat.nome;

  const grid = document.getElementById("grid");
  if (cat.itens.length === 0) {
    grid.innerHTML = `
      <div style="background:#fffdf9; border:1px solid #e3d9c6; border-radius:10px; padding:2rem; text-align:center; color:#5c6657;">
        Este tema ainda está em preparação. Novos guias em breve!
      </div>`;
    return;
  }
  grid.innerHTML = cat.itens.map(cartaoItem).join("");
}

renderizarTema();
