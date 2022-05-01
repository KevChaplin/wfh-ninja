import * as React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

import CountdownTimer from '../components/Countdown-timer'

export default function Timer() {

    const [ workInterval, setWorkInterval ] = React.useState(1)
    const [ breakInterval, setBreakInterval ] = React.useState(1)
    // const [ time, setTime ] = React.useState(workInterval * 60)

    const incrementWork = () => { if(workInterval < 99) {setWorkInterval(workInterval + 1)} }
    const decrementWork = () => { if(workInterval > 1) {setWorkInterval(workInterval - 1)} }
    const incrementBreak = () => { if(breakInterval < 99) {setBreakInterval(breakInterval + 1)} }
    const decrementBreak = () => { if(breakInterval > 1) {setBreakInterval(breakInterval - 1)} }

    // let min = Math.floor(time / 60)
    // let sec = time - 60 * min

    // console.log(min, sec)

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
                <CountdownTimer workInterval={workInterval} breakInterval={breakInterval}/>
            </Grid>
            {/* <Grid item xs={12}>
                <Typography variant='h1'>25:00</Typography>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' color='secondary'>Start/Stop</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' color='secondary'>Reset</Button>
            </Grid> */}
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
                <Button variant='outlined' color='secondary'sx={{ minWidth: 0 }} onClick={decrementWork}>-</Button>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='h6'>{workInterval}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant='outlined' color='secondary' sx={{ minWidth: 0 }} onClick={incrementWork}>+</Button>
            </Grid>
            <Grid item xs={2}>
                <Button variant='outlined' color='secondary' sx={{ minWidth: 0 }} onClick={decrementBreak}>-</Button>
            </Grid>
            <Grid item xs={2}>
                <Typography variant='h6'>{breakInterval}</Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant='outlined' color='secondary' sx={{ minWidth: 0 }} onClick={incrementBreak}>+</Button>
            </Grid>
            <Grid item xs={12}>
                <Button variant='outlined' color='secondary'>Change Exercise</Button>
            </Grid>
        </Grid>
    )

}