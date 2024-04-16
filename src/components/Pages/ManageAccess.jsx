import React, { useState, useEffect } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; 

export default function ManageAccess() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/accounts')
      .then(response => response.json())
      .then(data => setAccounts(data))
      .catch(error => console.error('Error fetching accounts:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3001/accounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then(response => response.json())
      .then(data => {
        setAccounts([...accounts, data]);
        setUsername('');
        setPassword('');
      })
      .catch(error => console.error('Error adding account:', error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleDelete = (accountId) => {
    fetch(`http://localhost:3001/accounts/${accountId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setAccounts(accounts.filter(account => account.id !== accountId));
      })
      .catch(error => console.error('Error deleting account:', error));
  };

  return (
    <>
      <h1>Manage Access</h1>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <Paper style={{ padding: '20px', marginBottom: '20px' }}>
            <Typography>Create a New Admin Account</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="New Username"
              variant="outlined"
              fullWidth
              margin="normal"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <TextField
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <Button type="submit" variant="contained" color="primary">
              Add User
            </Button>
            <Typography className='pt-5'>* Ensure the new user saves their password</Typography>
          </form>
        </Paper>

        <div className='p-5'></div>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Remove User</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account, index) => (
                <TableRow key={index}>
                  <TableCell>{account.username}</TableCell>
                  <TableCell>{'•'.repeat(10)}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(account.id)} aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
