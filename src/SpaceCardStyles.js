import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  root: {
    maxWidth: 345,
    textAlign: 'center',
    marginBottom:'16px',
    width: '300px'
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    width: 250,
    position: 'relative',
    lineClamp: 2,
    textOverflow: 'ellipsis',
    marginTop:'20px',
    
  },
  title: {
    padding: '0 16px',
    textAlign: 'center'
  },
  date: {
    textAlign: 'center'
  },
  details: {
    marginTop: '-20px',
    marginBottom: '0px',

  },
  media:{
      height: '350px',
      width:'100%',
      display: 'block'
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },



}));