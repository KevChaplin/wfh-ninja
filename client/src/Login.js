import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'


export default function Login() {

    const [ name, setName ] = React.useState("")
    const [ password, setPassword ] = React.useState("")

    const handleChangeName = (e) => setName(e.target.value)
    const handleChangePassword = (e) => setPassword(e.target.value)

    return (
        <Container
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Stack spacing={2}>
                <TextField
                    id="userName"
                    label="name"
                    value={name}
                    onChange={handleChangeName}
                    color="secondary"
                />
                <TextField
                    id="userPassword"
                    label="password"
                    value={password}
                    onChange={handleChangePassword}
                    color="secondary"
                />
            <Button variant='outlined' color="secondary">Login</Button>
            <Button variant='outlined' color="secondary">Register New User</Button>
            </Stack>
        </Container>
    )
}