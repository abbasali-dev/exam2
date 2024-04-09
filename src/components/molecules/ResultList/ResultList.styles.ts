import styled from "styled-components";

export const StyledResultList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  position: absolute;
  left: 210px;
  top: 161px;
  max-width: 730px;

  @media (max-width: 400px) {
    top: 150px;
    left: 20px;
  }
`
export const StyledButtonMore = styled.button`
  padding: 13px 16px;
  position: relative;
  width: 343px;
  height: 40px;
  background: #FFFFFF;
  border-radius: 4px;
  font-family: Ubuntu;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  text-transform: uppercase;
  color: #121212;
`
