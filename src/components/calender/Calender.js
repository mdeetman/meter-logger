import './Calender.css';
import * as React from 'react';
import { getYear, getMonth, getDaysInMonth } from '@wojtekmaj/date-utils';
import CalenderSquare from './CalenderSquare';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CalenderHeader from './CalenderHeader';



function Calender(props) {
    const [calDate, setCalDate] = React.useState(new Date());

    const year = getYear(props.startDate);
    const monthIndex = getMonth(props.startDate);

    function dateTransform(day) {
        const date = new Date();
        date.setFullYear(year, monthIndex, day);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    
    function daysInMonth() {
        const daysInMonth = getDaysInMonth(props.startDate);
        const activeEndDate = new Date();
        activeEndDate.setFullYear(year, monthIndex, daysInMonth);
        activeEndDate.setHours(0, 0, 0, 0);
        const daysUntilEndOfTheWeek = (7 - activeEndDate.getDay()) % 7;
        return daysInMonth + daysUntilEndOfTheWeek;
    }

    const dayHeaderTitles = ['MON', "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const dayHeaders = [];
    const squares = [];

    for (let point = -props.startDate.getDay() + 2; point <= daysInMonth(); point++) {
        const date = dateTransform(point);

        squares.push(
            <CalenderSquare>
                {date.getDate()}
            </CalenderSquare>
        );
    }

    dayHeaderTitles.forEach(title => {
        dayHeaders.push(
            <Paper 
            sx={{
                width: '7vw',
                height: '2vw',
                borderRadius: 0,
                boxShadow: 0}}>
                {title}
            </Paper>
        );
    });

    return (
        <Box className='calender-dates'>
            <CalenderHeader date={props.startDate}/>
            {dayHeaders}
            {squares}
        </Box>
    );
}

export default Calender;