import React from 'react'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 190,
      marginRight:'105px',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
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
        '& .MuiInput-underline:after':{
            borderBottom:'2px solid black'
        }
      },
  }));

function Top_bar({isMobile}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(null);

    const div_style={
        display:'flex',
        alignItems:isMobile?'':'center',
        flexDirection:isMobile?'column-reverse':'row',
        
    }

    const span_style = {
        color:'#303030',
        paddingLeft:'15px',
        display:'flex',
        alignItems:'center',
        cursor:'pointer'
    }

    const menu_item  ={fontSize:'13px',textDecoration:'none',color:'black'}



    const handleOpenMenu  = (event) =>{
        setOpen(event.currentTarget);

    }
    const handleCloseMenu = () => {
        setOpen(null);

      };
    return (
        <Grid
  container
  direction={isMobile?"column":'row'}
  justify={isMobile?'flex-start':"flex-end"}
  
>
                <div style={div_style}>
                   {
                    isMobile?
                    <div style={{display:'flex',padding:isMobile?'4px':'0px'}}>              
                <Avatar alt="user img" src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/10/22f8d83b-2dbb-4156-8f6d-9cc13b94e16f/838_rickmorty.jpg" />
                <span style={span_style} onClick={handleOpenMenu}><strong>Omrani mahmoud</strong>      <ArrowDropDownIcon fontSize='small'/></span>
                </div>:
                <React.Fragment>
                <Avatar alt="user img" src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/10/22f8d83b-2dbb-4156-8f6d-9cc13b94e16f/838_rickmorty.jpg" />
                <span style={span_style} onClick={handleOpenMenu}><strong>Omrani mahmoud</strong>      <ArrowDropDownIcon fontSize='small'/></span>
                </React.Fragment>
                }
                
                </div>
                <Menu   
                        id="simple-menu"
                        anchorEl={open}
                        keepMounted
                        open={Boolean(open)}
                        onClose={handleCloseMenu}
                        >
                        <Link to='/home/profile' style={{textDecoration:'none'}}><MenuItem style={menu_item} onClick={handleCloseMenu}>Settings</MenuItem></Link>
                        <Link to='/home/stores' style={{textDecoration:'none'}}><MenuItem style={menu_item} onClick={handleCloseMenu}>My stores</MenuItem></Link>
                        <MenuItem style={menu_item} onClick={handleCloseMenu}>Logout</MenuItem>
                </Menu>
             </Grid>
    )
}

export default React.memo(Top_bar)
