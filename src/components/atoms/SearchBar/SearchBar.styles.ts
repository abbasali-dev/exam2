import { InputBase } from "@mui/material";
import styled from "styled-components";
import { BACKGROUND_COLOR_APP } from "utils/appCostants";

export const StyledSearchBar = styled(InputBase)<{ focused: boolean }>`
  position: absolute;
  width: 725px;
  height: 60px;
  top: 110px;
  left: 210px;
  gap: 0px;
  border-radius: 6px;
  opacity: 0px;
  background-color: ${BACKGROUND_COLOR_APP};
  border: 3px solid ${({ focused }) => focused ? '#FF9B33' : '#FFFFFF80' };
  padding-left: 18px;
  color: #FFFFFF !important;

  @media (max-width: 440px) {
    left: 20px;
    top: 32px;
    width: 335px;
  }
`
export const StyledSearchBarText = styled.div`
    /* Search */

  position: absolute;
  width: 73px;
  height: 36px;
  left: 210px;
  top: 54px;

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
    left: 20px;
    top: 70px;
  }
`
export const StyledSearchBarLine = styled.hr`
  position: absolute;
  width: 725px;
  height: 0px;
  left: 210px;
  top: 200px;

  opacity: 0.1;
  border: 1px solid #FFFFFF;

  @media (max-width: 440px) {
    display: none;
  }
`
export const LogoHidden = styled.div`
  @media (min-width: 440px) {
    display: none;
  }
`
export const LogoHiddenUp = styled.div`
  @media (max-width: 440px) {
    display: none;
  }
`
