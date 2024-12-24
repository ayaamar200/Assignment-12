import { Ui } from "./ui.module.js";
export class GameDetails {
  constructor(gameId) {
    this.ui = new Ui();

    this.getGameDetails(gameId);
    document.getElementById("btnClose").addEventListener("click", () => {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
  }

  async getGameDetails(gameId) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "635d7e7ec0msh43599db171daf78p1813e8jsnf988461846d3",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,
        options
      );
      const gameDetails = await response.json();
      this.ui.displayGameDetails(gameDetails);
    //   console.log(gameDetails);
    } catch (error) {
      console.error(error);
    } finally {
      loading.classList.add("d-none");
    }
  }
}
