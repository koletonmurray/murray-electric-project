import { useState, React } from 'react';
import { TextField, Button, Typography, Grid, FormControl, FormHelperText, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function JobApplication () {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        position: '',
        school: '',
        degree: '',
        fieldOfStudy: '',
        educationYearStart: undefined,
        educationYearComplete: undefined,
        skills: Array(5).fill(''),
        jobTitle: '',
        organization: '',
        workLocation: '',
        workYearStart: undefined,
        workYearComplete: undefined,
        jobDescription: '',
        linkedinProfile: '',
        coverLetter: '',
        additionalInfo: '',
        applicationStatus: 'pending'  
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

    const handleSkillChange = (index, event) => {
        const updatedSkills = [...formData.skills];
        updatedSkills[index] = event.target.value;
        setFormData({ ...formData, skills: updatedSkills });
    };

    const validateForm = (data) => {
        const errorMessage = "This field is required.";
        let tempErrors = {};

        tempErrors.firstName = data.firstName ? "" : errorMessage;
        tempErrors.lastName = data.lastName ? "" : errorMessage;
        tempErrors.email = data.email ? (/^\S+@\S+\.\S+$/.test(data.email) ? "" : "Email is not valid.") : errorMessage;
        tempErrors.phone = data.phone ? (/^\d{10}$/.test(data.phone.replace(/\D/g, '')) ? "" : "Phone number is not valid.") : errorMessage;

        tempErrors.streetAddress = data.streetAddress ? "" : errorMessage;
        tempErrors.city = data.city ? "" : errorMessage;
        tempErrors.state = data.state ? "" : errorMessage;
        tempErrors.zipCode = data.zipCode ? "" : errorMessage;

        tempErrors.position = data.position ? "" : errorMessage;
        tempErrors.school = data.school ? "" : errorMessage;
        tempErrors.degree = data.degree ? "" : errorMessage;
        tempErrors.fieldOfStudy = data.fieldOfStudy ? "" : errorMessage;
        tempErrors.educationYearStart = data.educationYearStart ? "" : errorMessage;
        tempErrors.educationYearComplete = data.educationYearComplete ? "" : errorMessage;

        tempErrors.jobTitle = data.jobTitle ? "" : errorMessage;
        tempErrors.organization = data.organization ? "" : errorMessage;
        tempErrors.workLocation = data.workLocation ? "" : errorMessage;
        tempErrors.workYearStart = data.workYearStart ? "" : errorMessage;
        tempErrors.workYearComplete = data.workYearComplete ? "" : errorMessage;
        tempErrors.jobDescription = data.jobDescription ? "" : errorMessage;
        
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
            const response = await fetch('http://localhost:3001/job-applications', {
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
            <h1>Join Our Team</h1>

                <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
                    <div className="text-left text-black px-2 md:px-7">
                        <p>We're thrilled that you're interested in joining our team. To start, please fill out the form below. This application is your first step towards a promising career path with our company.</p>
                        <ul className='list-disc'>
                            <li><strong>Be Detailed:</strong> Provide as much information as possible in each section. The more we know about you, the better we can assess your fit with our team.</li>
                            <li><strong>Educational Background:</strong> Your educational journey is important to us. Please include information about your schooling, any degrees or licenses you've obtained, and your field of study.</li>
                            <li><strong>Experience Matters:</strong> Share your most relevant or recent work experience. We're interested in understanding where you've been and what you've accomplished.</li>
                            <li><strong>Highlight Your Skills:</strong> We're eager to learn about your top five skills. Think about what makes you stand out and how your skills can benefit our team.</li>
                            <li><strong>Upload Your Resume:</strong> Don't forget to attach your most recent resume. If applicable, include any certifications or licenses that are relevant to the position you're applying for in your resume.</li>
                        </ul>
                        <p className=''>After submitting your application, our hiring team will review your information and reach out to you regarding the next steps. We appreciate your interest in joining us and look forward to learning more about you.</p>
                        <p>Let's get started!</p>
                    </div>

                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <Typography variant="h5" component="h1" gutterBottom className="text-center">
                            Personal Information
                        </Typography>
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
                                <Typography variant="h5" component="h1" gutterBottom className="text-center">
                                    Address
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="streetAddress"
                                    name="streetAddress"
                                    label="Street Address"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    error={!!errors.streetAddress}
                                    helperText={errors.streetAddress}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="city"
                                    name="city"
                                    label="City"
                                    variant="outlined"
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
                                    margin="normal"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    error={!!errors.zipCode}
                                    helperText={errors.zipCode}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h1" gutterBottom className="text-center">
                                    Position Applying For
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="position-select-label">Position *</InputLabel>
                                    <Select
                                        labelId="position-select-label"
                                        id="position"
                                        label="Position *"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleInputChange}
                                        error={!!errors.position}
                                        required
                                    >
                                        <MenuItem value="Apprentice Electrician">Electrician - Apprentice</MenuItem>
                                        <MenuItem value="Journeyman Electrician">Electrician - Journeyman</MenuItem>
                                        <MenuItem value="Master Electrician">Electrician - Master</MenuItem>
                                        <MenuItem value="Office">Office</MenuItem>
                                        <MenuItem value="Other">Other (Specify in Additional Information)</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.position}</FormHelperText>
                                </FormControl>
                            </Grid>

                            {/* Education Details */}
                            <Grid item xs={12}>
                                <Typography variant="h5" component="h1" gutterBottom className="text-center">
                                    Education Details
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    id="school"
                                    name="school"
                                    label="School"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.school}
                                    onChange={handleInputChange}
                                    error={!!errors.school}
                                    helperText={errors.school}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth margin='normal'>
                                    <InputLabel id="degree-select-label">Degree/License *</InputLabel>
                                    <Select
                                        required
                                        labelId="degree-select-label"
                                        id="degree"
                                        name='degree'
                                        value={formData.degree}
                                        label="Degree/License *"
                                        onChange={handleInputChange}
                                    >
                                        <MenuItem value="HighSchoolDiploma">High School Diploma</MenuItem>
                                        <MenuItem value="Certification">Certification</MenuItem>
                                        <MenuItem value="Apprentice Electrician">Apprentice Electrician</MenuItem>
                                        <MenuItem value="Journeyman Electrician">Journeyman Electrician</MenuItem>
                                        <MenuItem value="Master Electrician">Master Electrician</MenuItem>
                                        <MenuItem value="Associate's">Associate's Degree</MenuItem>
                                        <MenuItem value="Bachelor's">Bachelor's Degree</MenuItem>
                                        <MenuItem value="Master's">Master's Degree</MenuItem>
                                        <MenuItem value="Other">Other (Specify in Additional Information)</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    required
                                    id="fieldOfStudy"
                                    name="fieldOfStudy"
                                    label="Field of Study"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.fieldOfStudy}
                                    onChange={handleInputChange}
                                    error={!!errors.fieldOfStudy}
                                    helperText={errors.fieldOfStudy}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    required
                                    id="educationYearStart"
                                    name="educationYearStart"
                                    label="Year Started"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1900, max: new Date().getFullYear() } }}
                                    value={formData.educationYearStart}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.educationYearStart}
                                    helperText={errors.educationYearStart}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    required
                                    id="educationYearComplete"
                                    name="educationYearComplete"
                                    label="Year Completed"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1900, max: new Date().getFullYear() + 5 } }}
                                    value={formData.educationYearComplete}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.educationYearComplete}
                                    helperText={errors.educationYearComplete}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="h5" component="h1" gutterBottom className="text-center">
                                    Work Experience
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography variant="subtitle1">Please list your top five skills</Typography>
                                {formData.skills.map((skill, index) => (
                                    <TextField
                                        key={index}
                                        id={`skill-${index}`}
                                        name={`skill-${index}`}
                                        label={`Skill ${index + 1}`}
                                        variant="outlined"
                                        fullWidth
                                        margin="normal"
                                        value={skill}
                                        onChange={(e) => handleSkillChange(index, e)}
                                    />
                                ))}
                            </Grid>
                            
                            {/* Most Recent Work Experience */}
                            <Grid item xs={12}>
                                <Typography variant="h5" container="h1">Most Recent or Relevent Work</Typography>
                                <TextField
                                    required
                                    id="jobTitle"
                                    name="jobTitle"
                                    label="Job Title"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.jobTitle}
                                    onChange={handleInputChange}
                                    error={!!errors.jobTitle}
                                    helperText={errors.jobTitle}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="organization"
                                    name="organization"
                                    label="Organization"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                    error={!!errors.organization}
                                    helperText={errors.organization}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="workLocation"
                                    name="workLocation"
                                    label="Work Location"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.workLocation}
                                    onChange={handleInputChange}
                                    error={!!errors.workLocation}
                                    helperText={errors.workLocation}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    required
                                    id="workYearStart"
                                    name="workYearStart"
                                    label="Year Started"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1900, max: new Date().getFullYear() } }}
                                    value={formData.workYearStart}
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.workYearStart}
                                    helperText={errors.workYearStart}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    required
                                    id="workYearComplete"
                                    name="workYearComplete"
                                    label="Year Completed"
                                    type="number"
                                    InputProps={{ inputProps: { min: 1900, max: new Date().getFullYear() + 5 } }}
                                    value={formData.workYearComplete}
                                    onChange={handleInputChange}
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.workYearComplete}
                                    helperText={errors.workYearComplete}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="jobDescription"
                                    name="jobDescription"
                                    label="Job Description"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    value={formData.jobDescription}
                                    onChange={handleInputChange}
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.jobDescription}
                                    helperText={errors.jobDescription}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="resume"
                                    name="resume"
                                    label="Resume"
                                    type="file"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="linkedinProfile"
                                    name="linkedinProfile"
                                    label="linkedIn Profile URL (optional"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={formData.linkedinProfile}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                id="coverLetter"
                                name="coverLetter"
                                label="Cover Letter (optional)"
                                multiline
                                value={formData.coverLetter}
                                rows={4}
                                variant="outlined"
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
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