import React from 'react';
import {TailSpin} from "react-loader-spinner";
import {styled} from '@mui/material/styles';

const SpinnerWrapper = styled("div")({
  width: "200px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "200px",
  flexGrow: 1
})

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <TailSpin ariaLabel="loading-indicator" color="#fff" />
    </SpinnerWrapper>)
}

export default Spinner;
