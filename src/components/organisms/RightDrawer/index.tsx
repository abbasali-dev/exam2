import React from 'react'
import { StyledRightDrawer } from './RightDrawer.styles'
import ProfileSection from 'components/molecules/ProfileSection'

const RightDrawer = () => {
  return (
    <StyledRightDrawer
			variant="permanent"
			anchor="right"
		>
      <ProfileSection />
		</StyledRightDrawer>
  )
}

export default RightDrawer