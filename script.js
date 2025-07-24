const mallaContainer = document.getElementById("malla");
let completados = new Set(JSON.parse(localStorage.getItem("completados") || "[]"));

function crearCurso(curso) {
  const div = document.createElement("div");
  div.classList.add("course");
  div.textContent = curso.nombre;
  div.dataset.id = curso.id;

  if (curso.electivo) {
    const btn = document.createElement("button");
    btn.classList.add("electivo-toggle");
    btn.textContent = "🍓";

    const selector = document.createElement("div");
    selector.classList.add("electivo-selector");

    const tipo = curso.id.split("-")[0] || curso.id[0];
    const opciones = electivos[tipo] || [];

    selector.innerHTML = `
      <select>
        <option value="">Selecciona un electivo</option>
        ${opciones.map(e => `<option value="${e}">${e}</option>`).join("")}
      </select>
    `;

    selector.querySelector("select").addEventListener("change", (e) => {
      div.childNodes[0].textContent = e.target.value;
      selector.style.display = "none";
    });

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      selector.style.display = selector.style.display === "block" ? "none" : "block";
    });

    div.appendChild(btn);
    div.appendChild(selector);
  }

  if (curso.prereq && !curso.prereq.every(id => completados.has(id))) {
    div.classList.add("locked");
  }

  if (completados.has(curso.id)) {
    div.classList.add("completed");
  }

  div.addEventListener("click", () => {
    if (div.classList.contains("locked")) return;

    div.classList.toggle("completed");

    if (div.classList.contains("completed")) {
      completados.add(curso.id);
    } else {
      completados.delete(curso.id);
    }

    localStorage.setItem("completados", JSON.stringify([...completados]));
    renderMalla();
  });

  return div;
}

function renderMalla() {
  mallaContainer.innerHTML = "";
  niveles.forEach(nivel => {
    const section = document.createElement("div");
    section.classList.add("level");

    const title = document.createElement("h2");
    title.textContent = nivel.nombre;

    const grid = document.createElement("div");
    grid.classList.add("grid");

    nivel.cursos.forEach(curso => grid.appendChild(crearCurso(curso)));

    section.appendChild(title);
    section.appendChild(grid);
    mallaContainer.appendChild(section);
  });
}

renderMalla();

document.getElementById("resetBtn").addEventListener("click", () => {
  localStorage.removeItem("completados");
  completados = new Set();
  renderMalla();
});
