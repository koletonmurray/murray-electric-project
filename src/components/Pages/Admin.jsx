import React, { useEffect, useState } from 'react';
import { Paper, Grid, Typography, Box, Button } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

/* Chat GPT helped me implement the visualizations and it buffed out my fetch to work for the visualizations */

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Admin() {
    const [requestStatusData, setRequestStatusData] = useState({});
    const [applicationStatusData, setApplicationStatusData] = useState({});
    const [pendingRequests, setPendingRequests] = useState(0);
    const [pendingApplications, setPendingApplications] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/request-services')
        .then(res => res.json())
        .then(data => {
            const statusCounts = data.reduce((acc, item) => {
                acc[item.requestStatus] = (acc[item.requestStatus] || 0) + 1;
                return acc;
            }, {});

            setPendingRequests(statusCounts['pending'] || 0);

            const labels = Object.keys(statusCounts);
            const values = Object.values(statusCounts);
            setRequestStatusData({
                labels,
                datasets: [{
                    label: 'Request Status',
                    data: values,
                    backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                    borderWidth: 1,
                }]
            });
        });

        fetch('http://localhost:3001/job-applications')
        .then(res => res.json())
        .then(data => {
            const statusCounts = data.reduce((acc, item) => {
                acc[item.applicationStatus] = (acc[item.applicationStatus] || 0) + 1;
                return acc;
            }, {});

            setPendingApplications(statusCounts['pending'] || 0);

            const labels = Object.keys(statusCounts);
            const values = Object.values(statusCounts);
            setApplicationStatusData({
                labels,
                datasets: [{
                    label: 'Application Status',
                    data: values,
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1,
                }]
            });
        });
    }, []);

    return (
        <div className='pb-20'>
        <Box sx={{ flexGrow: 1 }} className="px-5">
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <div className='pb-5'></div>
            <Grid container spacing={3}>

                {/* Task List Widget */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Tasks
                        </Typography>
                        <ul className='pb-5'>
                            <li className={`list-none ${pendingApplications > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                Review new job applications ({pendingApplications} pending)
                            </li>
                            <li className={`list-none ${pendingRequests > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                Approve service requests ({pendingRequests} pending)
                            </li>

                            <li className='list-none'>Update past projects</li>
                        </ul>
                        <Button variant="contained" color="primary">
                            View All Tasks
                        </Button>
                        <div className='p-5 text-red-500 font-bold'>** Total Task functionality for adding and deleting tasks coming soon!</div>
                    </Paper>
                </Grid>

                {/* Quick Actions Widget */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                            Quick Actions
                        </Typography>
                        <Box>
                            <div className='flex flex-col gap-5 items-center justify-center'>
                                <Link to={"/admin/manage-access"}><Button variant="contained">Manage Admin Access</Button></Link>
                                <Link to={"/admin/job-applications"}><Button variant="contained" color='secondary'>Review Job Applications</Button></Link>
                                <Link to={"/admin/service-requests"}><Button variant="contained" color='success'>Review Service Requests</Button></Link>
                            </div>
                        </Box>
                    </Paper>
                </Grid>

                {/* Other Widget */}
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                        Other Widget
                        </Typography>
                        <Box>
                            <div className='flex flex-row gap-5 items-center justify-center'>
                            </div>
                            <div className='p-5 text-red-500 font-bold'>** More widgets coming soon!</div>
                        </Box>
                    </Paper>
                </Grid>

                {/* Request Status Visualization */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                        Request Service Status
                        </Typography>
                        {requestStatusData.labels ? <Doughnut data={requestStatusData} /> : <p>Loading...</p>}
                    </Paper>
                </Grid>

                {/* Application Status Visualization */}
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h6" color="text.secondary" gutterBottom>
                        Job Application Status
                        </Typography>
                        {applicationStatusData.labels ? <Doughnut data={applicationStatusData} /> : <p>Loading...</p>}
                    </Paper>
                </Grid>
            </Grid>
        </Box>
        </div>
    );
}