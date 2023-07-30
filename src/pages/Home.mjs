/* global page */
import { LitElement, html, css } from "../lib/lit-all@2.7.6.js";
import globalCss from "../styles/global.css.mjs";

// Add global styles to head for resets and fonts
const style = document.createElement("style");
style.textContent = globalCss.cssText;
document.head.appendChild(style);

export default class Home extends LitElement {
  static get properties() {
    return {
      code: { type: String, state: true },
      menuOptions: { state: true, type: Array },
      isFullUser: { type: Boolean, state: true },
    };
  }

  constructor() {
    super();
    this.menuOptions = this.loggedOutMenu;
    isFullUser().then((is) => {
      this.isFullUser = is;

      if (is) {
        this.menuOptions = this.loggedInMenu();
      } else {
        this.menuOptions = this.loggedOutMenu;
      }
    });
  }

  loggedInMenu() {
    return html`<a href="/${getCurrentUser()?.uid}/created-games">
        Created Games
      </a>
      <!-- <li>Liked Games</li> -->
      <!-- <li>Wishlist</li> -->
      <!-- <li>Settings</li> -->
      <a href="/" @click=${logOut}>Log out</a>`;
  }

  loggedOutMenu = html`<a href="/login">Log in</a>
    <a href="/sign-up">Sign up</a>`;

  render() {
    return html`
      <app-header>
        <a href="/how-to-play" slot="left" class="material-symbols">help</a>
        <button slot="right" class="material-symbols">
          account_circle
          <overflow-menu>${this.menuOptions}</overflow-menu>
        </button>
      </app-header>
      <main>
        <h2>Join a game</h2>
        <input
          type="text"
          @input="${(/** @type {HTMLInputEvent} */ e) =>
            (this.code = e.target.value)}"
        />
        <button
          class="button"
          @click="${() => {
            if (this.code) page(`/${this.code.toUpperCase()}`);
          }}"
        >
          Join
        </button>
        <h2>Start a game</h2>
        <search-bar></search-bar>
      </main>
      ${this.isFullUser
        ? html`<a href="/create-game" class="material-symbols fab">add</a>`
        : ""}
    `;
  }

  static styles = [
    globalCss,
    css`
      main {
        max-width: var(--limited-width);
        margin-inline: auto;
      }
    `,
  ];
}

customElements.define("home-", Home);
