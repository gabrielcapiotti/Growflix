const rowGrowcast = document.getElementById("row-growcast");
const rowFlutter = document.getElementById("row-flutter");
const rowJornada = document.getElementById("row-jornada");
const rowDiversos = document.getElementById("row-diversos");

const modalMovie = new bootstrap.Modal("#body-modal", {});
const bodyModal = document.getElementById("body-inner")

function openModal(item) {
  bodyModal.innerHTML = `
  <iframe
      width="99%"
      height="99%"
      src="https://www.youtube.com/embed/${item}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    >
    </iframe>
  `
  modalMovie.show()
}


const addCard = (item) => {
  const htmlCard = `

  <div class="col-12 col-sm-6 col-md-3 card-styles">
  <a onclick="openModal('${item.code}')">
    <div class="show-body my-4">
      <img src="https://img.youtube.com/vi/${item.code}/sddefault.jpg" class="card-img-top" alt="..." />
    <div class="card-body  bg-black ">
    
    <h5 class="card-title">
                    <svg
                      class="svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      fill="white"
                      class="bi bi-play-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      ></path>
                      <path
                        d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"
                      ></path>
                      </svg>
      ${item.title}
      </h5>
    </div>
    </div>
    </a>
  </div>
`;
  if (item.category === "growcast") {
    rowGrowcast.innerHTML += htmlCard;
  }
  if (item.category === "flutter") {
    rowFlutter.innerHTML += htmlCard;
  }
  if (item.category === "jornada") {
    rowJornada.innerHTML += htmlCard;
  }
  if (item.category === "diversos") {
    rowDiversos.innerHTML += htmlCard;
  }
};

movies.forEach((item) => {
  addCard(item);
});