import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: linear-gradient(-90deg, #764ba2, #667eea);
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    /* #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
        height: 100%;
    } */

    a {
        text-decoration: none;
    }

    ul {
        list-style: none
    }

    button {
        cursor: pointer;
    }
`;
