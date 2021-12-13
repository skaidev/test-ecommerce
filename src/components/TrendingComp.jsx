import React from "react";
import styled from "styled-components";

const TrendingComp = () => {
  return (
    <Wrapper>
      <section>
        <h1>Trending</h1>
        <div className="card">
          <div className="mega">
            <p>-10%</p>
          </div>

          <img src="images/echoo2.png" className=" img-fluid mx-auto mt-5" alt="" />
          <div className="card-body  mt-5">
            <div>
              <p>Ububa’s Echo Dot (4th Gen) Smart Speaker </p>
            </div>
            <div className="d-flex ">
              <div className=" d-flex">
                <p className="text-danger me-4">$49.99</p>
                <p>$44.99 </p>
              </div>
              <button className="btn btn-sm bg-secondary text-light btn1 btn1s">
                <a href="/"> Shop now</a>
              </button>
            </div>
          </div>
        </div>
        <div className="container d-flex">
          <div className="second">
            <p>
              Ububa’s Echo Dot (4th Gen) <br /> Smart Speaker
            </p>
            <div className=" d-flex">
              <p className="text-danger me-3">$49.99</p>
              <p>$44.99 </p>
            </div>
          </div>
          <div className="third">
            <button className=" btn btn-sm bg-secondary text-light btn2">
              {" "}
              <a href="/"> Shop Now</a>
            </button>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default TrendingComp;

const Wrapper = styled.div`
  .card {
    background: linear-gradient(236.31deg, #9eedfa 0%, #f5fdff 160.07%);
    width: 25rem;
    height: 30rem;
    .mega {
      background-color: white;
      margin-left: 22rem;
    }
    .btn1 {
      margin-left: 8rem;
    }
    .btn1s {
      padding: 2px 16px;
    }
  }
  .second {
    background-color: #d6e6f3;
    height: 19rem;
    width: 24rem;
    clip-path: polygon(0 0, 100% 0%, 78% 100%, 0% 100%);
    margin-left: 5rem;
  }
  .third {
    background-image: url("images/angle66.png");
    width: 31.5rem;
    height: 18rem;
    /* clip-path: polygon(18% 0, 100% 0%, 100% 100%, 0 100%); */
    /* clip-path: polygon(14% 0, 100% 0, 100% 100%, 0% 100%); */
    clip-path: polygon(11% 0, 100% 0, 100% 100%, 0 100%);
    .btn2 {
      margin-left: 18rem;
      margin-top: 13rem;
    }
    .btn {
      padding: 2px 16px;
    }
  }
`;
