import styled from "styled-components";

export const LogoText = styled.div`
	width: 35px;
	height: 15px;

	font-family: 'Ubuntu' !important;
	font-style: normal !important;
	font-weight: 700 !important;
	font-size: 13px !important;
	line-height: 15px !important;
	/* identical to box height */
	letter-spacing: -0.05em !important;

	/* Tutor/Gradient - Light */
	background: linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`
export const LogoBox = styled.div`
	display: flex;
  height: 88px;
	justify-content: center;
	align-items: center;
  width: 80px;
`