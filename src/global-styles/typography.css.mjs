import { css } from "../libs/lit-all@2.7.6.js";
import linuxLibertine from "./fonts/linux-libertine/family.css.mjs";
import materialSymbols from "./fonts/material-symbols/family.css.mjs";
import sedgwickAveDisplay from "./fonts/sedgwick-ave-display/family.css.mjs";
import spriteGraffiti from "./fonts/sprite-graffiti/family.css.mjs";
import donGraffiti from "./fonts/don-graffiti/family.css.mjs";
import blowBrush from "./fonts/blow-brush/family.css.mjs";

export default css`
  ${linuxLibertine}${materialSymbols}${sedgwickAveDisplay}${spriteGraffiti}${donGraffiti}${blowBrush}

  html {
    font-family: var(--sans);
  }

  * {
    font: inherit;
  }

  h1 {
    font-family: var(--serif);
    font-size: 1.5em;
    font-weight: 400;
    line-height: 1.3em;
  }

  h2 {
    /* typography */
    font-family: var(--serif);
    font-size: 1.8em;
    font-weight: 400;
    line-height: 1.3em;
  }

  h3 {
    /* typography */
    font-family: var(--serif);
    font-size: 1.3125em;
    font-weight: 400;
    line-height: 1.3em;
  }
`;
