import styled, { createGlobalStyle, css } from "styled-components";
import breakpoint from "./breakpoints";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  text-decoration: none;
  outline: none;
  }

  html {
    box-sizing: border-box;
    font-size: 16px; 
  }
  
  body {
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow-x: hidden;
    font-weight: 400;
  }
  
  .app {
    position: relative;
  }

`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  position: relative;
  margin: auto;
  height: 100%;
  padding: 0 clamp(32px, 7vw, 100px);

  @media only screen and ${breakpoint.device.lg} {
    max-width: 1152px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.columns &&
    css`
      grid-template-columns: ${props.columns};
    `}

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100% !important;
    `}

  ${(props) =>
    props.grid12 &&
    css`
      grid-template-columns: repeat(12, calc(100% / 12));
    `}
  
  ${(props) =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}

  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  
  ${(props) =>
    props.alignContent &&
    css`
      align-content: ${props.alignContent};
    `}

  ${(props) =>
    props.justifyItems &&
    css`
      justify-items: ${props.justifyItems};
    `}

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
`;

export const centerGrid = css`
  display: grid;
  align-items: center;
  justify-items: center;
  position: relative;
`;

export const full = css`
  width: 100%;
  height: 100%;
  position: relative;
`;
