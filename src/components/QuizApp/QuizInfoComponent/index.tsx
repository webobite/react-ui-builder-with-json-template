import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'

interface IQuizInfoComponent {
    content?: "string",
    className?: "string"
}

const QuizInfoComponent = (props: IQuizInfoComponent) => {
    const { content, className } = props;
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} >{content}</Box>
            </Container>
        </React.Fragment>
    )
}

export default QuizInfoComponent