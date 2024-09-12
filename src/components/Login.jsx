import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Grid from '@mui/material/Grid';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; // Import jwt_decode
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import API_BASE_URL from "./apiConfig"
import { useCsrfToken } from './CSRFTokenContext'; // Import the hook

const defaultTheme = createTheme();

export default function Login({ setAuth }) {
  const csrfToken = useCsrfToken(); // Access the CSRF token using the hook
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      username: data.get('username'),
      password: data.get('password'),
    };

    try {

    // Include the CSRF token in the headers of your axios POST request
    const headers = {
      'X-CSRFToken': csrfToken,
      'Content-Type': 'application/json',
    };
      
      const response = await axios.post(`${API_BASE_URL}/form/api/superuser/`, credentials, {headers});

      if (response.status === 200) {
        const token = response.data.token;
        const superuser = response.data.is_superuser;
        const decodedToken = jwt_decode(token);
       
      

        if (decodedToken.exp * 1000 < Date.now()) {
          alert('Token expired');
          localStorage.removeItem('authToken');
          navigate('/login'); // Redirect to the login page
        } else {
          localStorage.setItem('authToken', token);
          // After successfully logging in
          localStorage.setItem('loggedInUsername', credentials.username);
          localStorage.setItem('loggedInPassword', credentials.password);
          localStorage.setItem('Superuser',superuser);


          navigate('/admin');
          console.log('Admin login successful');
        }
        
      } else {
        console.error('Admin login failed');
      }
    } catch (error) {
      alert("invalid credentials or check your internet")
      // console.error('Error occurred while logging in:', error.response);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
