import styled from "styled-components";

export const StyledSliderText = styled.div`
  /* # of results per page */

  position: absolute;
  width: 237px;
  height: 36px;
  left: 210px;
  top: 230px;

  /* Headline 5/Regular */
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */
  display: flex;
  align-items: center;
  text-transform: capitalize;

  /* Greyscale/white */
  color: #FFFFFF;
  
  @media (max-width: 440px) {
    top: 210px;
    left: 20px;
  }
`
export const StyledResultText = styled.div`
  position: absolute;
  width: 55px;
  height: 50px;
  left: 210px;
  top: 286px;

  /* Headline 3 / Bold */
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  /* or 72px */
  display: flex;
  align-items: center;

  /* Greyscale/white */
  color: #FFFFFF;

  @media (max-width: 440px) {
    left: 20px;
    top: 262px;
  }
`
export const StyledResultTextHelper = styled.div`
  position: absolute;
  width: 51px;
  height: 24px;
  top: 308px;
  left: 275px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: #FFFFFF;

  @media (max-width: 440px) {
    left: 85px;
    top: 284px;
  }
`
