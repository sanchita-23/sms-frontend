import React, { useEffect, useState } from 'react';
import {
    Container, Grid, Paper, Typography, Button, Box,
    CircularProgress, List, ListItem, ListItemText, IconButton, TextField
} from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { list, uploadData, remove, getUrl } from 'aws-amplify/storage';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function Dashboard() {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [fileInput, setFileInput] = useState(null);
    const [totalStudents] = useState(120); // Hardcoded for now
    const [grades] = useState({ 'Grade 9': 28, 'Grade 10': 24, 'Grade 11': 14, 'Grade 12': 10 });

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        const { items } = await list({ level: 'public' });
        setFiles(items);
    };

    const handleUpload = async () => {
        if (!fileInput) return;
        setUploading(true);
        await uploadData({
            key: fileInput.name,
            data: fileInput,
            options: { level: 'public' },
        }).result;
        setUploading(false);
        fetchFiles();
    };

    const handleDelete = async (key) => {
        await remove({ key, options: { level: 'public' } });
        fetchFiles();
    };

    const handleDownload = async (key) => {
        const url = await getUrl({ key, options: { level: 'public' } });
        window.open(url.url, '_blank');
    };

    const data = {
        labels: Object.keys(grades),
        datasets: [{
            label: 'Students per Grade',
            data: Object.values(grades),
            backgroundColor: '#1976d2',
        }],
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom color="primary">
                Student Management Dashboard
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Total Students</Typography>
                        <Typography variant="h4">{totalStudents}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={6} md={3}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Files Uploaded</Typography>
                        <Typography variant="h4">{files.length}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Bar data={data} />
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Student Reports</Typography>
                        <Button fullWidth variant="contained" href="/reports" sx={{ mt: 1 }}>
                            View Reports
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper sx={{ p: 3, textAlign: 'center' }}>
                        <Typography variant="h6">Manage Files</Typography>
                        <Button fullWidth variant="contained" href="/file-manager" sx={{ mt: 1 }}>
                            Go to File Manager
                        </Button>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper sx={{ p: 3 }}>
                        <Box display="flex" alignItems="center" gap={2}>
                            <input
                                type="file"
                                onChange={(e) => setFileInput(e.target.files[0])}
                                style={{ display: 'none' }}
                                id="upload-input"
                            />
                            <label htmlFor="upload-input">
                                <Button variant="outlined" component="span" startIcon={<UploadIcon />}>
                                    Choose File
                                </Button>
                            </label>
                            <Button
                                variant="contained"
                                onClick={handleUpload}
                                disabled={!fileInput || uploading}
                            >
                                {uploading ? <CircularProgress size={24} /> : 'Upload'}
                            </Button>
                        </Box>

                        <List>
                            {files.map((file) => (
                                <ListItem
                                    key={file.key}
                                    secondaryAction={
                                        <>
                                            <IconButton onClick={() => handleDownload(file.key)}>
                                                <CloudDownloadIcon />
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(file.key)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </>
                                    }
                                >
                                    <ListItemText primary={file.key} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}