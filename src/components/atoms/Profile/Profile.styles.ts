import { Avatar, ListItemText } from '@mui/material'
import styled from 'styled-components'

export const StyledActionButton = styled.button<{ isFollowing: boolean }>`
  background: ${({ isFollowing }) => isFollowing ? '#FFFFFF' : '#121212'};
  border-radius: 20px;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  color: ${({ isFollowing }) => !isFollowing ? '#FFFFFF' : '#121212'};
  font-family: Bokor;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  padding: 8px 10px;
  text-align: center;
`

export const StyledListItemText = styled(ListItemText)`
  .MuiListItemText-primary {
    color: #FFFFFF;
    font-family: Ubuntu;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.15000000596046448px;
    line-height: 24px;
    text-align: left;
  }

  .MuiListItemText-secondary {
    color: #808080;
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: 400;
    height: 21px;
    letter-spacing: 0.25px;
    line-height: 21px;
    opacity: 0.5px;
    text-align: left;
    width: 79px;
  }
`

export const StyledAvatar = styled(Avatar)`
  border-radius: 5px !important;
  border: 1px solid #F8F8F8;
  height: 40px !important;
  object-fit: contain !important;
  width: 40px !important;

  .img {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`
