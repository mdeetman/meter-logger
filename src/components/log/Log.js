import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Log(props) {
    return (
        <Card sx={{minWidth: 350}} variant='outlined'>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary">{props.time}</Typography>
                <Typography sx={{fontSize: 20}}>{props.type} : {props.distance} {props.units}</Typography>
                <Typography sx={{fontSize: 14}}>{props.description}</Typography>
            </CardContent>
        </Card>
    );
}

export default Log;