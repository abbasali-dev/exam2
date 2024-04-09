import { getSliderActualVal } from 'utils/helperFunctions'
import { StyledResultText, StyledResultTextHelper, StyledSliderText } from './SliderText.styles'

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
