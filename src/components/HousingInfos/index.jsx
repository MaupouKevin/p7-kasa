import styled from 'styled-components';
import Rating from '../Rating';

const HousingContainer = styled.article`
    display: flex;
    margin: 1.5% 6%;
    justify-content: space-between;
`
const HousingInfo = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 36px;
    color: #FF6060;
    margin: 5px 0px;
`

const Location = styled.h2`
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 18px;
    color: #FF6060;
    margin: 5px 0px;
`

const TagsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: 4%;
    margin: 20px 0px;
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
`

const HousingRates = styled.section`
display: flex;
justify-content: flex-start;
flex-direction: column;
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
    color: rgb(255, 96, 96);
    text-align: right;
    word-wrap: break-word;
`
const HostPicture = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    
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