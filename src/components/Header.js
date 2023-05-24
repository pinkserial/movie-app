import { Component } from "../core";

export default class extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          { name: "Search", href: "#/" },
          { name: "Movie", href: "#/movie?id=tt4520988" },
          { name: "About", href: "#/about" },
        ],
      },
    });

    window.addEventListener("popstate", () => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = `
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map((m) => {
              const href = m.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return `<li><a href="${m.href}" class="${
                isActive ? "active" : ""
              }">${m.name}</a></li>`;
            })
            .join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="user">
      </a>
    `;
  }
}
