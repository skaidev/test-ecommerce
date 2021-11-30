import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  return (
    <Header className="main-coat">
      <div className="row coat1">
        <div className=" col-md-8 coat2">
          <div className="dropdown d-flex ms-5">
            <span class="  border-right:5 dropdown-toggle border-right" type="" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/images/download 1.png" className="img mx-3" alt="" />
              English
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
            <hr className="ms-3" />
            <span class=" border-right-4 dropdown-toggle ms-4" type="" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              Currency USD
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
          <hr className="ms-5" />
          <span className="mx-5 px-0">
            <i class="fab fa-facebook px-3"></i> &nbsp;&nbsp;&nbsp;
            <i class="fab fa-twitter px-3"></i>&nbsp;&nbsp;&nbsp;
            <i class="fab fa-instagram-square ps-3"></i>&nbsp;&nbsp;&nbsp;
            <i class="fab fa-linkedin-in ps-3"></i>
          </span>
          <hr className="ms-2" />
          <div>
            <i class="fas fa-phone-alt"></i> &nbsp;&nbsp; +234 901 262 4162
          </div>
        </div>

        <span className="col-md-4 coat3">
          <ul className="nav-list2">
            <li className="topi">
              <hr className="ms-2 mt-1" />
              <Link to="/" className="about ms-lg-5">
                About us
              </Link>
            </li>
            <li>
              <Link to="/" className="ms-5">
                Contact us
              </Link>
            </li>
          </ul>
        </span>
      </div>
    </Header>
  );
};
export default HeaderComp;

const Header = styled.div`
  .coat1 {
    display: flex;
    background-color: #d6e6f3;
  }
  .coat2 {
    display: flex;
    padding: 7px;

    justify-content: space-between;
    .language {
      border-right: 2px solid #000000;
      margin-left: 3px;
    }
  }
  .nav-list2 {
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    margin-bottom: 0;
    list-style-type: none;
    list-style-type: none;
  }
  .topi {
    margin-top: 2px;
  }
  .about {
    color: red;
  }
  hr {
    display: inline-block;
    width: 1px;
    height: 20px;
    margin-top: 0%;
    margin-bottom: 0;
  }
`;
