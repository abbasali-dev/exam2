import styled from "styled-components";

export const StyledButtonSearch = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 16px;

  position: absolute;
  width: 343px;
  height: 40px;
  left: 210px;
  top: 773px;

  background: #FFFFFF;
  border-radius: 4px;
  //styleName: Button/Uppercase;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  cursor: pointer;
  
  @media (max-width: 440px) {
    width: 335px;
    left: 20px;
    top: 682px;
  }
`