import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 80%;
  font-size: 20px;
  margin-right: 50px;
  @media (max-width: 391px) {
    display: none;
  }
`;

const NavTitleStyled = styled.div`
  cursor: pointer;

  & div {
    height: 5px;
    width: 0%;
    transition-property: width;
    transition-duration: 0.5s;
  }
  p {
    position: relative;
    padding-bottom: 5px;
    &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 5px;
        background-color: #fff;
        transition-property: width;
        transition-duration: 0.5s;
        left: 0 ;
        top:100%;
       
      }
    &:hover {
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: #fff;
        transition-property: width;
        transition-duration: 0.5s;
       
      }
    }
  }
 
`;

const Nav = () => {
  return (
    <NavStyled>
      <Link to="section1" smooth={true} duration={1000} offset={-100}>
        <NavTitleStyled>
          <p>Développement Web</p>
          {/* <div className="bk_light" /> */}
        </NavTitleStyled>
      </Link>
      <Link to="section2" smooth={true} duration={1000} offset={-100}>
        <NavTitleStyled>
          <p>Automatisme</p>
          {/* <div className="bk_light" /> */}
        </NavTitleStyled>
      </Link>
      <Link to="contact" smooth={true} duration={1000} offset={-100}>
        <NavTitleStyled>
          <p>Contact</p>
          {/* <div className="bk_light" /> */}
        </NavTitleStyled>
      </Link>
    </NavStyled>
  );
};

export default Nav;
