import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className="event-card">
      <CardActionArea className="card-action">
        <CardMedia
          component="img"
          height="170"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.content}
          </Typography>
        </CardContent>
      <div className="btn">
        <a href="#" target="_blank">
        <Button variant="contained">Problem Statement</Button>
        </a>
        </div>  
        </CardActionArea>
    </Card>
  );
}
