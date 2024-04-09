import { Drawer } from "@mui/material";
import styled from "styled-components";
import { BACKGROUND_COLOR_APP } from "utils/appCostants";

export const StyledRightDrawer = styled(Drawer)`
  flex-direction: column;
	flex-shrink: 0;

  ::-webkit-scrollbar {
    display: none;
  }
	
	.MuiDrawer-paper {
    background-color: ${BACKGROUND_COLOR_APP} !important;
		box-sizing: border-box;
		overflow-x: hidden;
		width: 375px;
	}

	@media (max-width: 1440px) {
    display: none;
  }
`