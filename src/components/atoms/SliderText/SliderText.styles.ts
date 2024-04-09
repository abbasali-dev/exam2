import styled from 'styled-components'

export const StyledSliderText = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-family: 'Ubuntu';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  height: 36px;
  left: 210px;
  line-height: 150%;
  position: absolute;
  text-transform: capitalize;
  top: 230px;
  width: 237px;
  
  @media (max-width: 440px) {
    top: 210px;
    left: 20px;
  }
`

export const StyledResultText = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-family: 'Ubuntu';
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  height: 50px;
  left: 210px;
  line-height: 150%;
  position: absolute;
  top: 286px;
  width: 55px;

  @media (max-width: 440px) {
    left: 20px;
    top: 262px;
  }
`

export const StyledResultTextHelper = styled.div`
  color: #FFFFFF;
  font-family: 'Ubuntu';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  height: 24px;
  left: 275px;
  letter-spacing: 0.15px;
  line-height: 150%;
  position: absolute;
  top: 308px;
  width: 51px;

  @media (max-width: 440px) {
    left: 85px;
    top: 284px;
  }
`
