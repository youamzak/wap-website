import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  width: 100%;
  height: 100px;
  p {
    margin-top: 0;
    margin-left: 10px;
    margin-right: 10px;
  }
`
const Footer = () => {
  return (
    <FooterStyled className="bk_red color_light" >
      <p>© - Web Automation Project 2022 Tous droits réservés</p>
      <p> zchegdali@gmail.com - +33(0)6.XX.XX.XX.XX </p>
    </FooterStyled>
  )
}

export default Footer