import './Logger.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';

function Logger() {
    const [distance, setDistance] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [type, setType] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [submitted, setSubmitted] = React.useState(false);

    const handleLog = (e) => {
        e.preventDefault();
        setSubmitted(true);
        let error = !Number(distance) || unit === '' || type === '';
    }

    return (
        <Box component="form" 
            sx={{'& > :not(style)': { m: 1 }}}
            noValidate
            autoComplete="off"
            className='form-container'
            onSubmit={handleLog}>
            <Box className='distance-form' 
            sx={{'& > :not(style)': { m: 1 }}}>
                <TextField
                style={{width: '80%', margin: '0 1% 0 0'}}
                error={submitted && !Number(distance)}
                variant="standard"
                helperText={submitted && !Number(distance) ? "Invalid entry" : ''}
                id="distance" 
                label="Distance" 
                defaultValue={distance}
                onChange={(e) => setDistance(e.target.value)}/>
                <FormControl variant="standard" 
                style={{width: '19%', margin: '0px', overflow: 'auto'}}>
                    <InputLabel htmlFor="unit"
                    error={submitted && unit === ''}>Unit</InputLabel>
                    <Select labelId="unit" 
                    id="unit" 
                    defaultValue={unit} 
                    label="Unit"
                    error={submitted && unit === ''}
                    onChange={(e) => setUnit(e.target.value)}>
                        <MenuItem value="meter">Meters</MenuItem>
                        <MenuItem value="mile">Miles</MenuItem>
                    </Select>
                    {submitted && unit === '' && 
                    <FormHelperText error>Select a unit</FormHelperText>}
                </FormControl>
            </Box>
            
            <FormControl variant="standard">
                <InputLabel htmlFor="type"
                error={submitted && type === ''}>Type</InputLabel>
                <Select labelId="type" id="type" 
                defaultValue={type} 
                label="Type"
                error={submitted && type === ''}
                onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="erg">Erg</MenuItem>
                    <MenuItem value="bike">Bike</MenuItem>
                    <MenuItem value="run">Run</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </Select>
                {submitted && type === '' && 
                <FormHelperText error>Select a type</FormHelperText>}
            </FormControl>
            <FormControl variant='standard'>
                <TextField
                    id="description"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </FormControl>
            <Button type="submit" 
            variant='contained' 
            color='primary'>Log</Button>
        </Box>
    );
}

export default Logger;