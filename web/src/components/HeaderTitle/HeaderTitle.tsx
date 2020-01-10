import React from "react";
import styled from "styled-components";

const HeaderTitleStyled = styled.div`
  font-size: 3rem;
  font-family: "Bowlby One SC", cursive;
  color: #fff;
  height: 100%;
  max-width: 510px;
  line-height: 9rem;
  display: flex;
  align-items: center;
  padding: 0 80px;
  @media only screen and (max-width: 769px) {
    font-size: 1.6rem;
    line-height: 2.5rem;
    padding: 0 6px;
  }
  @media only screen and (min-width: 770px) {
    font-size: 2.5rem;
    padding: 0 10px;
  }
  @media only screen and (min-width: 1120px) {
    font-size: 3rem;
    line-height: 7rem;
    padding: 0 80px;
  }
`;

const HeaderTitle = () => (
  <HeaderTitleStyled> Thumbnail Generator</HeaderTitleStyled>
);

export default HeaderTitle;
