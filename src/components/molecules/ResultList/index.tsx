import ResultItem from 'components/atoms/ResultItem'
import { StyledButtonMore, StyledResultList } from './ResultList.styles'
import { ProfileInterface, ServerPageInfo } from 'utils/appCostants'

type ResultListType = {
  resultList: ProfileInterface[]
  onClickMore: () => void
  serverPageInfo: ServerPageInfo
}

const ResultList = ({ onClickMore, resultList, serverPageInfo }: ResultListType) => {
  return (
    <StyledResultList>
      {resultList.map((resultItem: ProfileInterface) => {
        return <ResultItem resultItem={resultItem} />
      })}
      <StyledButtonMore onClick={onClickMore} disabled={serverPageInfo.total === resultList.length}>MORE</StyledButtonMore>
    </StyledResultList>
  )
}

export default ResultList