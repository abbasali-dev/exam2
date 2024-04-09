export const DRAWER_WIDTH = 80
export const BACKGROUND_COLOR_SIDEBAR = '#1B1B1B'
export const BACKGROUND_COLOR_APP = '#181818'
export const HOME_STR = 'Home'
export const TAG_STR = 'Tags'
export const SLIDER_MARKS = [
  { value: 1, label: '3' },
  { value: 2, label: '6' },
  { value: 3, label: '9' },
  { value: 4, label: '12' },
  { value: 5, label: '15' },
  { value: 6, label: '50' }
]
export interface TagInterface {
  id: string
  name: string
  count: number
}
export interface ProfileInterface {
  id: string
  name: string
  username: string
  avater: string
  isFollowing: boolean
}
export interface ServerPageInfo {
  total: number
  totalPages: number
}
export const TAGS_API = 'https://avl-frontend-exam.herokuapp.com/api/tags'
export const FOLLOWERS_API = 'https://avl-frontend-exam.herokuapp.com/api/users/all'
export const FOLLOWING_API = 'https://avl-frontend-exam.herokuapp.com/api/users/friends'
export const SEARCH_API = 'https://avl-frontend-exam.herokuapp.com/api/users/all'
