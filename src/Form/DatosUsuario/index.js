// Class component
/* import React from "react";
import { TextField, Button, Box } from "@mui/material";

class DatosUsuario extends React.Component {
  render() {
    return (
      <Box
        component="form"
        autocomplete="off"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Ingresa un correo electrónico válido"}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  }
}

export default DatosUsuario; */
 
// Se convierte en un componente funcional
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validateEmail, validatePassword } from "./validaciones.js";

function DatosUsuario() {
  const [email, setEmail] = useState({ value: "", isValid: true });
  const [password, setPassword] = useState({ value: "", isValid: true });

  const handleEmailChange = (event) => {
    setEmail({
      value: event.target.value,
      isValid: validateEmail(event.target.value),
    });
  };

  const handlePasswordChange = (event) => {
    setPassword({
      value: event.target.value,
      isValid: validatePassword(event.target.value),
    });
  };

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={!email.isValid}
        helperText={!email.isValid && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={handleEmailChange}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={!password.isValid}
        helperText={!password.isValid && "La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número"}
        value={password.value}
        onChange={handlePasswordChange}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}

export default DatosUsuario;
