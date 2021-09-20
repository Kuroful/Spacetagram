import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import SpaceCard from '../SpaceCard';

const api = {
    key: "z72YQO1HJFtsCfGaNiLBbiEYzPu82vhd2Q0IcAI2",
    base: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key="
}


export default function MarsPhotos(){

    const [marsPhoto, setMarsPhoto] = useState([]);

    const GetMarsPhotos = async() => {
        const temp = await fetch(`${api.base}${api.key}`)
          .then(res => res.json())
        
          setMarsPhoto(temp);
      }
      
      useEffect(() => {
            GetMarsPhotos();
      }, []);
    return (
        <Container maxidth = "lg">
            <h2>Photos of Mars</h2>
            <Grid container justify="space-between" spacing={3}>
                
            </Grid>
        </Container>
    )
}