import { printCards } from './print_cards.js';
import dataProjects from './data_projects.js';

export function loadCards() {
  let DOMcardsProjects = document.getElementById("DOMcardsProjects");
  DOMcardsProjects.innerHTML = "";
  dataProjects.forEach((data, i) => printCards(data, i));
}

export const saludo = "Hola, soy Davina y lo peto!";
