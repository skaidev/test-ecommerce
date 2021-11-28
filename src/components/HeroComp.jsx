import React from "react";
import styled from "styled-components";

const HeroComp = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="hero bg-primary flex-grow-1">
          <div className="write-up d-flex ">
            <button className="btn-dark">Trending Discounts</button>
            <h3>Try Next levels</h3>
            <h1>Smart gadgets </h1>
            <p>
              he Union Jack, or Union Flag, is the de facto national flag of <br /> the United Kingdom. Though no law has been passed <br />
              officially making effectively
            </p>
            <button className="btn-secondary btn-lg text-light">Shop Now</button>
            <div className="head">
              <img src="images/hero-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroComp;

const Wrapper = styled.div`
  .hero {
    background-repeat: no-repeat;
    .write-up {
      padding: 2rem;
    }
    .head {
      padding-right: 0.6rem;
    }
  }
`;
