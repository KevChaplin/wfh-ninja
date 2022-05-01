import * as React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Timer functionality, including work/break interval settings
export default function CountdownTimer() {

    const [ sessionType, setSessionType ] = React.useState('WORK')
    const [ timerActive, setTimerActive ] = React.useState(false)

    const [ workInterval, setWorkInterval ] = React.useState(1)
    const [ breakInterval, setBreakInterval ] = React.useState(1)

    const [ time, setTime ] = React.useState(workInterval * 60)
    let min = (Math.floor(time / 60)).toString().padStart(2, '0')
    let sec = (time - 60 * min).toString().padStart(2, '0')

    // Increment functions for work time and break time. If incrementers are for current session time, will increment time also.
    // This allows user to manually adjust timer on the go. Timer within 0~99 minute range. 
    const incrementWork = () => { 
        if (sessionType === 'WORK' && time < 5940) { setTime(time + 60)}
        if (workInterval < 99) {setWorkInterval(workInterval + 1)} 
    }
    const decrementWork = () => { 
        if (sessionType === 'WORK' && time > 60) { setTime(time - 60)}
        if(workInterval > 1) {setWorkInterval(workInterval - 1)} 
    }

    const incrementBreak = () => {
        if (sessionType === 'BREAK' && time < 5940) { setTime(time + 60)}
        if(breakInterval < 99) {setBreakInterval(breakInterval + 1)} 
    }

    const decrementBreak = () => {
        if (sessionType === 'BREAK' && time > 60) { setTime(time - 60)}
        if(breakInterval > 1) {setBreakInterval(breakInterval - 1)} 
    }
 

    // Countdown timer
    React.useEffect(() => {
        if(timerActive) {
            const interval = setInterval(() => { if(time > 0) {setTime(time -1)} }, 1000);
            return () => clearInterval(interval)
        }
    }, [ time, timerActive ])

    // Start/stop timer
    const handleStartStop = () => { 
        setTimerActive(!timerActive) 
    }

    // Reset timer
    const handleReset = () => {
        setTimerActive(false)
        setSessionType('WORK')
        setTime(workInterval * 60)
    }

    // At time 0, switch session type, set time
    if (time === 0) {
        if (sessionType === 'WORK') {
            setSessionType('BREAK')
            setTime(breakInterval * 60)
        } else {
            setSessionType('WORK')
            setTime(workInterval * 60)
        };
    }

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
                <Typography variant='h1'>{`${min}:${sec}`}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Button variant='outlined' color='secondary' onClick={handleStartStop}>Start/Stop</Button>
            </Grid>
            <Grid item xs={4}>
                <Typography variant='h3'>{sessionType}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Button variant='outlined' color='secondary' onClick={handleReset}>Reset</Button>
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
        </Grid>
    )

}