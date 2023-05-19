import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 88%;
  height: 223px;
  margin: 0% 6%;
  border-radius: 25px;
  & > div {
  width: 100%;
  display: flex;
}
`;

const BannerImage = styled.img`
width: 100%;
height: 223px;
object-fit: cover;
filter: brightness(75%);
border-radius: 25px;
z-index: 0;
`;

const BannerText = styled.h1`
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Montserrat';
  font-size: 40px;
  color: #FFFFFF;
  z-index: 1;
  margin: 0px;
  text-align: center;
`;

function Banner({ imageUrl, text }) {
    return (
      <BannerContainer>
        <div>
        <BannerImage src={imageUrl} alt="Banner Image" />
        <BannerText>{text}</BannerText>
        </div>
      </BannerContainer>
    );
  }

Banner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,   
  };

export default Banner;