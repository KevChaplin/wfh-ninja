import * as React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

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
                <Typography variant='h1'>25:00</Typography>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' color='secondary'>Start/Stop</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' color='secondary'>Reset</Button>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h5'>5 x Push-ups</Typography>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' color='secondary'>Done</Button>
                <Button variant='outlined' color='secondary'>Skip</Button>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5'>Today: 25 push-ups completed.</Typography>
                <Typography variant='h5'>75 remaining, you can do it!.</Typography>
            </Grid>
            <Grid item xs={12}>
                <Button variant='outlined' color='secondary'>Finish and Save</Button>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h5'>Work Time</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h5'>Break Time</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant='outlined' color='secondary'sx={{ minWidth: 0 }}>-</Button>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='h6'>25</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant='outlined' color='secondary' sx={{ minWidth: 0 }}>+</Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant='outlined' color='secondary' sx={{ minWidth: 0 }}>-</Button>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='h6'>05</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant='outlined' color='secondary' sx={{ minWidth: 0 }}>+</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant='outlined' color='secondary'>Change Exercise</Button>
            </Grid>
        </Grid>
    )

}