import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComp = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/">AboutUs</Link>
          </li>
          <li>
            <Link to="/about">ContactUS</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header`
  /* background-color: red; */
`;
