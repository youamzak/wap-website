import React from 'react'
import styled from 'styled-components'

const FooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  width: 80%;
  height: 100px;
`
const Footer = () => {
  return (
    <FooterStyled className="bk_red color_light" >
      Footer
    </FooterStyled>
  )
}

export default Footer