import './Calender.css';
import * as React from 'react';
import Button from '@mui/material/Button';

function getColor(meters) {
    if (!meters) {
        return 'white';
    }
    if (meters >= 10000) {
        return '#69ff37';
    }
    const base = 200;
    const change = Math.min((meters / 9999) * base, base);
    return `rgb(${String(base - Math.floor(change / 2))}, ${base}, ${String(base - Math.floor(change))})`;
}

function CalenderSquare(props) {

    return (
        <Button variant="contained"
         sx={{
            minWidth: 0,
            width: '7vw',
            height: '5vw',
            padding: 0,
            borderRadius: 0,
            outline: '1px solid black',
            fontSize: '1.7vw',
            backgroundColor: getColor(props.meters),
            color: 'black',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: getColor(props.meters)
            }}}>
            {props.children}
        </Button>
    );
}

export default CalenderSquare;