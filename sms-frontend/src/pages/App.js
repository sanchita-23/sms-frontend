import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Students from './Students';
import Reports from './Reports';
import FileManager from './FileManager';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../services/theme';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/filemanager" element={<FileManager/>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;