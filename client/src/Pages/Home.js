import * as React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function Home() {

    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography variant='h1'>
                WFH NIINJA
            </Typography>
        </Box>
    )
}