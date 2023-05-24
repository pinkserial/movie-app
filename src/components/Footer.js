import { Component } from "../core";
import aboutStore from "../store/about";

export default class extends Component {
  constructor() {
    super({ tagName: "footer" });
  }

  render() {
    const { github, repository } = aboutStore.state;
    this.el.innerHTML = `
      <div>
        <a href="${repository}">Github Repository</a>
      </div>
      <div>
        <a href="${github}">
          ${new Date().getFullYear()} jongmin
        </a>
      </div>
    `;
  }
}
