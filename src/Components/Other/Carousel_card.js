import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
  }));
function Carousel_card(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4} style={{marginRight:'5px',padding:'10px',width:'35%'}}>
            <Paper>
            <Grid
                item
                style={{display:'flex',justifyContent:"flex-start",alignItems:"flex-start"}}
                >
                    <Avatar src={props.data.img} className={classes.large} variant='square'/>
                    <section style={{padding:'5px',display:'flex',flexDirection:'column'}}>
                        <span style={{color:'#303030',fontWeight:'bold'}}>
                            {props.data.name}
                        </span>     
                        <span style={{color:'#303030',opacity:'50%',display:'flex',justifyContent:'flex-start',alignItems:'center',paddingLeft:'6px',margin:'5px'}}>
                            <ShoppingCartIcon fontSize='small'/>: {props.data.cart}
                        </span>     
                    </section>
            </Grid>
            </Paper>
        </Grid>
    )
}

export default Carousel_card
