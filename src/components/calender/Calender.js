import './Calender.css';
import * as React from 'react';
import { getYear, getMonth, getDaysInMonth } from '@wojtekmaj/date-utils';
import CalenderSquare from './CalenderSquare';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CalenderHeader from './CalenderHeader';


function Calender(props) {
    const getCurMonth = () => {
        const today = new Date();
        today.setDate(1);
        return today;
    }

    const [calDate, setCalDate] = React.useState(getCurMonth);

    const year = getYear(calDate);
    const monthIndex = getMonth(calDate);

    function dateTransform(day) {
        const date = new Date();
        date.setFullYear(year, monthIndex, day);
        date.setHours(0, 0, 0, 0);
        return date;
    }
    
    function daysInMonth() {
        const daysInMonth = getDaysInMonth(calDate);
        const activeEndDate = new Date();
        activeEndDate.setFullYear(year, monthIndex, daysInMonth);
        activeEndDate.setHours(0, 0, 0, 0);
        const daysUntilEndOfTheWeek = (7 - activeEndDate.getDay()) % 7;
        return daysInMonth + daysUntilEndOfTheWeek;
    }

    function getStartPoint() {
        const startPoint = -((calDate.getDay() + 5) % 7);
        return (startPoint !== -6 ? startPoint : 1);
    }

    const dayHeaderTitles = ['MON', "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
    const dayHeaders = [];
    const squares = [];

    for (let point = getStartPoint(); point <= daysInMonth(); point++) {
        const date = dateTransform(point);

        squares.push(
            <CalenderSquare inMonth = {date.getMonth() === calDate.getMonth()} key={date.toISOString()}>
                {date.getDate()}
            </CalenderSquare>
        );
    }

    dayHeaderTitles.forEach(title => {
        dayHeaders.push(
            <Paper
            key={title}
            sx={{
                width: '7vw',
                height: '1.5em',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 0,
                boxShadow: 0}}>
                {title}
            </Paper>
        );
    });

    const handleMonthChange = (change) => {
        let newMonth = calDate.getMonth() + change;
        let newYear = calDate.getFullYear();
        if (newMonth === 12) {
            newYear++;
            newMonth = 0;
        } else if (newMonth === -1) {
            newYear --;
            newMonth = 11;
        }
        setCalDate(new Date(newYear, newMonth, 1));
    }

    return (
        <Box className='calender-dates'>
            <CalenderHeader 
            date={calDate} 
            onMonthUp={() => handleMonthChange(1)} 
            onMonthDown={() => handleMonthChange(-1)}/>
            {dayHeaders}
            {squares}
        </Box>
    );
}

export default Calender;