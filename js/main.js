


// import data_projects from './data_projects';

let data_projects = [
    {
        id: 1,
        title: " Toca el Dombo ",
        src:"/assets/img/avatarDavina.png",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
        skills: "CSS, HTML, JS DOM",
        source: "https://github.com/Davina-dev/Toca-el-Dombo",
        demo: "#"

    },
    {
        id: 2,
        title: " Eloquent JS Solutions",
        src:"/assets/img/avatarDavina.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
        skills: "CSS, HTML, JS DOM",
        source: "https://github.com/Davina-dev/Toca-el-Dombo",
        demo: "#"

    },
    {
        id: 3,
        title: "  CRUD React",
        src:"/assets/img/avatarDavina.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
        skills: "CSS, HTML, React Hooks, Node",
        source: "https://github.com/Davina-dev/Toca-el-Dombo",
        demo: "#"

    },
    {
        id: 4,
        title: " PokeApi ",
        src:"/assets/img/avatarDavina.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
        skills: "CSS, HTML, JS DOM",
        source: "https://github.com/Davina-dev/Toca-el-Dombo",
        demo: "#"

    },    {
        id: 5,
        title: " Layout ",
        src:"/assets/img/avatarDavina.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
        skills: "CSS, HTML JavaScript DOM ",
        source: "https://github.com/Davina-dev/Toca-el-Dombo",
        demo: "#"

    },
    {
        id: 6,
        title: " Calculator ",
        src:"/assets/img/avatarDavina.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.",
        skills: "CSS, HTML, JS",
        source: "https://github.com/Davina-dev/Toca-el-Dombo",
        demo: "#"

    }
]



 let DOMcardsProjects = document.getElementById("DOMcardsProjects")

    function printCards(data, i){
     
     DOMcardsProjects.innerHTML += `
    
     <section class="card">
     <h3>${data_projects[i].title}</h3>
     <div ><img  class="card_img"src=${data_projects[i].src} alt=""></div>
     <p>
     ${data_projects[i].description}
     </p>
     <p><b>Skills:</b> ${data_projects[i].skills} </p>
     <a href="${data_projects[i].source}" class="card__btn">Source </a>
     <a href="${data_projects[i].demo}" class="card__btn optional">Demo </a>
   </section>
    
     `


 }

    function loadCards(){
    DOMcardsProjects.innerHTML = "";
    data_projects.forEach((data, i) => printCards(data, i));}



    loadCards();