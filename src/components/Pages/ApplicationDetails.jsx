import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Paper, Typography, Box, Grid, List, ListItem, ListItemText, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import PanToolIcon from '@mui/icons-material/PanTool';
import PendingIcon from '@mui/icons-material/Pending';

export default function ApplciationDetails() {
    const [application, setApplication] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/job-applications/${id}`)
            .then(res => res.json())
            .then(data => {
                setApplication(data);
            })
            .catch(err => console.error('Error fetching application:', err));
    }, [id]);

    const handleStatusChange = (event) => {
        const updatedStatus = event.target.value;
        setApplication(prev => {
            const updatedApplication = { ...prev, applicationStatus: updatedStatus };

            fetch(`http://localhost:3001/job-applications/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedApplication)
            })
            .catch(err => {
                console.error('Error updating application:', err);
                setApplication(prev);
            });

            return updatedApplication;
        });
    };


    return (
        <Box sx={{ p: 3 }}>
            {application ? (
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Application Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Personal Information</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Full Name" secondary={`${application.firstName} ${application.lastName}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="LinkedIn Profile" secondary={application.linkedinProfile || "Not Provided"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Email" secondary={application.email} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Phone" secondary={application.phone} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Address" secondary={`${application.streetAddress}, ${application.city}, ${application.state} ${application.zipCode}`} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Job Information</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Position Applied" secondary={application.position} />
                                </ListItem>
                                <ListItem>
                                <FormControl fullWidth>
                                    <InputLabel>Applciation Status</InputLabel>
                                    <Select
                                        value={application.applicationStatus}
                                        label="Applciation Status"
                                        onChange={handleStatusChange}
                                    >
                                        <MenuItem value="pending">Pending&nbsp; <PendingIcon/></MenuItem>
                                        <MenuItem value="approved">Approved&nbsp; <CheckCircleIcon color='green'/></MenuItem>
                                        <MenuItem value="denied">Denied&nbsp; <DoDisturbOnIcon/></MenuItem>
                                        <MenuItem value="waitlist">Waitlist&nbsp; <PanToolIcon/></MenuItem>
                                    </Select>
                                </FormControl>
                        </ListItem>
                            </List>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Education</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="School" secondary={application.school} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Degree" secondary={application.degree} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Field of Study" secondary={application.fieldOfStudy} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Years" secondary={`${application.educationYearStart} - ${application.educationYearComplete}`} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Most Recent Work Experience</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Job Title" secondary={application.jobTitle} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Organization" secondary={application.organization} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Location" secondary={application.workLocation} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Years" secondary={`${application.workYearStart} - ${application.workYearComplete}`} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Job Description" secondary={application.jobDescription} />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6">Other</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Skills" secondary={application.skills.join(', ')} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Cover Letter" secondary={application.coverLetter || "Not provided"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Additional Info" secondary={application.additionalInfo || 'Not provided'} />
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
