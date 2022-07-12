import React from "react";
import styled from "styled-components";

const SectionStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 500px;
  padding-top: 10px;
`;

const SectionImgStyled = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    width: 100%;
  }
`;
const SectionCommentStyled = styled.div`
  width: 70%;
  padding-left: 10px;
`;

const Section = (props) => {
  const { right, title, comment, img, name, children } = props;
  return (
    <SectionStyled id={name}>
      {right ? (
        <>
          {children ? (
            children
          ) : (
            <SectionCommentStyled className="bk_light color_blue">
              <h2>{title}</h2>
              <p>{comment}</p>
            </SectionCommentStyled>
          )}

          <SectionImgStyled>
            <img src={img.type} alt="" />
          </SectionImgStyled>
        </>
      ) : (
        <>
          <SectionImgStyled>
            <img src={img.type} alt="" />
          </SectionImgStyled>
          {children ? (
            children
          ) : (
            <SectionCommentStyled className="bk_light color_blue">
              <h2>{title}</h2>
              <p>{comment}</p>
            </SectionCommentStyled>
          )}
        </>
      )}
    </SectionStyled>
  );
};

export default Section;
