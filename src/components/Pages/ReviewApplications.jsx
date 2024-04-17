import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

/* Chat GPT helped me build this page to speed up the process */

export default function ReviewApplications () {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/job-applications')
        .then(res => res.json())
        .then(data => {
            const processedData = data.map(app => ({
            ...app,
            fullName: `${app.firstName} ${app.lastName}`
            }));
            setApplications(processedData);
        })
        .catch(err => console.error('Error fetching applications:', err));
    }, []);

  return (
    <>
        <h1>Review Job Applications</h1>
        <div style={{ maxWidth: '600px', margin: 'auto' }}>    
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Full Name</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.map((app) => (
                            <TableRow key={app.id}>
                                <TableCell component="th" scope="row">
                                    <Link className='text-midBlue underline' to={`/admin/application/${app.id}`}>{app.fullName}</Link>
                                </TableCell>
                                <TableCell align="right">{app.position}</TableCell>
                                <TableCell align="right">{app.applicationStatus}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </>
  );
}