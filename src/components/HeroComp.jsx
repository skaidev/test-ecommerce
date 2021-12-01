import React from "react";
import styled from "styled-components";

const HeroComp = () => {
  return (
    <Wrapper>
      <div className=" container-fluid bg-primary">
        <div className="hero container d-flex flex-lg-row justify-content-lg-center flex-column">
          <div className="write-up ">
            <button className="btn-dark">Trending Discounts</button>
            <h3>Try Next levels</h3>
            <h1>Smart gadgets </h1>
            <p>
              he Union Jack, or Union Flag, is the de facto national flag of <br /> the United Kingdom. Though no law has been passed <br />
              officially making effectively
            </p>
            <button className="btn-secondary btn-lg text-light">Shop Now</button>
          </div>
          <div className=" d-md-block d-none">
            <img src="images/Rectangle6.png" className="img-fluid head" alt="" />
            {/* <img src="images/rectangle7.png" className="img-fluid heading" alt="" /> */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroComp;

const Wrapper = styled.div`
  .hero {
    .write-up {
      margin-top: 7rem;
    }
    .head {
      position: relative;
      top: 0;
      right: 0;
      padding-right: 0.7rem;
    }
    .heading {
      position: absolute;
      top: 1rem;
      /* left: 0rem; */
      right: 0;
    }
  }
`;
