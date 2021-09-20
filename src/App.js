import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
import SpacePhoto from './SpacePOTD/SpacePhoto.js';
import NASALibrary from './NASALibrary/NASALibrary';

var searchTrue = false;
function App() {

  const [nasaPhotos, setNasaPhotos] = useState([]);
  const [search, SetSearch] = useState("");

  
  const GetNasaPhotos = async(query) => {
      const temp = await fetch(`https://images-api.nasa.gov/search?q=${query}`)
        .then(res => res.json())
        setNasaPhotos(temp.collection.items);
    }
    

    useEffect(() => {
          GetNasaPhotos();
    }, []);

  const HandleSearch = e => {
      e.preventDefault();
      searchTrue = true;
      GetNasaPhotos(search)
      
  }
  console.log(searchTrue);
  return (
      <Container maxidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">Spacetogram</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} md={8}>
                <NASALibrary search={searchTrue} HandleSearch={HandleSearch} SetSearch={SetSearch} nasaPhotos={nasaPhotos}/>
              </Grid>
              <Grid item xs={12} md={4}>
                <SpacePhoto/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
  );
}

export default App;
