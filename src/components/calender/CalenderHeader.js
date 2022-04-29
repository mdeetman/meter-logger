import './Calender.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { getYear, getMonth, getDaysInMonth } from '@wojtekmaj/date-utils';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const NavButton = styled(Button)(() => ({
  height: '100%',
  width: '2vw',
  borderRadius: 0,
  minWidth: 0,
  boxShadow: 'none'
}));

function CalenderHeader(props) {

    return (
        <Box className='calender-header'>
            <NavButton variant='contained' onClick={props.onMonthDown}>{'\<'}</NavButton>
            <Paper sx={{height: '100%', width: '10em', borderRadius: 0}}>{`${monthNames[props.date.getMonth()]} - ${getYear(props.date)}`}</Paper>
            <NavButton variant='contained' onClick={props.onMonthUp}>{'\>'}</NavButton>
        </Box>
    );
}

export default CalenderHeader;