import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const BannerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 88%;
  height: 223px;
  margin: 0% 6%;
  border-radius: 25px;

  @media (max-width: ${tabletSize}) {
    width: 90%;
    height: 167px;
    margin: 0% 5%;
  }

  @media (max-width: ${mobileSize}) {
    width: 90%;
    height: 111px;
    margin: 0% 5%;
    white-space: pre-line;
    ${props =>
    props.isAboutPage &&
    css`
    height: 223px;
    `}
  }
`;

const BannerImage = styled.img`
width: 100%;
height: 223px;
object-fit: cover;
filter: brightness(75%);
border-radius: 25px;
z-index: 0;

@media (max-width: ${tabletSize}) {
  height: 167px;
  border-radius: 18px;
}
@media (max-width: ${mobileSize}) {
  height: 111px;
  border-radius: 10px;
  ${props =>
    props.isAboutPage &&
    css`
    height: 223px;
    `}
}


`;

const BannerText = styled.h1`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  font-weight: 500;
  color: #FFFFFF;
  z-index: 1;
  margin: 0px;
  text-align: center;
  
  @media (max-width: ${tabletSize}) {
    font-size: 36px;
  }

  @media (max-width: ${mobileSize}) {
    left: 55%;
    font-size: 24px;
    text-align: inherit;
  }
`;

function Banner({ imageUrl, text, isAboutPage }) {
    return (
      <BannerContainer isAboutPage={isAboutPage}>
        
        <BannerImage src={imageUrl} alt="Banner Image" isAboutPage={isAboutPage}/>
        <BannerText>{text}</BannerText>
        
      </BannerContainer>
    );
  }

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isAboutPage: PropTypes.bool,   
  };

  Banner.defaultProps = {
    isAboutPage: false, // Par défaut, le composant n'est pas sur la page "About"
  };

export default Banner;