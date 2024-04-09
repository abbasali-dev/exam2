import styled from "styled-components";

export const SidebarBox = styled.div`
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;

  @media (max-width: 440px) {
    flex-direction: row;
    justify-content: center;
	  align-items: center;
    background: rgba(24, 24, 24, 0.2);
    box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(27.1828px);
  }
`
export const TabsBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px;

  @media (max-width: 440px) {
    flex-direction: row;
  }
`
