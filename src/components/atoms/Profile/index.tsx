import { ListItem, ListItemAvatar } from '@mui/material'
import { StyledActionButton, StyledAvatar, StyledListItemText } from './Profile.styles'
import { ProfileInterface } from 'utils/appCostants'

type ProfileProps = {
  profile: ProfileInterface
}

const Profile = ({ profile }: ProfileProps) => {
  return (
    <ListItem key={profile.id}
      sx={{ paddingRight: '16px !important' }}
      secondaryAction={
        <StyledActionButton isFollowing={profile.isFollowing}>{profile.isFollowing ? 'Following' : 'Follow'}</StyledActionButton>
      }>
      <ListItemAvatar>
        <StyledAvatar src={profile.avater} alt={`img-${profile.avater}`} variant='square' />
      </ListItemAvatar>
      <StyledListItemText primary={profile.name} secondary={profile.username} />
    </ListItem>
  )
}

export default Profile