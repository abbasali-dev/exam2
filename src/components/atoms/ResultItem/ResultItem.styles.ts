import styled from 'styled-components'

export const StyledResultItem = styled.div`
  width: 219px;
  height: 197px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 440px) {
    width: 335px;
    height: 273px;
  }
`

export const StyledResultImage = styled.img<{ backgroundUrl: string }>`
  position: relative;
  width: 219px;
  height: 146px;
  background-image: url(${props => props.backgroundUrl});
  border: 1px solid #FFFFFF;

  @media (max-width: 440px) {
    width: 335px;
    height: 220px;
  }
`

export const StyledCategoryResultText = styled.div`
  position: relative;
  left: 0%;
  right: 9.38%;
  top: 3.44%;
  bottom: 62.11%;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 14.9px;
  line-height: 150%;
  letter-spacing: 0.139688px;
  color: #FFFFFF;
`

export const StyledCategoryResultUserName = styled.div`
  position: relative;
  left: 0%;
  right: 8.62%;
  top: 3.89%;
  bottom: 60.22%;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 11.175px;
  line-height: 150%;
  letter-spacing: 0.3725px;
  color: #B2B2B2;
`
