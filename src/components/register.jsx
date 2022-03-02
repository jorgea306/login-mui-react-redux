import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function Register() {
  const [sexo, setSexo] = React.useState("");

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };
  const [financiador, setFinanciador] = React.useState("");

  const handleChangeFinanciador = (event) => {
    setFinanciador(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Ingrese su Nombre"
              name="nombre"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="apellido"
              label="Ingrese su Apellido"
              name="apellido"
              autoFocus
            />
            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sexo}
              label="Sexo"
              onChange={handleChangeSexo}
              fullWidth
            >
              <MenuItem value={10}>Masculino</MenuItem>
              <MenuItem value={20}>Femenino</MenuItem>
              <MenuItem value={30}>X</MenuItem>
            </Select>
            <TextField
              margin="normal"
              required
              fullWidth
              name="dni"
              label="DNI"
              type="number"
              id="dni"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="domicilio"
              label="Ingrese su Domicilio"
              name="domicilio"
              autoFocus
            />
            <InputLabel id="demo-simple-select-label">Financiador</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={financiador}
              label="Financiador"
              onChange={handleChangeFinanciador}
              fullWidth
            >
              <MenuItem value={10}>Opcion 1</MenuItem>
              <MenuItem value={20}>Opcion 2</MenuItem>
              <MenuItem value={30}>Opcion 3</MenuItem>
              <MenuItem value={30}>Opcion 4</MenuItem>
              <MenuItem value={30}>Opcion 5</MenuItem>
            </Select>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
