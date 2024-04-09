import React from 'react'
import { StyledResultText, StyledResultTextHelper, StyledSliderText } from './SliderText.styles'
import { getSliderActualVal } from 'utils/helperFunctions'

type SliderTextProps = {
  resultPerPage: number
}

const SliderText = ({ resultPerPage }: SliderTextProps) => {
  return (
    <>
    <StyledSliderText>
      # of results per page
    </StyledSliderText>
    <StyledResultText>{getSliderActualVal(resultPerPage)}</StyledResultText>
    <StyledResultTextHelper>results</StyledResultTextHelper>
    </>
  )
}

export default SliderText