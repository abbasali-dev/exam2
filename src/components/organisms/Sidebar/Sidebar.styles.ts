import { Drawer } from '@mui/material'
import styled from 'styled-components'

import { BACKGROUND_COLOR_SIDEBAR, DRAWER_WIDTH } from 'utils/appCostants'

export const StyledDrawer = styled(Drawer)`
  flex-direction: column;
	flex-shrink: 0;
	
	.MuiDrawer-paper {
    background-color: ${BACKGROUND_COLOR_SIDEBAR} !important;
		box-sizing: border-box;
		overflow-x: hidden;
		width: ${DRAWER_WIDTH}px;
	}

	@media (max-width: 440px) {
		.MuiDrawer-paper {
			background: rgba(24, 24, 24, 0.2) !important;
			box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.8) !important;
			backdrop-filter: blur(27.1828px) !important;
			box-sizing: border-box;
			overflow-x: hidden;
			width: 100%;
			height: 66px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
  }
`