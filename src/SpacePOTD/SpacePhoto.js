import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';

import SpaceCard from '../SpaceCard';
import useStyles from './styles';


const api = {
    key: "z72YQO1HJFtsCfGaNiLBbiEYzPu82vhd2Q0IcAI2",
    base: "https://api.nasa.gov/planetary/apod?api_key="
}

export default function SpacePhoto(){

    const classes = useStyles();
    const [space, setSpace] = useState('');

    const GetSpacePhoto = async() => {
      const temp = await fetch(`${api.base}${api.key}`)
        .then(res => res.json())
      
        setSpace(temp);
    }
    
    useEffect(() => {
          GetSpacePhoto();
    }, []);
    return (
        <Container maxidth = "lg">
            <h2 className={classes.h2}>Photo of the Day</h2>
            <SpaceCard space={space}/>
        </Container>
    )
}