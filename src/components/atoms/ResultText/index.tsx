import { ResultAction, StyledResultText } from './ResultText.styles'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'

type ResultTextType = {
  name: string
  resetResult: () => void
}

const ResultText = ({ name, resetResult }: ResultTextType) => {
  return (
    <>
      <ResultAction onClick={resetResult}>
        <KeyboardArrowLeft sx={{ width: 36, height: 36 }} />
      </ResultAction>
      <StyledResultText>
        {name}
      </StyledResultText>
    </>
  )
}

export default ResultText