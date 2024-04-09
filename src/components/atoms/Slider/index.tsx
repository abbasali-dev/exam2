import { Dispatch, SetStateAction } from 'react'

import { SLIDER_MARKS } from 'utils/appCostants'
import { StyledSlider } from './Slider.styles'

type SliderProps = {
  setResultPerPage: Dispatch<SetStateAction<number>>
}

const Slider = ({ setResultPerPage }: SliderProps) => {
  const onChangeHandler = (_: Event, newValue: number | number[]) => {
    setResultPerPage(newValue as number)
  }

  return (
    <StyledSlider
      marks={SLIDER_MARKS}
      defaultValue={5}
      min={1}
      max={6}
      onChange={onChangeHandler}
    />
  )
}

export default Slider
