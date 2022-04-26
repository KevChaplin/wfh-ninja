import * as React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'


export default function Profile() {
    const [ ex1Name, setEx1Name ] = React.useState("")
    const [ ex1Reps, setEx1Reps ] = React.useState("")
    const [ ex2Name, setEx2Name ] = React.useState("")
    const [ ex2Reps, setEx2Reps ] = React.useState("")
    const [ ex3Name, setEx3Name ] = React.useState("")
    const [ ex3Reps, setEx3Reps ] = React.useState("")
    const [ sessions, setSessions ] = React.useState("")

    const handleChangeEx1 = (e) => setEx1Name(e.target.value)
    const handleChangeEx1Reps = (e) => setEx1Reps(e.target.value)
    const handleChangeEx2 = (e) => setEx2Name(e.target.value)
    const handleChangeEx2Reps = (e) => setEx2Reps(e.target.value)
    const handleChangeEx3 = (e) => setEx3Name(e.target.value)
    const handleChangeEx3Reps = (e) => setEx3Reps(e.target.value)
    const handleChangeSessions = (e) => setSessions(e.target.value)

    return (
        <Grid container spacing={2} sx={{height: '100%', textAlign: 'center', alignContent: 'center', justifyContent: 'center'}}>
            <Grid item xs={12}>
                <Typography variant='h3'>
                    My Username
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h4'>
                    Exercise
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant='h4'>
                    Daily Goal
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="exercise1"
                    label="Exercise 1"
                    value={ex1Name}
                    onChange={handleChangeEx1}
                    color="secondary"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="ex1reps"
                    label="Exercise 1 reps/seconds"
                    value={ex1Reps}
                    onChange={handleChangeEx1Reps}
                    color="secondary"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="exercise2"
                    label="Exercise 2"
                    value={ex2Name}
                    onChange={handleChangeEx2}
                    color="secondary"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="ex2reps"
                    label="Exercise 2 reps/seconds"
                    value={ex2Reps}
                    onChange={handleChangeEx2Reps}
                    color="secondary"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="exercise3"
                    label="Exercise 3"
                    value={ex3Name}
                    onChange={handleChangeEx3}
                    color="secondary"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="ex3reps"
                    label="Exercise 3 reps/seconds"
                    value={ex3Reps}
                    onChange={handleChangeEx3Reps}
                    color="secondary"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    id="dailySessions"
                    label="Estimated sessions / day"
                    value={sessions}
                    onChange={handleChangeSessions}
                    color="secondary"
                />
            </Grid>


            

     
            <Grid item xs={12}>
                <Button variant='outlined' color="secondary">Save</Button>
            </Grid>
        </Grid>
    )
}