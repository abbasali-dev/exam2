import styled from "styled-components"

export const StyledTagItem = styled.div`
  width: 150px;
  height: 199px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const StyledTagCategory = styled.div`
  background-color: #262626;
  width: 150px;
  height: 150px;
  border-radius: 10px;
`
export const StyledTagCategoryTextBox = styled.div`
  /* Frame 4598 */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 3px 14px;

  position: relative;
  max-width: 130px;
  height: 50px;
  left: 10px;
  top: 86px;

  border: 4px solid #FFFFFF;
  border-radius: 8px;
`
export const StyledTagCategoryText = styled.div`
  height: 36px;
  max-width: 130px;
  

  /* Headline 5 / bold */
  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */
  display: flex;
  align-items: center;
  text-transform: capitalize;
  justify-content: center;

  /* Greyscale/white */
  color: #FFFFFF;
`
export const StyledTagCategoryResultText = styled.div`
  position: relative;
  left: 0%;
  right: 7.67%;
  top: 8.4%;
  bottom: 8.54%;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 14.9px;
  line-height: 150%;
  /* or 22px */
  letter-spacing: 0.139688px;

  /* Greyscale/white */
  color: #FFFFFF;
`
export const StyledTagCategoryResult = styled.div`
  position: relative;
  left: 0%;
  right: 5%;
  top: 9.46%;
  bottom: 0%;

  font-family: 'Ubuntu';
  font-style: normal;
  font-weight: 400;
  font-size: 11.175px;
  line-height: 150%;
  /* identical to box height, or 17px */
  letter-spacing: 0.3725px;

  /* Greyscale/400 */
  color: #B2B2B2;
`
