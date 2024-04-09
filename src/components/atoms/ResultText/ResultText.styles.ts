import styled from "styled-components";

export const StyledResultText = styled.div`
  position: absolute;
  width: 102px;
  height: 45px;
  left: 217px;
  top: 92px;

  /* Headline 4/Regular */
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  /* identical to box height, or 45px */
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;

  /* Greyscale/white */
  color: #FFFFFF;

  @media (max-width: 440px) {
    font-size: 24px;
    width: 130px;
    top: 17px;
    left: 58.16px;
  }
`
export const ResultAction = styled.div`
  /* Action */
  position: absolute;
  width: 36px;
  height: 36px;
  left: 160px;
  top: 97px;
  cursor: pointer;

  @media (max-width: 440px) {
    width: 26px;
    height: 26px;
    left: 19px;
    top: 23px;
  }
`
export const StyledResultTextDown = styled.div`
  position: absolute;
  top: 90px;
  left: 20px;
  width: 80px;
  height: 36px;

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
`
