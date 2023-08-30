import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateName, validatePhoneNumber } from "./validaciones.js";

const DatosPersonales = ({cambiaFormulario}) => {
  const [nombre, setNombre] = useState({ value: "", isValid: true });
  const [apellidos, setApellidos] = useState({ value: "", isValid: true });
  const [telefono, setTelefono] = useState({ value: "", isValid: true });

  const handleNombreChange = (event) => {
    setNombre({
      value: event.target.value,
      isValid: validateName(event.target.value),
    });
  };

  const handleApellidosChange = (event) => {
    setApellidos({
      value: event.target.value,
      isValid: validateName(event.target.value),
    });
  };

  const handleTelefonoChange = (event) => {
    setTelefono({
      value: event.target.value,
      isValid: validatePhoneNumber(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.isValid && apellidos.isValid && telefono.isValid) {
      cambiaFormulario(2)
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
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!nombre.isValid}
        helperText={!nombre.isValid && "Ingresa un nombre válido"}
        value={nombre.value}
        onChange={handleNombreChange}
        required
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={!apellidos.isValid}
        helperText={!apellidos.isValid && "Ingresa apellidos válidos"}
        value={apellidos.value}
        onChange={handleApellidosChange}
        required
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        error={!telefono.isValid}
        helperText={!telefono.isValid && "Ingresa un número telefónico válido de 10 digitos"}
        value={telefono.value}
        onChange={handleTelefonoChange}
        required
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
