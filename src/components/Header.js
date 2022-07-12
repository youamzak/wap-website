import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Nav from "./Nav";
import LogoLight from "../img/logo_light.bmp";

const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const HeaderContentStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;

  width: 80%;
  height: 100px;
`;

const Header = () => {
  return (
    <HeaderStyled >
      <HeaderContentStyled className="bk_blue color_light">
        <Logo img={<LogoLight />} />
        <Nav />
      </HeaderContentStyled>
    </HeaderStyled>
  );
};

export default Header;
