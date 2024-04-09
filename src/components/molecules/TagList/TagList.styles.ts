import styled from "styled-components";

export const StyledTagList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  position: absolute;
  left: 257px;
  top: 149px;
  max-width: 846px;
  padding-bottom: 10px;

  @media (max-width: 440px) {
    top: 150px;
    left: 20px;
  }
`