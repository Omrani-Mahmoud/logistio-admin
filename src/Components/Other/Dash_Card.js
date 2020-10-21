import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      paddingTop:'10px',
      paddingLeft:'10px'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));
  
function Dash_Card({icon,title,data}) {
    const classes = useStyles();

    const title_style = {
        color:'#303030',
        opacity:'90%'
    }
    return (
      <Grid item  md={3} xs={12} style={{marginRight:'4px'}} >
        <Card elevation={0} className={classes.root}>
                    <div className={classes.details}>
                    <CardMedia className={classes.cover} >
                            {icon}
                    </CardMedia>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5" style={title_style}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" color="initial" >
                            {data}
                        </Typography>
                        </CardContent>
                        
                    </div>
                   
         </Card>
      </Grid>
    )
}

export default Dash_Card
