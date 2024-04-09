import { TagInterface } from 'utils/appCostants'
import { StyledTagCategory, StyledTagCategoryResult, StyledTagCategoryResultText, StyledTagCategoryText, StyledTagCategoryTextBox, StyledTagItem } from './TagItem.styles'

type TagItemProps = {
  tagItem: TagInterface
}

const TagItem = ({ tagItem }: TagItemProps) => {
  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "..."
    }
    return str
  }
  
  return (
    <StyledTagItem>
      <StyledTagCategory>
        <StyledTagCategoryTextBox>
          <StyledTagCategoryText>{truncateString(tagItem.name, 8)}</StyledTagCategoryText>
        </StyledTagCategoryTextBox>
      </StyledTagCategory>
      <StyledTagCategoryResultText>
        {truncateString(tagItem.name, 20)}
      </StyledTagCategoryResultText>
      <StyledTagCategoryResult>{tagItem.count} Results</StyledTagCategoryResult>
    </StyledTagItem>
  )
}

export default TagItem