import * as React from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Receives workInterval and breakInterval props
export default function CountdownTimer(props) {

    const [ time, setTime ] = React.useState(props.workInterval * 60)
    const [ sessionType, setSessionType ] = React.useState('work')
    const [ timerActive, setTimerActive ] = React.useState(false)

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
        setSessionType('work')
        setTime(props.workInterval * 60)
    }

    // At time 0, switch session type, set time
    if (time === 0) {
        if (sessionType === 'work') {
            setSessionType('break')
            setTime(props.breakInterval * 60)
        } else {
            setSessionType('work')
            setTime(props.workInterval * 60)
        };
    }


    let min = Math.floor(time / 60)
    let sec = time - 60 * min

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
                <Typography variant='h1'>{time}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' color='secondary' onClick={handleStartStop}>Start/Stop</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant='outlined' color='secondary' onClick={handleReset}>Reset</Button>
            </Grid>
        </Grid>
    )

}