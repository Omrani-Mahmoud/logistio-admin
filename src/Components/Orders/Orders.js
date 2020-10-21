import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import CustomRow from './CustomRow';
import { FormControl, InputAdornment } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
const useStyles = makeStyles((theme)=>{
  return {table: {
    //minWidth: 650,

  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}});
function Orders({data,active_tab,handleChange,isMobile,updateRow,handleChangeSearchValue}) {
    const classes = useStyles();

    const table_head = {
        fontWeight:'bold',
        color:'white'
    }

    const tab_style={
        color:'#303030',
        opacity:'70%',
        textTransform:'capitalize'
    }
 
    return (

      <Grid container  direction="column"
      md={12} xs={12}
      style={{marginTop:'30px'}}
  >
            <Typography variant="h6" gutterBottom style={{color:'#000',opacity:'65%'}}>
                Orders list
            </Typography>
            
            
            <div style={{width:'300px',paddingBottom:'10px',paddingLeft:'8px'}}>
              <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">Filter by name</InputLabel>
                  <Input
                      onChange={(e)=>{
                        handleChangeSearchValue(e.target.value)
                      }}
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchRoundedIcon />
                      </InputAdornment>
                    }
                  />
              </FormControl>
            </div>
            
                        <TableContainer component={Paper} style={isMobile?{overflowX:'scroll',maxWidth:'337px'}:{minidth:'350px'}}>
                          <Table className={classes.table} aria-label="caption table">
                            <TableHead>
                              <TableRow style={{backgroundColor:'rgba(77,92,106,0.6)'}}>
                                <TableCell style={table_head}>OID</TableCell>
                                <TableCell style={table_head} align="center">Created at</TableCell>
                                <TableCell style={table_head} align="center">Name</TableCell>
                                <TableCell style={table_head} align="center">Status</TableCell>
                                <TableCell style={table_head} align="center">Num of times</TableCell>
                                <TableCell style={table_head} align="center">Post code</TableCell>
                                <TableCell style={table_head} align="center">Price</TableCell>
                                <TableCell style={table_head} align="center">State</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {data.map((row) => (
                                  <CustomRow row={row} updateRow={updateRow}/>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
        

        </Grid>
      );
}

export default Orders
