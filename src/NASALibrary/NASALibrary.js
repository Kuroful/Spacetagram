import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import useStyles from './styles';
import NasaImage from '../NasaImage';



export default function NASALibrary(props){


    const classes = useStyles();
    function images(space) {
        var nasa ='';
        try {
            nasa = space.links[0].href;
            return nasa;
        } catch (error) {
            console.log("FAILED")
        }
    }
    
    return (

        <Container maxidth = "lg">
            <h2 className={classes.h2}>NASA Photos</h2>
            <form className={classes.area} noValidate autoComplete="off" onSubmit={props.HandleSearch}>
                <TextField className = {classes.searchBox} id="outlined-basic" placeholder="Search for NASA Photos"  onChange={e => props.SetSearch(e.target.value)}/>
            </form>
            <Grid container justify="space-between" spacing={1}>
                {props.search ? (props.nasaPhotos.map(space => (
                    <NasaImage xs={12} sm={6} md={4} lg={3}
                    space={images(space)}/>
                ))) :('')}
            </Grid>
        </Container>
    )
}