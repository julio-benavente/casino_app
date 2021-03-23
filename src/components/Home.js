import React, { useState, useEffect } from "react";
import { Container } from "../styles/globalStyles";

// Assets
import logo from "../assests/logo_casino.jpg";
import banner from "../assests/banner.jpg";
import casinoLogo from "../assests/casino_logo.png";

// Styles
import {
  HomeSection,
  Logo,
  CasinosWraper,
  Headline,
  SubHeadline,
  BounesesClaimed,
  CasinosHead,
  Casino,
  CasinoLogo,
  WelcomeBonus,
  UserRating,
  Rating,
  Play,
  Extra,
  CasinoName,
  Stars,
  Star,
} from "../styles/homeStyles";

const casinos = [
  {
    logo: logo,
    name: "Great Casino",
    welcomeBone: {
      upTo: "100% Up to",
      cash: 1500,
      plus: ["150 Zee Spins", "500 Zee Points"],
    },
    userRating: 2500,
    rating: 1.5,
    extra: "Player Favourite",
  },
  {
    logo: logo,
    name: "Great Casino",
    welcomeBone: {
      upTo: "100% Up to",
      cash: 1500,
      plus: ["150 Zee Spins", "500 Zee Points"],
    },
    userRating: 2500,
    rating: 3.5,
    extra: "Player Favourite",
  },
  {
    logo: logo,
    name: "Great Casino",
    welcomeBone: {
      upTo: "100% Up to",
      cash: 1500,
      plus: ["150 Zee Spins", "500 Zee Points"],
    },
    userRating: 2500,
    rating: 6.0,
    extra: "Player Favourite",
  },
  {
    logo: logo,
    name: "Great Casino",
    welcomeBone: {
      upTo: "100% Up to",
      cash: 1500,
      plus: ["150 Zee Spins", "500 Zee Points"],
    },
    userRating: 2500,
    rating: 7.0,
    extra: "Player Favourite",
  },
];

const Home = () => {
  const { width } = useWindowSize();

  return (
    <HomeSection banner={banner}>
      <Container justifyItems="center" grid12>
        <Logo logo={casinoLogo}></Logo>
        <Headline>TOP 5 Real Money Online Casino Bonus List!</Headline>
        <SubHeadline>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vero, autem.
        </SubHeadline>
        <BounesesClaimed>10,302 Claimed Bonuses And Counting</BounesesClaimed>
        <CasinosWraper>
          <CasinosHead>
            <p>Casino</p>
            <p>Welcome bonus</p>
            <p>Use rating</p>
            <p>Rating</p>
            <p>Play now</p>
          </CasinosHead>
          {casinos.map((casino) => {
            const {
              logo,
              welcomeBone: { upTo, cash, plus },
              userRating,
              rating,
              extra,
              name,
            } = casino;

            const plusStr = () => {
              let str = "";
              plus.map((i) => (str += `+ ${i}`));
              return str;
            };

            return (
              <Casino>
                <CasinoLogo logo={logo}></CasinoLogo>
                <Extra>
                  <p>{extra}</p>
                  <span></span>
                </Extra>
                <CasinoName>
                  <p>{name}</p>
                </CasinoName>
                <WelcomeBonus>
                  {width > 600 ? (
                    <>
                      <p className="upto">{upTo}</p>
                      <p className="cash">{`$${cash}`}</p>
                      {plus.map((i) => (
                        <p className="plus">+ {i}</p>
                      ))}
                    </>
                  ) : (
                    <>
                      <p>{`${upTo} + $${cash} ${plusStr()}`} </p>
                    </>
                  )}
                </WelcomeBonus>
                <UserRating>
                  <p>Rating ({userRating})</p>
                  <Stars>
                    {/* <i
                      className={`fas ${rating >= 2 ? "fa-star" : "fa-star-half"}`}
                    ></i> */}
                    <Star>
                      <i className="fas full fa-star"></i>
                      <i
                        className={`fas fa-star
                        ${rating == 0 ? "empty" : rating < 2 ? "half" : "full"}
                      `}
                      ></i>
                    </Star>
                    <Star>
                      <i className="fas full fa-star"></i>
                      <i
                        className={`fas fa-star
                        ${rating < 2 ? "empty" : rating < 4 ? "half" : "full"}
                      `}
                      ></i>
                    </Star>
                    <Star>
                      <i className="fas full fa-star"></i>
                      <i
                        className={`fas fa-star
                        ${rating < 4 ? "empty" : rating < 6 ? "half" : "full"}
                      `}
                      ></i>
                    </Star>
                    <Star>
                      <i className="fas full fa-star"></i>
                      <i
                        className={`fas fa-star
                        ${rating < 6 ? "empty" : rating < 8 ? "half" : "full"}
                      `}
                      ></i>
                    </Star>
                    <Star>
                      <i className="fas full fa-star"></i>
                      <i
                        className={`fas fa-star
                        ${rating < 8 ? "empty" : rating < 10 ? "half" : "full"}
                      `}
                      ></i>
                    </Star>
                  </Stars>
                </UserRating>
                <Rating>
                  <p>{rating.toFixed(1)}</p>
                  <div className="stars"></div>
                </Rating>
                <Play>
                  <button>Play</button>
                </Play>
              </Casino>
            );
          })}
        </CasinosWraper>
      </Container>
    </HomeSection>
  );
};

export default Home;

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
