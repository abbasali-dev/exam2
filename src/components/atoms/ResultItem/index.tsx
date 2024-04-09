import { ProfileInterface } from 'utils/appCostants'
import { StyledResultImage, StyledCategoryResultUserName, StyledCategoryResultText, StyledResultItem } from './ResultItem.styles'

type ResultItemProps = {
  resultItem: ProfileInterface
}

const ResultItem = ({ resultItem }: ResultItemProps) => {
  const truncateString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength - 3) + "..."
    }
    return str
  }
  
  return (
    <StyledResultItem>
      <StyledResultImage backgroundUrl={resultItem.avater} alt='No Image'/>
      <StyledCategoryResultText>
        {truncateString(resultItem.name, 30)}
      </StyledCategoryResultText>
      <StyledCategoryResultUserName>by {resultItem.username}</StyledCategoryResultUserName>
    </StyledResultItem>
  )
}

export default ResultItem