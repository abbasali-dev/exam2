// @ts-nocheck
import { Dispatch, SetStateAction } from 'react'
import { SvgIcon } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { HOME_STR, TAG_STR } from 'utils/appCostants'
import { ReactComponent as ImportedActiveSVG } from 'static/icons/IconClicked.svg'
import { ReactComponent as ImportedInActiveSVG } from 'static/icons/IconUnClicked.svg'
import { StyledBadge, TabBox, TabText } from './TabButton.styles'

type TabButtonProps = {
  isActive: boolean
  name: string
  setSelectedTab: Dispatch<SetStateAction<number>>
}

const TabButton = ({ isActive, name, setSelectedTab }: TabButtonProps) => {
  const navigate = useNavigate()
  const onClickTabHandler = () => {
    if (name === HOME_STR) {
      setSelectedTab(0)
      navigate('/home')
    }
    else {
      setSelectedTab(1)
      navigate('/tags')
    }
  }

  return (
    <StyledBadge color='primary' variant='dot' invisible={(isActive && name === TAG_STR) || name === HOME_STR}>
      <TabBox onClick={onClickTabHandler}>
        <SvgIcon component={isActive ? ImportedActiveSVG : ImportedInActiveSVG} />
        {isActive && <TabText>{name}</TabText>}
      </TabBox>
    </StyledBadge>
  )
}

export default TabButton
