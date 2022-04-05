export function printCards(data) {
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