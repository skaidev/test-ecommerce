import React from "react";
import styled from "styled-components";

const HeroComp = () => {
  return (
    <Wrapper>
      <div className=" container-fluid bg-primary">
        <div className="hero container d-flex flex-lg-row justify-content-lg-center flex-column">
          <div className="write-up ">
            <button className="btn-dark btn-lg">
              <a href="/">Trending Discounts </a>
            </button>
            <h3>Try Next levels</h3>
            <h1>Smart gadgets </h1>
            <p>
              he Union Jack, or Union Flag, is the de facto national flag of <br /> the United Kingdom. Though no law has been passed <br />
              officially making effectively
            </p>
            <button className="btn-secondary btn-lg text-light">
              <a href="/"> Shop Now </a>
            </button>
          </div>
          <div className=" d-md-block d-none images1">
            <img src="images/Group 777 (1).png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroComp;

const Wrapper = styled.div`
  .hero {
    position: relative;

    .write-up {
      margin: 7rem 1rem;
      @media screen and (min-width: 378px) and (max-width: 992px) {
      }
    }
    .images1 {
      height: 53rem;
      margin-left: 9rem;
      @media screen and (min-width: 378px) and (max-width: 992px) {
        margin-left: 0.3rem;
      }
    }
  }
`;
