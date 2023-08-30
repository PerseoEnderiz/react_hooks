import React from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { useState } from "react";

const Form = () => {
  const [step, setStep] = useState(0)

  const cambiaFormulario = (step) => {
    setStep(step);
  }
  const steps = {
    0: <DatosUsuario cambiaFormulario={cambiaFormulario} />,
    1: <DatosPersonales cambiaFormulario={cambiaFormulario} />,
    2: <DatosEntrega cambiaFormulario={cambiaFormulario} />,
    3: <Complete cambiaFormulario={cambiaFormulario} />,
  }
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step}/> }
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
