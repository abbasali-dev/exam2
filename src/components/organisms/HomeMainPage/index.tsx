import axios from 'axios'
import { useState } from 'react'

import { getSliderActualVal } from 'utils/helperFunctions'
import { ProfileInterface, SEARCH_API, ServerPageInfo } from 'utils/appCostants'
import ResultSection from 'components/organisms/ResultSection'
import SearchBar from 'components/atoms/SearchBar'
import SearchButton from 'components/atoms/Button'
import Slider from 'components/atoms/Slider'
import SliderText from 'components/atoms/SliderText'

const HomeMainPage = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [resultPerPage, setResultPerPage] = useState<number>(5)
  const [searchLoading, setSearchLoading] = useState<number>(-1)
  const [profileResults, setProfileResults] = useState<ProfileInterface[]>([])
  const [pageNo, setPageNo] = useState<number>(1)
  const [serverPageInfo, setServerPageInfo] = useState<ServerPageInfo>({ total: 0, totalPages: 0 })

  const fetchSearchResults = async (pageno: number) => {
    const response = await axios.get(`${SEARCH_API}?page=${pageno}&pageSize=${getSliderActualVal(resultPerPage)}&keyword=${searchValue.toLowerCase()}`)
    if (response.status === 200) {
      const newData = profileResults.concat(response.data.data)
      setProfileResults(newData)
      setServerPageInfo({ total: response.data.total, totalPages: response.data.totalPages })
    } else {
      setSearchLoading(-2)
    }
    setSearchLoading(1)
  }

  const onClickSearchHandler = () => {
    setSearchLoading(0)
    fetchSearchResults(pageNo)
    localStorage.setItem('result', 'true')
  }

  const resetResult = () => {
    setPageNo(1)
    setProfileResults([])
    setSearchLoading(-1)
    setResultPerPage(5)
    setServerPageInfo({ total: 0, totalPages: 0 })
  }

  const moreClickHandler = () => {
    setPageNo(pageNo + 1)
    fetchSearchResults(pageNo + 1)
  }

  return (
    <>
      {searchLoading === -1 && (
        <>
          <SearchBar setSearchValue={setSearchValue} />
          <SliderText resultPerPage={resultPerPage} />
          <Slider setResultPerPage={setResultPerPage} />
          <SearchButton onClickHandler={onClickSearchHandler} name={'SEARCH'} />
        </>
      )}
      <ResultSection
        resultList={profileResults}
        resetResult={resetResult}
        onMoreClick={moreClickHandler}
        serverPageInfo={serverPageInfo}
        loadingSearch={searchLoading}
      />
    </>
  )
}

export default HomeMainPage
