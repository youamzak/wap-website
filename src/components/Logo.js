import React from "react";
import styled from "styled-components";

const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  & img {
    
    height: 80px;
    /* margin-left: auto;
    margin-right: auto; */
  }
`;

const Logo = ({ img }) => {
  return (
    <LogoStyled>
      <img src={img.type} alt="" />
    </LogoStyled>
  );
};

export default Logo;
