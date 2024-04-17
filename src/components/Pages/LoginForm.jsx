import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Grid } from '@mui/material';

export default function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoggedIn } = useAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/admin');
    }
  }, [isLoggedIn, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <>
      <h1>Login</h1>
      
      <div className="max-w-2xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
        <p className='text-left py-3'>To access the admin site, login with your pre-assigned login information.</p>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="username"
                name="username"
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={handleInputChange}
                error={!!error && error}
                helperText={error && 'Invalid username'}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={handleInputChange}
                error={!!error && error}
                helperText={error && 'Invalid password'}
              />
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" variant="contained" color="primary" style={{ width: 'fit-content' }}>
                  Log In
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};