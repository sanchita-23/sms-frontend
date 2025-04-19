import React from 'react';
import { Container, Button, Typography, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';


const sampleData = [
    { name: 'Alice Johnson', subject: 'Math', score: 88 },
    { name: 'Bob Smith', subject: 'Science', score: 92 },
    { name: 'Clara Lee', subject: 'History', score: 76 },
    { name: 'David Kim', subject: 'English', score: 85 },
];

export default function Reports() {
    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text('Student Performance Report', 14, 20);
        autoTable(doc, {
            startY: 30,
            head: [['Name', 'Subject', 'Score']],
            body: sampleData.map(student => [student.name, student.subject, student.score.toString()]),
        });

        doc.save('student_report.pdf');
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Student Performance Report
                </Typography>

                <Table sx={{ mt: 2 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sampleData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.subject}</TableCell>
                                <TableCell>{row.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <Button onClick={generatePDF} variant="contained" sx={{ mt: 3 }}>
                    Download PDF
                </Button>
            </Paper>
        </Container>
    );
}