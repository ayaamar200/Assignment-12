import { GameDetails } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    this.ui = new Ui();
    this.getGames("mmorpg");
    document.querySelectorAll(".menu .nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        // console.log(e.target.dataset.category);
        this.getGames(e.target.dataset.category);
      });
    });
  }

  async getGames(category) {
    const loading = document.getElementById("loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );
      const games = await response.json();
      this.ui.displayGames(games);
      this.clickOnCard();
      //   console.log(games);
    } catch (error) {
      console.error(error);
    } finally {
      loading.classList.add("d-none");
    }
  }

  clickOnCard() {
    document.querySelectorAll(".card").forEach((game) => {
      game.addEventListener("click", () => {
        const gameId = game.dataset.id;
        // console.log(game.dataset.id);
        this.showGameDetails(gameId);
      });
    });
  }

  showGameDetails(gameId) {
    new GameDetails(gameId);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
