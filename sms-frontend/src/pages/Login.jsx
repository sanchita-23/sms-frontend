import React, { useEffect } from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { getCurrentUser, signInWithRedirect } from 'aws-amplify/auth';

export default function Login() {
    useEffect(() => {
        getCurrentUser()
            .then(() => {
                window.location.href = '/dashboard';
            })
            .catch(() => {
                // Not signed in, show login button
            });
    }, []);

    const handleLogin = () => {
        signInWithRedirect();
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ padding: 4, mt: 10 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign in
                </Typography>
                <Box mt={3}>
                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={handleLogin}
                    >
                        Sign in with AWS Cognito
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}