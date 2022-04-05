
//import{loadCards, saludo}from"./load_cards";
// import{printCards}from"./print_cards.js";
// import{ dataProjects}from"./data_projects.js";

//console.log(saludo);

let data_projects = [
  {
    id: 1,
    title: " Toca el Dombo ",
    src: "./assets/img/projects/domboo.png",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, JS DOM",
    source: "https:github.com/Davina-dev/Toca-el-Dombo",
    demo: "#"
  },
  {
    id: 2,
    title: " Eloquent JS Solutions",
    src: "./assets/img/projects/eloquentJs.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, JS DOM",
    source: "https:github.com/Davina-dev/Toca-el-Dombo",
    demo: "#"
  },
  {
    id: 3,
    title: "  CRUD React",
    src: "./assets/img/projects/crudReact.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, React Hooks, Node",
    source: "https:github.com/Davina-dev/Toca-el-Dombo",
    demo: "#"
  },
  {
    id: 4,
    title: " PokeApi ",
    src: "./assets/img/projects/pokeapi.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, JS DOM",
    source: "https:github.com/Davina-dev/Toca-el-Dombo",
    demo: "#"
  },
  {
    id: 5,
    title: "  Calculator",
    src: "/assets/img/projects/calculator.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, React Hooks, Node",
    source: "https:github.com/Davina-dev/calculator",
    demo: "#"
  },
  {
    id: 6,
    title: " Food for Home ",
    src: "./assets/img/projects/foodForHome.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, JS DOM",
    source: "https:github.com/Davina-dev/Toca-el-Dombo",
    demo: "#"
  },
  {
    id: 7,
    title: "  CRUD React",
    src: "./assets/img/projects/crudReact.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, React Hooks, Node",
    source: "https:github.com/Davina-dev/Toca-el-Dombo",
    demo: "#"
  },
  {
    id: 8,
    title: " PokeApi ",
    src: "./assets/img/projects/pokeapi.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
    skills: "CSS, HTML, JS DOM",
    source: "https:github.com/Davina-dev/Toca-el-Dombo",
    demo: "#"
  }
];

let DOMcardsProjects = document.getElementById("DOMcardsProjects");

function printCards(data) {
  DOMcardsProjects.innerHTML += `
    <section class="card">
      <h3>${data.title}</h3>
      <div ><img class="card_img"src=${data.src} alt=""></div>
      <p>${data.description}</p>
      <p><b>Skills:</b> ${data.skills}</p>
      <a href="${data.source}" class="card__btn">Source</a>
      <a href="${data.demo}" class="card__btn optional">Demo </a>
    </section>  
  `
}

function loadCards() {
  DOMcardsProjects.innerHTML = "";
  data_projects.forEach((data, i) => printCards(data, i));
}

loadCards();