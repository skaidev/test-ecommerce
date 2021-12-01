import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = () => {
  return (
    <Header>
      <nav className="top-nav bg-primary">
        <div className=" container d-flex align-items-lg-center justify-content-md-between">
          <div className="left d-flex align-items-md-center flex-column flex-md-row">
            <div class="dropdown">
              <a class="btn dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="images/download 1.svg" alt="" /> English
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="/">
                    Arabic
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    spanish
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Euro
                  </a>
                </li>
              </ul>
            </div>
            <div class="dropdown">
              <a class="btn dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Currency:USD
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a class="dropdown-item" href="/">
                    Naira
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    dollar
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    pounds
                  </a>
                </li>
              </ul>
            </div>
            <div className="icons d-flex">
              <a href="/">
                <i class="fab fa-facebook text-info"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter text-info"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in text-info"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram text-info"></i>
              </a>
            </div>
            <li className="p-0 m-0 d-md-flex d-none align-items-center phone ">
              <i className="fas fa-phone-alt me-3 text-info"></i>
              <p className="gold fw-regular ">+234 901 262 4162</p>
            </li>
          </div>
          <div className="p-0 d-flex m-0">
            <a href="/" className="text-secondary fw-bold2 me-2">
              About Us
            </a>
            <a href="/" className="text-info fw-bold mx-4">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <div className="bottom-nav">
        <nav className="navbar container">
          <div className="d-flex">
            <img src="images/Ububa logo for ui-02 1 (1).svg" className="" alt="" />
            <img src="images/Group (1).svg" alt="" />
          </div>
          <div className="pt-2">
            <div className="container d-flex">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  All Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="input-group">
                <input type="text" className=" form-control" placeholder="search products, categories" />
                <div className="input-group-text bg-secondary">
                  <span className="">
                    <i className="fas fa-search text-light fs-14"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="inputGroup">
            <div className="inputGroup1"></div>

            <label For="input">
              {" "}
              <span className="">
                All Categories <i className="fas fa-chevron-down text-secondary"></i>
              </span>
            </label>
            <input type="text" className="inputGroup" placeholder="search products, categories" />
            <div className="input">
              <span className=" text=light">
                <i className="fas fa-search text-light"></i>
              </span>
            </div>
          </div> */}

          <div className="nav-content ">
            <ul className="nav-item d-flex">
              <li>
                <a href="/" className="nav-link">
                  <i className="far fa-heart fs-21"></i>
                </a>
              </li>
              <li>
                <a href="/" className="nav-link">
                  <i className="fas fa-shopping-bag fs-21 me-4"></i>
                </a>
              </li>
              <li>
                <a href="/" className="nav-link text-danger ">
                  <i className="far fa-question-circle question fs-21"></i>
                </a>
              </li>
              <li>
                <a href="/" className="nav-link">
                  {" "}
                  <i className="far fa-user-circle profile fs-21"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* <div className="input-group-text ">
                <span className="">
                  All Categories <i className="fas fa-chevron-down text-secondary"></i>
                </span>
              </div> */}
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
  input[type="text"] {
    padding-right: 8rem;
  }
  .top-nav {
    font-size: 14px;

    .left {
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
    justify-content: space-between;
    .input {
      .input-group {
        input::placeholder {
          font-size: 9px;
        }
        .first {
          border: none;
          background-color: white;
          span,
          .btn {
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
      }
    }
  }
`;
