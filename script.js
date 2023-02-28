function showGame(
  name,
  imgSrc,
  description,
  genre,
  url,
  date,
  platform,
  dev,
  publisher
) {
  let showCase = document.createElement("div");
  showCase.classList.add("show-case");

  showCase.innerHTML = `<h2>${name}</h2>
                      <img src= ${imgSrc} width"150">
                      <p>Genre: ${genre}</p> 
                      <p>${description}<br> 
                      Released: ${date} for the ${platform}.<br>
                      Developed by: ${dev}<br>
                      Published by: ${publisher}</p>
                      <br>
                      <br>
                      <br>
                      <a href="${url}">
                        <button class="pressed"><img src="./images/goToGame.png" alt="Go To Game" ></button>`;

  document.body.appendChild(showCase);
}

function findGame() {
  fetch("https://www.freetogame.com/api/games").then(function (res) {
    res.json().then(function (data) {
      let gameIndex = Math.floor(Math.random() * data.length);
      let game = data[gameIndex];

      let existingShowCase = document.querySelector(".show-case");
      if (existingShowCase) {
        document.body.removeChild(existingShowCase);
      }

      console.log(game);
      showGame(
        game.title,
        game.thumbnail,
        game.short_description,
        game.genre /*for whatever reason it only has one genre per game*/,
        game.game_url,
        game.release_date,
        game.platform,
        game.developer,
        game.publisher
      );
    });
  });
}

//i know this isnt the best way to do this but I have a migraine right now and trying to wrap my head around this is hard right now
