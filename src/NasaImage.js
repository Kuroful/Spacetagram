import React, {useState, useEffect} from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './SpaceCardStyles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

export default function NasaImage({space}){

    const classes = useStyles();
    return(
        
        <div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={space}
                />
            </CardActionArea>
        </Card>
        </div>
    )
}