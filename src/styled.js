import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        letter-spacing: -1px;
    }
    a{
        text-decoration: none;
        color: black;
    }
`;
