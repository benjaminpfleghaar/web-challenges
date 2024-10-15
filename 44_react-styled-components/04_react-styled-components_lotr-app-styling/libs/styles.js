"use client";

import lora from "@/libs/fonts";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --color-clouds: #f1f1f1;
        --color-foreground: #282828;
        --color-background: #d4d1cd;

        --font-family: ${lora.style.fontFamily};
        --font-headline-1: normal 700 44px/48px var(--font-family);
        --font-headline-2: normal 700 32px/41px var(--font-family);
        --font-title: normal 700 16px/20px var(--font-family);
        --font-caption: normal 500 12px/15px var(--font-family);
        --font-caption--italic: italic 400 12px/15px var(--font-family);
        --font-body: normal 400 16px/20px var(--font-family);

        --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09),
            0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),
            0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

        --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),
            0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),
            0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);
    }
    body {
        padding: 48px;
        margin: 0 auto;
        max-width: 640px;
        color: var(--color-foreground);
        background: var(--color-background);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    img {
        height: auto;
        max-width: 100%;
        display: block;
    }
    @media (prefers-color-scheme: dark) {
        :root {
            --color-foreground: #d4d1cd;
            --color-background: #282828;
        }
    }
    @media (prefers-color-scheme: dark) {
        html {
            color-scheme: dark;
        }
    }
`;

export default GlobalStyle;
