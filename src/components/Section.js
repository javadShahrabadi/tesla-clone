import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "styled-components";
import "./css/section.css";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImg={backgroundImg}>
      <Fade bottom>
        <div className='section__info'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Fade>

      <div className='section__buttons'>
        <Fade bottom>
          <div className='sections__buttonsGroup'>
            <button className='section__leftButton'>{leftBtnText}</button>
            {rightBtnText && (
              <button className='section__rightButton'>{rightBtnText}</button>
            )}
          </div>
        </Fade>
        <KeyboardArrowDownIcon className='secti on__downArrow' />
      </div>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
