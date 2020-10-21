import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TransformIcon from '@material-ui/icons/Transform';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import auth from './Auth';
import CircularProgress from '@material-ui/core/CircularProgress';


const initialState = {
    email:'',
    password:''
}


const reducer = (state,action)=>{
        switch (action.type) {
            case 'email':
                return{...state,email:action.value};
            case 'password':
                return{...state,password:action.value}
        
            default:
                return state
        }
}

function Copyright() {


  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {'Copyright © MartechLabs '}
      <Link color="inherit" href="#">
        Logistio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient(to right, #000046, #e3e3e3	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */'


  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:'#000046',
    color:'white',
    '&:hover':{
        background:'#373738',

    }

  },
  txtInput: {
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      
     
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [userInfo, dispatch] = React.useReducer(reducer, initialState);
  let history = useHistory();
  const [loading, setloading] = React.useState(false)


  
  const AuthHandler = ()=>{
    //   setloading(true);
    // auth.login(userInfo,()=>{
    //     setloading(false);
    //     history.push("/home")
    // })
    history.push("/home")
}

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{padding:'50px'}}>

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <TransformIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.txtInput}
              onChange={(e)=>{dispatch({type:'email',value:e.target.value})}}
            />
            <TextField

              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.txtInput}
              onChange={(e)=>{dispatch({type:'password',value:e.target.value})}}
            />
            
            <Button
                onClick={AuthHandler}
                fullWidth
                variant="contained"
                className={classes.submit}
                style={loading?{display:'none'}:null}
            >
              Sign In
            </Button>
            <div style={{padding:'15px',textAlign:'center'}} hidden={!loading}>
            <CircularProgress size={20} thickness={4} style={{color:'black'}}/>
            </div>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color='textSecondary'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color='textSecondary'> 
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}