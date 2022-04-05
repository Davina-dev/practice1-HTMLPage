export function printCards(data) {
  let DOMcardsProjects = document.getElementById("DOMcardsProjects");
  DOMcardsProjects.innerHTML += `
    <section class="card">
      <h3>${data.title}</h3>
      <div>
        <img class="card_img"src=${data.src} alt="">
      </div>
      <p>${data.description}</p>
      <p><b>Skills:</b> ${data.skills}</p>
      <a href="${data.source}" class="card__btn">Source</a>
      <a href="${data.demo}" class="card__btn optional">Demo</a>
    </section>
  `
}

/*

<section class="card">
  <h3>Proyecto</h3>
  <div ><img  class="card_img"src="/assets/img/avatarDavina.png" alt=""></div>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore iure iusto perferendis, rerum mollitia voluptatibus eum molestias delectus officiis, atque quaerat quisquam ratione doloribus. Eos vero officia omnis est.
  </p>
  <p><b>Skills:</b> html, css, js </p>
  <a href="#" class="card__btn">Source </a>
  <a href="#" class="card__btn optional">Demo </a>
</section>

*/