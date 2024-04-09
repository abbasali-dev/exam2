import { Box } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import React from 'react'
import { StyledTab, StyledTabPanel, TabText } from './ProfileSection.styles'
import ProfileList from '../ProfileList'

const ProfileSection = () => {
  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '32px' }}>
        <TabList onChange={handleChange} variant='fullWidth' textColor='secondary' indicatorColor='secondary'>
          <StyledTab label={<TabText isSelected={value === '1'}>Followers</TabText>} value="1" />
          <StyledTab label={<TabText isSelected={value === '2'}>Following</TabText>} value="2" />
        </TabList>
      </Box>
      <StyledTabPanel value="1"><ProfileList isFollowerSection={true}/></StyledTabPanel>
      <StyledTabPanel value="2"><ProfileList isFollowerSection={false}/></StyledTabPanel>
    </TabContext>
  )
}

export default ProfileSection