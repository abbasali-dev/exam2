import styled from "styled-components";

export const StyledTagText = styled.div`
  position: absolute;
  width: 63px;
  height: 45px;
  top: 80px;
  left: 257px;
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 150%;
  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #FFFFFF;

  @media (max-width: 440px) {
    width: 50px;
    height: 36px;
    top: 90px;
    left: 20px;
    font-size: 24px;
  }
`