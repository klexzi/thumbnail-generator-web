import React from "react";
import styled from "styled-components";

import headerBg from "../../assets/header-bg.jpg";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

const HeaderStyled = styled.div`
   background-image: url('${headerBg}');
   background-size: cover;
   background-position: center;
   height: 45vh;
   padding: 30px;
   width: 100%;
`;

const Header = () => (
  <HeaderStyled>
    <HeaderTitle />
  </HeaderStyled>
);
export default Header;
