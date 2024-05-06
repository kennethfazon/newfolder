"use client"
import React from 'react';
import { Grid, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import GcashIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import BankTransferIcon from '@mui/icons-material/AccountBalance';
import NavBar from '../Appbar/page';

const MainPage = () => {
  const gradientStyle = {
    padding: '20px',
    borderRadius: '5px'
  };

  const curvedCornerBoxStyle = {
    borderRadius: '20px',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  };

  const handleClick = () => {
    console.log('Gtc Box clicked');
    // Add your desired action when the Gtc Box is clicked
  };

  return (
    <>
      <NavBar />
      <Grid container mb={15} spacing={6} style={gradientStyle}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h5">Dashboard</Typography>
          <Grid item xs={10} mt={4}>
            <Typography variant="body2" color="#757575">
              Welcome, <strong>Kenneth Fazon</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box style={curvedCornerBoxStyle}>
            <Typography variant="h6" gutterBottom>
              Nearest GTC Buses
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Bus Number</TableCell>
                    <TableCell>Distance</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* Replace the dummy data with your actual list of buses */}
                  <TableRow>
                    <TableCell>001</TableCell>
                    <TableCell>0.5 miles</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => console.log('Book clicked')}>Book</Button>
                      <Button variant="contained" color="secondary" onClick={() => console.log('Details clicked')}>Details</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>002</TableCell>
                    <TableCell>1 mile</TableCell>
                    <TableCell>
                      <Button variant="contained" color="primary" onClick={() => console.log('Book clicked')}>Book</Button>
                      <Button variant="contained" color="secondary" onClick={() => console.log('Details clicked')}>Details</Button>
                    </TableCell>
                  </TableRow>
                  {/* Add more rows as needed */}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <Grid item xs></Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;