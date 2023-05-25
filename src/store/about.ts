import { Store } from "../core";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://heropy.blog/css/images/logo.png",
  name: "pinkserial / jongmin",
  email: "pinkserial@gmail.com",
  blog: "https://github.com/pinkserial",
  github: "https://github.com/pinkserial",
  repository: "https://github.com/pinkserial/movie-app",
});
