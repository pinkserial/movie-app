import { Component } from "../core";
import movieStore, { searchMovies } from "../store/movie";

export default class extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
      <input 
        value="${movieStore.state.searchText}" 
        placeholder="Enter the movie title to search!"/>
      <button class="btn btn-primary">
        Search!
      </button>
    `;

    const inputEl = this.el.querySelector("input");
    inputEl?.addEventListener("input", () => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl?.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const btnEl = this.el.querySelector(".btn");
    btnEl?.addEventListener("click", () => {
      movieStore.state.searchText.trim() && searchMovies(1);
    });
  }
}
