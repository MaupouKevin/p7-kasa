import styled from 'styled-components';
import Rating from '../Rating';
import { mobileSize, tabletSize } from "../../utils/style/GlobalStyle"

const HousingContainer = styled.article`
    display: flex;
    margin: 1.5% 6%;
    justify-content: space-between;

    @media (max-width: ${tabletSize}) {
      margin: 1.5% 5%;
    }
  
    @media (max-width: ${mobileSize}) {
      margin: 1.5% 5%;
      flex-direction: column;
    }
`
const HousingInfo = styled.section`
    display: flex;
    width: 60%;
    justify-content: flex-start;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: 500;
    margin: 5px 0px;

  @media (max-width: ${tabletSize}) {
    font-size: 27px;
  }

  @media (max-width: ${mobileSize}) {
    font-size: 18px;
  }
`

const Location = styled.h2`
    font-size: 18px;
    font-weight: 500;
    margin: 5px 0px;

    @media (max-width: ${tabletSize}) {
      font-size: 16px;
    }
  
    @media (max-width: ${mobileSize}) {
      font-size: 14px;
    }
`

const TagsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: 3%;
    margin: 20px 0px;

      @media (max-width: ${mobileSize}) {
        flex-wrap: nowrap;
        margin: 10px 0px 0px 0px;
      }
`

const TagDisplay = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    font-size: 14px;
    background: rgb(255,97,97);
    color: white;

    @media (max-width: ${tabletSize}) {
        font-size: 12px;
      }
    
      @media (max-width: ${mobileSize}) {
        font-size: 10px;
        border-radius: 5px;
        padding: 4px 10px;
        white-space: nowrap;
      }
`

const HousingRates = styled.section`
display: flex;
justify-content: flex-start;
flex-direction: column;

    @media (max-width: ${mobileSize}) {
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`

const Host = styled.div`
display: flex;
justify-content: flex-end;
gap: 5%;
align-items: center;
`
const HostName = styled.h2`
    display: flex;
    width: 57%;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 18px;
    text-align: right;
    word-wrap: break-word;

    @media (max-width: ${tabletSize}) {
      font-size: 16px;
    }
  
    @media (max-width: ${mobileSize}) {
      font-size: 12px;
    }
`
const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;

    @media (max-width: ${tabletSize}) {
        width: 48px;
        height: 48px;
      }

    @media (max-width: ${mobileSize}) {
        width: 32px;
        height: 32px;
    } 
`

function HousingInfos({ title, location, tags, host, rating }) {

    return (
        <HousingContainer>
            <HousingInfo>
                <Title>{title}</Title>
                <Location>{location}</Location>
                <TagsContainer>{tags.map((tag) => (
						<TagDisplay key={tag}>{tag}</TagDisplay>
					))}</TagsContainer>
            </HousingInfo>
            <HousingRates>
                <Host>
                    <HostName>{host.name}</HostName>
                    <HostPicture src={host.picture}/>
                </Host>
                <Rating rating={rating} />
            </HousingRates>

        </HousingContainer>
    );
}

export default HousingInfos