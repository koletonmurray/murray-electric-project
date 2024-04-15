import { useState, React } from 'react';
import { TextField, Button, Typography, Grid, FormControl, FormHelperText, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function RequestServices () {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        projectName: '',
        projectType: '',
        budget: 0,
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        startMonth: undefined,
        startYear: undefined,
        completeMonth: undefined,
        completeYear: undefined,
        projectDescription: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        additionalInfo: '',
        requestStatus: 'pending'  
    });

    const handleInputChange = (event) => {
        const { name, type, value } = event.target;
        if (type === 'number') {
            const parsedValue = parseInt(value, 10);
            setFormData({ ...formData, [name]: isNaN(parsedValue) ? '' : parsedValue });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = (data) => {
        const errorMessage = "This field is required.";
        let tempErrors = {};

        tempErrors.projectName = data.projectName ? "" : errorMessage;
        tempErrors.projectType = data.projectType ? "" : errorMessage;
        tempErrors.streetAddress = data.streetAddress ? "" : errorMessage;
        tempErrors.city = data.city ? "" : errorMessage;
        tempErrors.state = data.state ? "" : errorMessage;
        tempErrors.zipCode = data.zipCode ? "" : errorMessage;
        tempErrors.startMonth = data.startMonth ? "" : errorMessage;
        tempErrors.startYear = data.startYear ? "" : errorMessage;
        tempErrors.completeMonth = data.completeMonth ? "" : errorMessage;
        tempErrors.completeYear = data.completeYear ? "" : errorMessage;
        tempErrors.projectDescription = data.projectDescription ? "" : errorMessage;
        tempErrors.firstName = data.firstName ? "" : errorMessage;
        tempErrors.lastName = data.lastName ? "" : errorMessage;
        tempErrors.email = data.email ? (/^\S+@\S+\.\S+$/.test(data.email) ? "" : "Email is not valid.") : errorMessage;
        tempErrors.phone = data.phone ? (/^\d{10}$/.test(data.phone.replace(/\D/g, '')) ? "" : "Phone number is not valid.") : errorMessage;

        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm(formData)) {
            console.log("Validation failed");
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/request-services', {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Application submitted successfully');
                navigate('/success');
            } else {
                console.error('Submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <h1>Request Our Services</h1>

                <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
                    <div className="text-left text-black px-2 md:px-7">
                        <p>We're excited that you're considering our services for your project needs. To begin, please complete the form below. Your submission is the first step towards realizing your project with our expert electrical team.</p>
                        <ul className='list-disc'>
                            <li><strong>Be Detailed:</strong> In each section of the form, provide as much detail as possible. The more information you share about your project and requirements, the better we can tailor our services to meet your needs.</li>
                            <li><strong>Project Information:</strong> Please provide comprehensive details about your project, including the type, scope, and specific requirements. Include the projected start and completion dates, and any pertinent information that will help us understand the scale and objectives of your project.</li>
                            <li><strong>Contact Information:</strong> Don't forget to include the full name, phone number, and email address for the project point-of-contact so we can easily communicate with you regarding your request.</li>
                            <li><strong>Additional Information:</strong> If there's anything else you think we should know or consider about your project or your expectations from our services, please include this information as well.</li>
                        </ul>
                        <p className='pt-7'>After submitting your request, our team will review your details and get in touch with you about the next steps. We value your interest in our services and are eager to contribute to your project's success.</p>
                        <p>Let's get started!</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <Typography variant="h4" component="h1" gutterBottom className="text-center">
                            Project Information
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12}>
                                <TextField
                                    required
                                    id="projectName"
                                    name="projectName"
                                    label="Project Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.projectName}
                                    onChange={handleInputChange}
                                    error={!!errors.projectName}
                                    helperText={errors.projectName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="project-type-select-label">Project Type *</InputLabel>
                                    <Select
                                        labelId="project-type-select-label"
                                        id="projectType"
                                        label="Project Type"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleInputChange}
                                        error={!!errors.projectType}
                                        required
                                    >
                                        <MenuItem value="Residential">Residential</MenuItem>
                                        <MenuItem value="Commercial">Commercial</MenuItem>
                                        <MenuItem value="Other">Other (Specify in Additional Information)</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.projectType}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="budget"
                                    name="budget"
                                    label="Estimated Project Budget"
                                    type="number"
                                    InputProps={{ inputProps: { min: 0} }}
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    fullWidth
                                    error={!!errors.budget}
                                    helperText={errors.budget}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h1" gutterBottom className="text-center">
                                Project Location
                            </Typography>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <TextField
                                    id="streetAddress"
                                    name="streetAddress"
                                    label="Street Address"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    margin="normal"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    error={!!errors.streetAddress}
                                    helperText={errors.streetAddress}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    id="city"
                                    name="city"
                                    label="City"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    margin="normal"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    error={!!errors.city}
                                    helperText={errors.city}
                                />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <TextField
                                    id="state"
                                    name="state"
                                    label="State"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    margin="normal"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    error={!!errors.state}
                                    helperText={errors.state}
                                />
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <TextField
                                    id="zipCode"
                                    name="zipCode"
                                    label="Zip Code"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    margin="normal"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    error={!!errors.zipCode}
                                    helperText={errors.zipCode}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h5" component="h1" gutterBottom className="text-center">
                                Project Timeline
                            </Typography>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="startMonth"
                                    name="startMonth"
                                    label="Project Start Month"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1, max: 12} }}
                                    value={formData.startMonth}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.startMonth}
                                    helperText={errors.startMonth}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="startYear"
                                    name="startYear"
                                    label="Project Start Year"
                                    type="number"
                                    InputProps={{ inputProps: { min: new Date().getFullYear()} }}
                                    value={formData.startYear}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.startYear}
                                    helperText={errors.startYear}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="completeMonth"
                                    name="completeMonth"
                                    label="Anticipated Month Complete"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1, max: 12} }}
                                    value={formData.completeMonth}
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.completeMonth}
                                    helperText={errors.completeMonth}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="completeYear"
                                    name="completeYear"
                                    label="Anticipated Year Complete"
                                    type="number"
                                    InputProps={{ inputProps: { min: new Date().getFullYear()} }}
                                    value={formData.completeYear}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.completeYear}
                                    helperText={errors.completeYear}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="projectDescription"
                                name="projectDescription"
                                label="Project Description"
                                multiline
                                rows={4}
                                variant="outlined"
                                value={formData.projectDescription}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                error={!!errors.projectDescription}
                                helperText={errors.projectDescription}
                            />
                        </Grid>
                        

                        <Grid item xs={12}>
                            <Typography variant="h4" component="h1" gutterBottom className="text-center">
                                Project Point-of-Contact
                            </Typography>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    error={!!errors.firstName}
                                    helperText={errors.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    error={!!errors.lastName}
                                    helperText={errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="phone"
                                    name="phone"
                                    label="Phone Number"
                                    variant="outlined"
                                    type='tel'
                                    fullWidth
                                    margin="normal"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="additionalInfo"
                                    name="additionalInfo"
                                    label="Additional Information (optional)"
                                    value={formData.additionalInfo}
                                    multiline
                                    rows={3}
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button type="submit" variant="contained" color="primary" style={{ width: 'fit-content' }}>
                                        Submit Application
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
        </>
    )
}