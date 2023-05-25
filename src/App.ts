import Footer from "./components/Footer";
import Header from "./components/Header";
import { Component } from "./core";

export default class extends Component {
  render() {
    const header = new Header().el;
    const routerView = document.createElement("router-view");
    const footer = new Footer().el;
    
    this.el.append(header, routerView, footer);
  }
}
