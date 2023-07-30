# WikiGuessr

%project-name%
%firebase-config%

## Contributing

Things we like to see in contributions:

- custom properties when CSS values are repeated
- ES6 Modules

### File Organization

Files are organized as

```
Type imports
Variable imports

Module Constants

Type definitions

Module implementations
```

Implementations are ordered so that dependent functions are placed below code that calls them in a way that they can be hoisted. An exception is for utility functions that are used throughout the module, especally if they are also exported.

## Inspirations

- Citation Needed—Gameplay involving guessing aspects of a wikipedia page
- Moonrider.xyz—User-submitted content. Allow multiple users their own version of a piece of content. Sort into levels.

- Jackbox—Party games where users join using a shared code that links their devices together

- Heads Up—Games could be eventually sorted by genre—so you have your core funny games, but then you also have deep trivia based on Wookiepedia

## Setup

- `npm install` to install dev dependencies (no build dependencies)
- `firebase serve` for easy local server, but can use server of your choice
- run `src/index.html` in SPA mode
