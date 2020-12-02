import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        width: 100%;
        margin: 0;
        background: #1b1b1b;
        color: #fff;
        font-family: 'Roboto', sans-serif;

        button, input {
            font-family: 'Roboto', sans-serif;
            color: #fff;
        }
    }

    h1 {
        margin: 0 0 16px;
        font-size: 48px;
    }

    button {
        cursor: pointer;
    }
`;