export class Ui {
  displayGames(data) {
    let gamesBox = "";
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
         <div class="col-md-2 col-lg-4 col-xl-3">
              <div data-id="${data[i].id}" class="card h-100 bg-transparent">
                <div>
                  <img class="card-img-top" src="${data[i].thumbnail}" alt="${
        data[i].title
      }" />
                </div>

                <div class="card-body">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h3 class="card-title h5">${data[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text text-center text-white opacity-50">
                      ${data[i].short_description.split(" ", 8)}
                  </p>
                </div>

                <div
                  class="card-footer d-flex justify-content-between align-items-center text-white"
                >
                  <span class="badge badge-color">${data[i].genre}</span>
                  <span class="badge badge-color">${data[i].platform}</span>
                </div>
              </div>
            </div>
        `;
    }

    document.getElementById("gameData").innerHTML = gamesBox;
  }

  displayGameDetails(data) {
    const detailsBox = `
    <div class="col-md-4">
        <img src="${data.thumbnail}" class="w-100" alt="Image Details" />
    </div>
    <div class="col-md-8">
        <h3>Title: ${data.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
        <p class="small">${data.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
    </div>
    
    `;

    document.getElementById("detailsContent").innerHTML = detailsBox;
  }
}
