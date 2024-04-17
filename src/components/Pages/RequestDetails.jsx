import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, Box, Grid, List, ListItem, ListItemText, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import PanToolIcon from '@mui/icons-material/PanTool';
import PendingIcon from '@mui/icons-material/Pending';

import MoneyFormat from '../MoneyFormat';

export default function RequestDetails() {
    const [request, setRequest] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/request-services/${id}`)
            .then(res => res.json())
            .then(data => {
                setRequest(data);
            })
            .catch(err => console.error('Error fetching request:', err));
    }, [id]);

    const handleStatusChange = (event) => {
        const updatedStatus = event.target.value;
        setRequest(prev => {
            const updatedRequest = { ...prev, requestStatus: updatedStatus };

            fetch(`http://localhost:3001/request-services/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedRequest)
            })
            .catch(err => {
                console.error('Error updating request:', err);
                setRequest(prev);
            });

            return updatedRequest;
        });
    };


    return (
        <Box sx={{ p: 3 }}>
            {request ? (
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Service Request Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Project Information</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Project Name" secondary={request.projectName} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Project Budget" secondary={MoneyFormat(request.budget)} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Project Address" secondary={`${request.streetAddress}, ${request.city}, ${request.state} ${request.zipCode}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Project Begins" secondary={`${request.startMonth}-${request.startYear}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Anticipated Completion" secondary={`${request.completeMonth}-${request.completeYear}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Project Description" secondary={request.projectDescription} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Request Information</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Type of Project" secondary={request.projectType} />
                                </ListItem>
                                <ListItem>
                                <FormControl fullWidth>
                                    <InputLabel>Service Request Status</InputLabel>
                                    <Select
                                        value={request.requestStatus}
                                        label="Service Request Status"
                                        onChange={handleStatusChange}
                                    >
                                        <MenuItem value="pending">Pending&nbsp; <PendingIcon/></MenuItem>
                                        <MenuItem value="approved">Approved&nbsp; <CheckCircleIcon/></MenuItem>
                                        <MenuItem value="denied">Denied&nbsp; <DoDisturbOnIcon/></MenuItem>
                                        <MenuItem value="waitlist">Waitlist&nbsp; <PanToolIcon/></MenuItem>
                                    </Select>
                                </FormControl>
                        </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Project Point-of-Contact</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Full Name" secondary={`${request.firstName} ${request.lastName}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Email" secondary={request.email} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Phone" secondary={request.phone} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Other</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Additional Info" secondary={request.additionalInfo || 'Not provided'} />
                                </ListItem>
                            </List>
                        </Grid> 
                    </Grid>
                </Paper>
            ) : (
                <Typography variant="body1">Loading...</Typography>
            )}
        </Box>
    );
}
