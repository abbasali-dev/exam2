import { Avatar, ListItemText } from "@mui/material"
import styled from "styled-components"

export const StyledActionButton = styled.button<{ isFollowing: boolean }>`
  box-sizing: border-box;
  padding: 8px 10px;

  /* BG/Default */
  background: ${({ isFollowing}) => isFollowing ? '#FFFFFF' : '#121212'};
  /* Primary/Main */
  border: 1px solid #FFFFFF;
  border-radius: 20px;
  color: ${({ isFollowing}) => !isFollowing ? '#FFFFFF' : '#121212'};

  font-family: Bokor;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
`
export const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    font-family: Ubuntu;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.15000000596046448px;
    text-align: left;
    color: #FFFFFF;
  }

  .MuiListItemText-secondary {
    width: 79px;
    height: 21px;
    opacity: 0.5px;

    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.25px;
    text-align: left;
    color: #808080;
  }
`
export const StyledAvatar = styled(Avatar)`
  width: 40px !important;
  height: 40px !important;
  border-radius: 5px !important;
  border: 1px solid #F8F8F8;
  object-fit: contain !important;

  .img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`
