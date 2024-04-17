import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MoneyFormat from '../MoneyFormat';

/* Chat GPT helped me build this page to speed up the process */

export default function ReviewRequests () {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/request-services')
        .then(res => res.json())
        .then(data => {
            const processedData = data.map(app => ({
            ...app
            }));
            setRequests(processedData);
        })
        .catch(err => console.error('Error fetching requests:', err));
    }, []);

  return (
    <>
        <h1>Review Service Requests</h1>
        <div style={{ maxWidth: '600px', margin: 'auto' }}>    
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Project Name</TableCell>
                            <TableCell align="right">Type</TableCell>
                            <TableCell align="right">Budget</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {requests.map((req) => (
                            <TableRow key={req.id}>
                                <TableCell component="th" scope="row">
                                    <Link className='text-midBlue underline' to={`/admin/request/${req.id}`}>{req.projectName}</Link>
                                </TableCell>
                                <TableCell align="right">{req.projectType}</TableCell>
                                <TableCell align="right">{MoneyFormat(req.budget)}</TableCell>
                                <TableCell align="right">{req.requestStatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </>
  );
}