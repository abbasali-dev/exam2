import TagItem from 'components/atoms/TagItem'
import { StyledTagList } from './TagList.styles'
import { useEffect, useState } from 'react'
import { TAGS_API, TagInterface } from 'utils/appCostants'
import axios from 'axios'
import { Skeleton } from '@mui/material'

const TagList = () => {
  const [tags, setTags] = useState<TagInterface[]>([])

  useEffect(() => {
    const fetchTags = async () => {
      const response = await axios.get(TAGS_API)
      setTags(response.data)
    }

    fetchTags()
  }, [])

  const SkeletonRenderer = Array.from(new Array(20)).map((_, index) => {
    return <>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </>
  })

  return (
    <StyledTagList>
      {tags.length === 0 && SkeletonRenderer}
      {tags.map((tag: TagInterface) => {
        return <TagItem tagItem={tag} />
      })
      }
    </StyledTagList>
  )
}

export default TagList