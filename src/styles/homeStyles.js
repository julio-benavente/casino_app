import styled, { css } from "styled-components";
import { darken } from "polished";

// Styles
import { full, centerGrid } from "./globalStyles";
import breakpoint from "./breakpoints";

const sideLine = css`
  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: calc(100% - 30px);
    background: ${(props) => props.theme.colors.gray100};
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const HomeSection = styled.div`
  width: 100vw;
  background: pink;
  background: ${(props) => props.banner && `url(${props.banner})`} center
    no-repeat;
  background-size: cover;
  min-height: 100vh;
`;
export const Logo = styled.div`
  height: 100px;
  width: clamp(200px, 100%, 400px);
  margin-top: 40px;
  margin-bottom: 20px;
  background: ${(props) => props.logo && `url(${props.logo})`} center no-repeat;
  background-size: auto 100%;
  grid-column: 1/-1;
`;
export const Headline = styled.h1`
  grid-column: 1/-1;
  color: white;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 20px;
  text-align: center;

  @media only screen and ${breakpoint.device.sm} {
    text-align: left;
  }
`;
export const SubHeadline = styled.p`
  font-size: clamp(0.875rem, 6vw, 1rem);
  margin-bottom: 10px;
  color: white;
  grid-column: 1/-1;
  text-align: center;

  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;
export const BounesesClaimed = styled.p`
  font-size: clamp(0.875rem, 6vw, 1rem);
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  grid-column: 1/-1;

  @media only screen and ${breakpoint.device.sm} {
    justify-self: start;
  }
`;
export const CasinosWraper = styled.div`
  grid-column: 1/-1;
`;
export const CasinosHead = styled.div`
  display: grid;
  grid-template-columns: 250px 200px 150px 150px 150px;
  align-items: center;
  justify-items: center;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.gray800};
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  grid-column: 1/-1;
  font-size: 0.8rem;

  @media only screen and ${breakpoint.device.lg} {
    grid-template-columns: 200px 150px 120px 100px 100px;
  }
  @media only screen and ${breakpoint.device.md} {
    grid-template-columns: 150px 120px 100px 80px 80px;
  }

  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
`;
export const Casino = styled.div`
  display: grid;
  grid-template-columns: 250px 200px 150px 150px 150px;
  height: 120px;
  align-items: center;
  justify-items: center;
  background: white;
  margin-bottom: 15px;
  border-radius: 5px;
  position: relative;

  @media only screen and ${breakpoint.device.lg} {
    grid-template-columns: 200px 150px 120px 100px 100px;
  }

  @media only screen and ${breakpoint.device.md} {
    grid-template-columns: 150px 120px 100px 80px 80px;
  }

  @media only screen and ${breakpoint.device.sm} {
    height: auto;
    width: calc(100vw - 40px);
    grid-template-columns: 3fr 5fr 5fr;
    grid-template-areas:
      "extra extra extra"
      "logo casino_name stars"
      "logo bonus play";
    overflow: hidden;
    padding-bottom: 20px;
  }
`;
export const Extra = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.colors.green};
  top: 0;
  left: -10px;
  transform: translateY(-50%);
  padding: 3px 15px 3px 10px;
  p {
    font-size: 0.6rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  span {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      left: -2px;
      clip-path: polygon(0 100%, 0 0, 100% 100%);
      background-color: ${(props) => props.theme.colors.green};
    }
    &::before {
      bottom: 0;
    }
    &::after {
      top: 0;
      clip-path: polygon(0 100%, 0 0, 100% 0);
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    background-color: ${(props) => darken(0.2, props.theme.colors.green)};
  }

  @media only screen and ${breakpoint.device.sm} {
    position: relative;
    grid-area: extra;
    transform: none;
    justify-self: end;
    left: 0px;
    min-width: 50px;
    padding-right: 20px;
    padding-left: 20px;
    text-align: center;
    span {
      display: none;
    }

    &::before {
      display: none;
    }
  }
`;

export const CasinoName = styled.div`
  display: none;
  font-weight: 700;
  margin-bottom: 10px;
  @media only screen and ${breakpoint.device.sm} {
    display: block;
  }
`;
export const CasinoLogo = styled.div`
  ${full}
  background: ${(props) => props.logo && `url(${props.logo})`} center;
  background-size: cover;
  position: relative;

  &::before {
    ${full}
    content: "";
    position: absolute;
    top: 0;
    left: 1px;
    clip-path: polygon(
      calc(100% - 20px) 0,
      100% 0,
      100% 100%,
      calc(100% - 20px) 100%,
      calc(100% - 10px) 50%
    );
    background-color: white;
  }

  &::after {
    ${full}
    content: "";
    position: absolute;
    top: 0;
    right: 15px;
    clip-path: polygon(
      calc(100% - 15px) 0,
      calc(100% - 10px) 0,
      100% 50%,
      calc(100% - 10px) 100%,
      calc(100% - 15px) 100%,
      calc(100% - 5px) 50%
    );
    background-color: white;
  }
  @media only screen and ${breakpoint.device.sm} {
    grid-area: logo;
    height: clamp(70px, 15vw, 80px);
    width: clamp(70px, 15vw, 80px);
    border-radius: 100%;
    &::before,
    &::after {
      display: none;
    }
  }
`;
export const WelcomeBonus = styled.div`
  ${full}
  ${centerGrid}
  align-content: center;
  p {
    font-size: 0.875rem;
    text-align: center;
  }
  .cash {
    font-size: 1.4rem;
    font-weight: 600;
  }

  ${sideLine}

  @media only screen and ${breakpoint.device.sm} {
    grid-area: bonus;
    &::before {
      display: none;
    }
  }
`;
export const UserRating = styled.div`
  ${full}
  ${centerGrid}
  ${sideLine}
`;
export const Rating = styled.div`
  ${full}
  p {
    ${centerGrid}
    font-size: clamp(1.5rem, 5vw, 3rem);
    text-align: center;
    height: 100%;
  }
  font-weight: 600;
  ${sideLine}
  @media only screen and ${breakpoint.device.sm} {
    display: none;

    &::before {
      display: none;
    }
  }
`;
export const Play = styled.div`
  ${full}
  ${centerGrid}
  button {
    display: block;
    width: clamp(70px, calc(100% - 30px), 200px);
    height: 30px;
    background-color: ${(props) => props.theme.colors.green};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: ${(props) => darken(0.1, props.theme.colors.green)};
    }

    &:active {
      background-color: ${(props) => darken(0.15, props.theme.colors.green)};
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    grid-area: play;
    height: 60px;
    border-radius: 100%;
    &::before,
    &::after {
      display: none;
    }

    button {
      width: clamp(70px, calc(100% - 40px), 200px);
    }
  }
`;
