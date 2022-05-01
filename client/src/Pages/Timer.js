import * as React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import CountdownTimer from '../components/Countdown-timer'

export default function Timer() {

    return (
        <Grid 
            container spacing={2} 
            sx={{
                height: '100%',
                textAlign: 'center',
                alignContent: 'center',
                justifyContent: 'center'}}
        >
            <Grid item xs={12}>
                <CountdownTimer />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h3'>5 x Push-ups</Typography>
            </Grid>
            <Grid item xs={4}>
                <Button variant='outlined' color='secondary'>Done</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant='outlined' color='secondary'>Skip</Button>
            </Grid>
            <Grid item xs={4}>
                <Button variant='outlined' color='secondary'>Change</Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5'>Today: 25 push-ups completed.</Typography>
                <Typography variant='h5'>75 remaining, you can do it!.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant='outlined' color='secondary'>Save</Button>
            </Grid>
        </Grid>
    )

}