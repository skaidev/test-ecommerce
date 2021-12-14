import React from "react";
import styled from "styled-components";

const TrendingComp = () => {
  return (
    <Wrapper>
      <section>
        <div className="container">
          <div className="d-flex">
            <div className=" ">
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
            </div>
            <div className="container">
              <div className="container mt-5">
                <div className="first ">
                  <div className="second">
                    <div className="text">
                      <p className="mt-5">
                        Ububa’s Echo Dot (4th Gen) <br /> Smart Speaker
                      </p>
                      <div className=" d-flex">
                        <p className="text-danger me-3">$49.99</p>
                        <p>$44.99 </p>
                      </div>
                    </div>
                  </div>
                  <div className="third">
                    <div className="mega23">
                      <p>-10%</p>
                    </div>
                    <button className=" btn btn-sm bg-secondary text-light btn2">
                      {" "}
                      <a href="/"> Shop Now</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" container">
                <div className="container d-flex flex-grow-1 mt-5">
                  <div className="fourth ">
                    <div className="">
                      <p className="mt-5">
                        Ububa’s Echo Dot (4th Gen) <br /> Smart Speaker
                      </p>
                      <div className=" d-flex">
                        <p className="text-danger me-3">$49.99</p>
                        <p>$44.99 </p>
                      </div>
                      <button className=" btn btn-sm bg-secondary text-light btn2">
                        {" "}
                        <a href="/"> Shop Now</a>
                      </button>
                    </div>
                  </div>
                  <div className="fifth">
                    <div className="">
                      <p className="mt-5">
                        Ububa’s Echo Dot (4th Gen) <br /> Smart Speaker
                      </p>
                      <div className=" d-flex">
                        <p className="text-danger me-3">$49.99</p>
                        <p>$44.99 </p>
                      </div>
                      <button className=" btn btn-sm bg-secondary text-light btn2">
                        {" "}
                        <a href="/"> Shop Now</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      padding: 2px 7px;
      border: 1px solid white;
    }
  }
  .first {
    display: flex;
  }
  .second {
    background-color: #d6e6f3;
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%);
    width: 19rem;
    position: relative;
    left: 2rem;
  }
  .third {
    background-image: url("images/angle66.png");
    clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0% 100%);

    .btn2 {
      margin-left: 18rem;
      margin-top: 13rem;
    }
    .btn {
      padding: 2px 16px;
      border: 1px solid white;
    }
    .mega23 {
      background-color: white;
      margin-left: 22rem;
      margin-top: 2rem;
      border: 1px solid white;
      box-shadow: 7px 10px 5px 0px rgba(230, 218, 218, 0.75);
    }
  }
  .fourth {
    background-image: url("images/angle.png");
    width: 15rem;
    height: 15rem;
    border: 2px solid white;
    box-shadow: 7px 10px 5px 0px rgba(230, 218, 218, 0.75);
  }
  .fifth {
    background-image: url("images/angle.png");
    width: 15rem;
    height: 15rem;
    border: 2px solid white;
    box-shadow: 7px 10px 5px 0px rgba(230, 218, 218, 0.75);
  }
  @media screen and (max-width: 778px) {
    .first {
      margin-right: 7rem;
    }

    .second {
      width: 25rem;
      /* position: relative;
      right: 4rem; */
    }
    .third {
      width: 19rem;
    }
  }
`;
