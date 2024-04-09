import { Skeleton } from '@mui/material'
import ResultText from 'components/atoms/ResultText'
import { StyledResultTextDown } from 'components/atoms/ResultText/ResultText.styles'
import ResultList from 'components/molecules/ResultList'
import { useEffect, useState } from 'react'
import { ProfileInterface, ServerPageInfo } from 'utils/appCostants'

type ResultSectionProps = {
  resultList: ProfileInterface[]
  resetResult: () => void
  onMoreClick: () => void
  serverPageInfo: ServerPageInfo
  loadingSearch: number
}
const ResultSection = ({ resultList, resetResult, onMoreClick, serverPageInfo, loadingSearch }: ResultSectionProps) => {
  const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
		})
	}, [])

  const SkeletonRenderer = Array.from(new Array(20)).map((_, index) => {
    return <>
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton />
      <Skeleton width="60%" />
    </>
  })

  console.log(resetResult)
  
  return (
    <>
      {loadingSearch === 0 && SkeletonRenderer}
      {loadingSearch !== -1 && <ResultText resetResult={resetResult} name={width <= 440 ? 'Home Page' : 'Results'} />}
      {loadingSearch !== -1 && width <= 440 && <StyledResultTextDown>Results</StyledResultTextDown> }
      {loadingSearch === 1 && resultList.length > 0 && <ResultList resultList={resultList} onClickMore={onMoreClick} serverPageInfo={serverPageInfo} />}
      {loadingSearch === -2 && resultList.length === 0 && 'Error While Fetching the Results Please Refresh!'}
    </>
  )
}

export default ResultSection