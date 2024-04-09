import { InputBase } from '@mui/material'
import styled from 'styled-components'

import { BACKGROUND_COLOR_APP } from 'utils/appCostants'

export const StyledSearchBar = styled(InputBase) <{ focused: boolean }>`
  background-color: ${BACKGROUND_COLOR_APP};
  border-radius: 6px;
  border: 3px solid ${({ focused }) => focused ? '#FF9B33' : '#FFFFFF80'};
  color: #FFFFFF !important;
  gap: 0px;
  height: 60px;
  left: 210px;
  opacity: 0px;
  padding-left: 18px;
  position: absolute;
  top: 110px;
  width: 725px;

  @media (max-width: 440px) {
    left: 20px;
    top: 32px;
    width: 335px;
  }
`

export const StyledSearchBarText = styled.div`
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
  top: 54px;
  width: 73px;

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
