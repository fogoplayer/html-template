/* global page */
import { css, LitElement } from "./lib/lit-all@2.7.6.js";

// Add global styles to head for resets and fonts
const style = document.createElement("style");
style.textContent = globalCss.cssText;
document.head.appendChild(style);

export default class App extends LitElement {
  static properties = {
    currentPage: { type: Object, state: true },
  };

  constructor() {
    super();
    this.createRoute("/", Home);
    page.start();
  }

  /**
   * Creates a route for the given pattern and associates it with a custom web component.
   *
   * @param {string} pattern the URL pattern to match for the route.
   * @param {new (context: any) => LitElement} component the component class to be instantiated when the route is activated.
   * @param {string?} title the title to display in the URL bar
   * @returns {void}
   */
  createRoute(pattern, component, title = "%project-name%") {
    page(pattern, (/** @type {any} */ context) => {
      this.currentPage = new component(context);
    });
  }

  render() {
    return this.currentPage;
  }

  static styles = [globalCss, css``];
}

customElements.define("app-", App);
