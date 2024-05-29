import { Container, Box, Paper, Grid, Typography, TextField, Button, InputAdornment, IconButton, Link } from "@mui/material";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [isError, setIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        setIsError(true);
        // Assuming successful validation, navigate to the dashboard
        navigate('/dashboard');
    }

  return (
    <>
    <Box sx={{ alignContent: 'center', height: '100vh' }}>
    <Container maxWidth="xs" component={Paper} sx={{ p: 3 }}>
            <Grid container>
                <Grid item sm={12}>
                    <Typography variant="h5" sx={{ p: 1 }}>Signup</Typography>
                </Grid>
                <Grid item sm={6}>
                    <Box sx={{ p: 1 }}>
                        <TextField error={isError} helperText={isError ? "Firstname should not be blank" : ""} label="First Name" variant="outlined"/>
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box sx={{ p: 1 }}>
                        <TextField error={isError} helperText={isError ? "Lastname should not be blank" : ""} label="Last Name" variant="outlined"/>
                    </Box>
                </Grid>
                <Grid item sm={12}>
                <Box sx={{ p: 1 }}>
                        <TextField error={isError} helperText={isError ? "Invalid Email Address" : ""} fullWidth label="Email Address" variant="outlined"/>
                    </Box>
                </Grid>
                <Grid item sm={12}>
                <Box sx={{ p: 1 }}>
                        <TextField 
                        type={showPassword ? "text" : "password"}
                        error={isError} helperText={isError ? "Invalid Password" : ""} fullWidth label="Password" variant="outlined"
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </IconButton>
                    </InputAdornment>
                    }} 
                    />
                </Box>
                </Grid>
            </Grid>
            <Box sx={{ p: 1 }}>
                <Button size="large" fullWidth onClick={validate}
                variant="contained" endIcon={<PersonAddAltRoundedIcon />}>Signup</Button>

            </Box>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Box sx={{ p: 1 }}>
                        <Link href="#" variant="body2" onClick={() => navigate('/')}>Already have an account? Login</Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
        </>
  )
}
