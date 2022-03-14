


// import data_projects from './data_projects';

// let data_projects = [
//      {
//         id: 1,
//         title: " Calculator ",
//         img:"/assets/img/projects/calculator.png",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
//         skills: "CSS, HTML, JS",
//         source: "https://github.com/Davina-dev/Calculator-js-",
//         demo: "#"

//      },
//     {
//         id: 2,
//         title: " Eloquent JS",
//         img:"../assets/img/projects/eloquentJs.png",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
//         skills: "CSS, HTML, JS DOM",
//         source: "https://github.com/Davina-dev/Eloquent-JavaScript-Solutions",
//         demo: "#"

//     },
//     {
//         id: 3,
//         title: "  CRUD React",
//         img:"../assets/img/projects/crudReact.png",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
//         skills: "CSS, HTML, React Hooks, Node",
//         source: "https://github.com/Davina-dev/crud-react",
//         demo: "#"

//     },
//     {
//         id: 4,
//         title: " PokeApi ",
//         img:"/assets/img/projects/pokeapi.png",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
//         skills: "CSS, HTML, JS DOM",
//         source: "https://github.com/Davina-dev/PokeAPI-js",
//         demo: "#"

//     },    {
//         id: 5,
//         title: " Food For Home ",
//         img:"/assets/img/projects/foodForHome.png",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
//         skills: "CSS, HTML JavaScript DOM ",
//         source: "https://github.com/Davina-dev/Food-for-Home",
//         demo: "#"

//     },
//     {
       
//         id: 6,
//         title: " Toca el Dombo",
//         img:"../assets/img/projects/domboo.png",
//         description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
//         skills: "CSS, HTML, JS DOM",
//         source: "https://github.com/Davina-dev/Toca-el-Dombo",
//         demo: "#"

//     }
//   ]



 let DOMcardsProjects = document.getElementById("DOMcardsProjects")

    function printCards(data){
     
     DOMcardsProjects.innerHTML += `
    
     <section class="card">
     <h3>${data.title}</h3>
     <div ><img  class="card_img" src=${data.img} alt=""></div>
     <p>
     ${data.description}
     </p>
     <p class="skills"><b>Skills:</b> ${data.skills} </p>
     <a href="${data.source}" class="card__btn">Source </a>
     <a href="${data.demo}" class="card__btn optional">Demo </a>
   </section>
    
     `


 }

    function loadCards(){
    DOMcardsProjects.innerHTML = "";
    data_projects.forEach((data, i) => printCards(data, i));}



    loadCards();