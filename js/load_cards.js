export function loadCards() {
  DOMcardsProjects.innerHTML = "";
  data_projects.forEach((data, i) => printCards(data, i));
}

export const saludo = "hola , soy un modulo";
