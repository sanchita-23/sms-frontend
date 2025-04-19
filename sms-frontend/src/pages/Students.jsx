import React from 'react';
import { Container, Typography, Paper, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function Students() {
    const studentData = [
        { id: '001', name: 'Alice Johnson', grade: 'A' },
        { id: '002', name: 'Bob Smith', grade: 'B+' },
    ];

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom mt={4}>Students</Typography>
            <Button variant="contained" color="primary" sx={{ mb: 2 }}>Add Student</Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Grade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentData.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.grade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default Students;