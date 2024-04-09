import { TabPanel } from "@mui/lab"
import { Tab } from "@mui/material"
import styled from "styled-components"

export const StyledTab = styled(Tab)`
  width: 187px !important;
  height: 33px !important;
  text-transform: none !important;
`
export const TabText = styled.div<{ isSelected: boolean }>`
  width: 81px;
  height: 20px;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */
  text-align: center;
  letter-spacing: 0.15px;
  color: ${({ isSelected }) => isSelected ? '#FFFFFF' : '#828282'};
`

export const StyledTabPanel = styled(TabPanel)`
  color: #FFFFFF !important;
  padding: 16px 0px 0px 0px !important;
`