import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = () => {
  return (
    <Header>
      <div className="top-nav bg-primary">
        <div className=" container d-flex align-items-lg-center justify-content-md-between">
          <div className="left d-flex align-items-md-center flex-column flex-md-row">
            <div className="d-flex">
              <a href="/" className="d-flex align-items-center me-2">
                <li className="btn">
                  <img src="images/download 1.svg" alt="" />
                  English<i className="fas fa-chevron-down ms-1"></i>
                </li>
              </a>
              <a href="/" className="d-flex align-items-center">
                <li className="btn">
                  Currency USD<i className="fas ms-1 fa-chevron-down"></i>
                </li>
              </a>
            </div>
            <div className="icons d-flex">
              <a href="/">
                <i class="fab fa-facebook text-dark"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter text-dark"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in text-dark"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram text-dark"></i>
              </a>
            </div>
            <li className="p-0 m-0 d-md-flex d-none align-items-center phone ">
              <i className="fas fa-phone-alt me-3"></i>
              <p className="fw-bold gold">+234 901 262 4162</p>
            </li>
          </div>
          <div className="d-flex left ">
            <a href="/" className="text-secondary fw-bold">
              About Us
            </a>
            <a href="/" className="text-info fw-bold">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="container d-flex">
          <div className="img">
            <img src="images/Ububa logo for ui-02 1 (1).svg" alt="" />
            <img src="images/Group (1).svg" alt="" />
          </div>
          <div className="col-auto input">
            <label className="visually-hidden" for="InputGroup">
              search products, categories
            </label>
            <div className="input-group">
              <div className="input-group-text first">
                <span className="btn">
                  All Categories <i className="fas fa-chevron-down text-secondary"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="InputGroup" placeholder="search products, categories" />
              <div className="input-group-text second bg-secondary">
                <span className=" text=light">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="nav-content">
            <ul className="nav-item d-flex">
              <a href="/" className="nav-link">
                <i className="far fa-heart"></i>
              </a>
              <a href="/" className="nav-link">
                <i className="fas fa-shopping-bag"></i>
              </a>
              <a href="/" className="nav-link check">
                <i className="far fa-question-circle question"></i>
              </a>
              <a href="/" className="nav-link">
                {" "}
                <i className="far fa-user-circle profile"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav> */}
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  .top-nav {
    font-size: 14px;

    .left {
      justify-content: space-around;

      a {
        margin-right: 10px;
        text-decoration: none;
        font-size: 12px !important;
        font-weight: 500 !important;
      }
      .gold {
        margin: 0.6rem;
      }
      .icons {
        margin-right: 6rem;

        a {
          padding: 0px 0.6rem;
          font-size: 12px !important;
          font-weight: 500 !important;
        }
      }
    }
  }
  // the top nav end
  // starting of the bottom nav
  .bottom-nav {
    justify-content: space-around;
    .input {
      margin-right: 8rem;

      .input-group {
        input::placeholder {
          font-size: 9px;
        }
        .first {
          border: none;
          span,
          .btn {
            padding: 0px 0px;
            font-size: 14px !important;
            font-weight: 500 !important;
          }
        }
        .second {
          border: none;

          border-radius: 5px;
          button,
          .btn {
            padding: 0px 0px;
          }
        }
      }
    }
    .nav-content {
      .nav-link {
        color: black;
        font-size: 14px !important;
        font-weight: bold !important;

        .check {
          color: red !important;
        }
      }
    }
  }
`;
