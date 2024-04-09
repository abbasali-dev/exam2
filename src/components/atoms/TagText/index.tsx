import { useNavigate } from 'react-router-dom'
import { StyledTagText } from './TagText.styles'
import ResultText from '../ResultText'
import { useEffect, useState } from 'react'

const TagText = () => {
  const navigate = useNavigate()
  const [width, setWidth] = useState(window.innerWidth)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth)
		})
	}, [])

  return (
    <>
      {width <= 440 && <ResultText resetResult={() => navigate('/home')} name='Home Page' />}
      <StyledTagText>
        Tags
      </StyledTagText>
    </>
  )
}

export default TagText