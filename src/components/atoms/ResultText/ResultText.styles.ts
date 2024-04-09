import styled from 'styled-components'

export const StyledResultText = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-family: 'Ubuntu';
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  height: 45px;
  left: 217px;
  letter-spacing: 0.25px;
  line-height: 150%;
  position: absolute;
  top: 92px;
  width: 102px;

  @media (max-width: 440px) {
    font-size: 24px;
    width: 130px;
    top: 17px;
    left: 58.16px;
  }
`
export const ResultAction = styled.div`
  cursor: pointer;
  height: 36px;
  left: 160px;
  position: absolute;
  top: 97px;
  width: 36px;

  @media (max-width: 440px) {
    width: 26px;
    height: 26px;
    left: 19px;
    top: 23px;
  }
`
export const StyledResultTextDown = styled.div`
  align-items: center;
  color: #FFFFFF;
  display: flex;
  font-family: 'Ubuntu';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  height: 36px;
  left: 20px;
  line-height: 150%;
  position: absolute;
  text-transform: capitalize;
  top: 90px;
  width: 80px;
`
