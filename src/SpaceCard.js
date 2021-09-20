import React, {useState, useEffect} from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import useStyles from './SpaceCardStyles';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';




export default function SpaceCard({space}){


    var [like, setLike] = useState(false)
    const dateBuilder = (d) => {
        let months =["January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"];

        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${date} ${month} ${year}`
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        console.log(cvalue);
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    
    }
    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            console.log(c.substring(name.length, c.length))
            return c.substring(name.length, c.length);
          }
        }
    }
      
    function checkCookie() {
        let value = getCookie("Like");

        if (value ==="true") {
            setLike(true);
        } 
        else if (value==="false"){
            setLike(false);
        }
        else{
            setCookie("Like", like, 365);
        }
    }
      


    function changeLike(){
        if (like===true){
            setLike(false);
            setCookie("Like", false, 365);
        }
        else{
            setLike(true);
            setCookie("Like", true, 365);
        }
    }
    useEffect(() => {
        checkCookie();
    }, []);

    const classes = useStyles();
    return(
        <div>
        <Card>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                title={space.title}
                image={space.url}
                />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="h2"> {space.title}</Typography>
                    <Typography className={classes.date} gutterBottom variant="h6" component="h3"> {dateBuilder(new Date())}</Typography>
                </CardContent>
                <CardContent>
                    <Typography className={classes.details} gutterBottom variant="p" component="p"> {space.explanation}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={changeLike} >
                            <ThumbUpAltIcon fontSize="small"/> {!like ? <span>Like</span> : <span>Liked</span>} 
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
        </div>
    )
}