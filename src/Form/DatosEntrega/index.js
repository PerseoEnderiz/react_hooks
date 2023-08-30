import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateAddress, validateCity, validateState } from "./validaciones.js";

const DatosEntrega = ({cambiaFormulario}) => {
  const [direccion, setDireccion] = useState({ value: "", isValid: true });
  const [ciudad, setCiudad] = useState({ value: "", isValid: true });
  const [estado, setEstado] = useState({ value: "", isValid: true });

  const handleDireccionChange = (event) => {
    setDireccion({
      value: event.target.value,
      isValid: validateAddress(event.target.value),
    });
  };

  const handleCiudadChange = (event) => {
    setCiudad({
      value: event.target.value,
      isValid: validateCity(event.target.value),
    });
  };

  const handleEstadoChange = (event) => {
    setEstado({
      value: event.target.value,
      isValid: validateState(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (direccion.isValid && ciudad.isValid && estado.isValid) {
      // Submit the form
      cambiaFormulario(3)
    }
  };

  return (
    <Box
      component="form"
      autocomplete="off"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!direccion.isValid}
        helperText={!direccion.isValid && "Ingresa una dirección válida"}
        value={direccion.value}
        onChange={handleDireccionChange}
        required
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!ciudad.isValid}
        helperText={!ciudad.isValid && "Ingresa una ciudad válida"}
        value={ciudad.value}
        onChange={handleCiudadChange}
        required
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!estado.isValid}
        helperText={!estado.isValid && "Ingresa un estado o provincia válido"}
        value={estado.value}
        onChange={handleEstadoChange}
        required
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
