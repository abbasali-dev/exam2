import { Slider } from "@mui/material"
import styled from "styled-components"

export const StyledSlider = styled(Slider)`
  position: absolute !important;;
  width: 725px !important;
  height: 6px !important;
  top: 356px !important;
  left: 210px !important;

  .MuiSlider-track {
    background-image: linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%) !important;
  }

  .MuiSlider-rail {
    background: #FFFFFF !important;
    opacity: 50%;
  }

  .MuiSlider-thumb {
    background: #1B1B1B;
    border: 6px solid #FFD05D
  }

  .MuiSlider-markLabel {
    color: #FFFFFF !important;
    opacity: 50% !important;
  }

  .MuiSlider-markLabelActive {
    color: #FFFFFF !important;
    opacity: 0%;
  }

  @media (max-width: 440px) {
    width: 335px !important;
    left: 20px !important;
    top: 332px !important;
  }
`