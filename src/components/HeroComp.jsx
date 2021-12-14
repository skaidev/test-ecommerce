import React from "react";
import styled from "styled-components";
import ContentComp from "./ContentComp";

const HeroComp = () => {
  return (
    <Wrapper>
      <div className=" container-fluid head">
        <div className="hero">
          <div className="top">
            <div>
              <button className="btn-dark btn-lg mb-3">
                <a href="/">Trending Discounts </a>
              </button>
            </div>

            <h2 className="fs-41">
              <span className="fw-light fs-41">Try Next Levels </span> <br />
              <span className="fw-bold fs-41">Smart gadgets</span>
            </h2>

            <p className="fs-14 text-dark pt-4">
              he Union Jack, or Union Flag, is the de facto national flag <br />
              of the United Kingdom. Though no law has been passed <br />
              officially making effectively
            </p>
            <button className="btn-secondary btn-lg text-light one mt-4">
              <a href="/"> Shop Now </a>
            </button>
          </div>
        </div>
        <div className=" container">
          <ContentComp />
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroComp;

const Wrapper = styled.div`
  .head {
    background-color: #f5fdff;
  }
  .hero {
    background-image: url("images/Group 81.png");
    background-repeat: no-repeat;
    background-position: cover;
    height: 54rem;

    .top {
      margin-left: 10rem;
      padding-top: 12rem;
      @media screen and (min-width: 378px) and (max-width: 992px) {
        display: block;
      }
    }
    .one {
      padding: 10px 32px;
      border: 2px solid white;
    }
  }
`;
