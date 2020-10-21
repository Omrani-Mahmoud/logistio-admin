import { CircularProgress, IconButton, TableCell, TableRow, TextField } from '@material-ui/core'
import React,{useState} from 'react'
import SaveIcon from '@material-ui/icons/Save';
function CustomRow({row,updateRow}) {

    const [value, setValue] = useState(row.custumer_name);
    const [displaySave, setdisplaySave] = useState(false);
    const [loading, setloading] = useState(false);
    const inputHandler = (e)=>{
            setValue(e.target.value);
            setdisplaySave(true);
    }

    const handleDisplaySave = () =>{
          setdisplaySave(false);
    }
    const updateSingleRow = ()=>{
      setloading(true)
        setTimeout(() => {
          setloading(false)
        }, 3000);
    }

    return (
        <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.oid}
        </TableCell>
        <TableCell align="center">{row.created_at}</TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">{row.num_times}</TableCell>
        <TableCell align="center">{row.post_code}</TableCell>
        <TableCell align="center">
          <>
             <TextField  disabled={loading} size='small' id="filled-basic" variant="standard" value={value} onChange={inputHandler}/>

             <CircularProgress  size={15} style={{display:loading?'':'none'}}/>
                <IconButton aria-label="delete"  size='small' style={{display:displaySave?'':'none'}} onClick={()=>{updateRow(row,value);handleDisplaySave();updateSingleRow()}}> 
                    <SaveIcon fontSize="small" style={{color:'rgb(61,201,171)'}}/>
                </IconButton>
        
          </>
        </TableCell>
        <TableCell align="center">{row.state}</TableCell>

      </TableRow>
    )
}

export default CustomRow
