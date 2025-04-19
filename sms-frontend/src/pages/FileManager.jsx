import React, { useEffect, useState } from 'react';
import {
    Container, Typography, CircularProgress, List, ListItem,
    ListItemText, IconButton, Box, Paper
} from '@mui/material';
import { list, getUrl, remove } from 'aws-amplify/storage';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

export default function FileManager() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        try {
            setLoading(true);
            const { items } = await list({ level: 'private9' });
            setFiles(items);
        } catch (error) {
            console.error('Failed to fetch files:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (key) => {
        try {
            await remove({ key, options: { level: 'public' } });
            fetchFiles(); // Refresh after delete
        } catch (err) {
            console.error('Error deleting file:', err);
        }
    };

    const handleDownload = async (key) => {
        try {
            const url = await getUrl({ key, options: { level: 'public' } });
            window.open(url.url, '_blank');
        } catch (err) {
            console.error('Error downloading file:', err);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                File Manager
            </Typography>
            <Paper sx={{ p: 3 }}>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <List>
                        {files.map((file, idx) => (
                            <ListItem key={idx} divider secondaryAction={
                                <Box>
                                    <IconButton onClick={() => handleDownload(file.key)} title="Download">
                                        <CloudDownloadIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(file.key)} title="Delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                            }>
                                <ListItemText primary={file.key} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Paper>
        </Container>
    );
}