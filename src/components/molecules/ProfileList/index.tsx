import { List, Skeleton } from '@mui/material'
import axios from 'axios'
import Profile from 'components/atoms/Profile'
import { useEffect, useState } from 'react'
import { FOLLOWERS_API, FOLLOWING_API, ProfileInterface } from 'utils/appCostants'

type ProfileListProps = {
  isFollowerSection: boolean
}
const ProfileList = ({ isFollowerSection }: ProfileListProps) => {
  const [profileList, setProfileList] = useState<ProfileInterface[]>([])

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await axios.get(isFollowerSection ? FOLLOWERS_API : FOLLOWING_API)
      setProfileList(response.data.data)
    }

    fetchProfile()
  }, [isFollowerSection])

  const SkeletonRenderer = Array.from(new Array(20)).map((_, index) => {
    return <>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
        animation="wave"
        height={10}
        width="80%"
        style={{ marginBottom: 6 }}
      />
      <Skeleton animation="wave" height={10} width="40%" />
    </>
  })

  return (
    <List sx={{ width: '100%' }}>
      {profileList.length === 0 && SkeletonRenderer}
      {profileList.map((profile) => {
        return <Profile key={`profile${profile.id}`} profile={profile} />
      })}
    </List>
  )
}

export default ProfileList