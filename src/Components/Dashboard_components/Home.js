import React,{useState,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
 import '../../Assets/CSS/FileUpload.css'
 import CloudUploadIcon from '@material-ui/icons/CloudUpload';
 import Button from '@material-ui/core/Button';

 import Axios from 'axios';
import {uri} from '../../Url_base'
import OrdersContainer from '../Orders/OrdersContainer';
function Home() {
    
    const [hasIntegration, sethasIntegration] = useState(true);
    const [uploadedFile, setuploadedFile] = useState(null);
    const data = {
        labels: ['January', 'February', 'March',
                 'April', 'May','Jun','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Fulfilled orders',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'rgba(183,218,247,0.7)',
            borderColor: 'rgb(53,151,233)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56,45,21,3,4,112,0,34,55]
          }
        ]
      }


      const upload = () => {
        const data = new FormData() 
        data.append('file',uploadedFile)
        Axios.post(uri.link+"upload", data)
            .then(res => { 
              console.log(res.status)
             
            })
      }

      const fileUpload = (event)=>{
        setuploadedFile(event.target.files[0]);
        console.log('file',event.target.files[0]);
      }


    return (
        <Grid container  direction="column" md={12} xs={12} sm={12} >
          <h3 style={{color:'#000',opacity:'65%'}}>File Upload :</h3>
          <section style={{display:'flex',alignItems:'center'}}>
              <div hidden={uploadedFile ?true:false} style={{display:'flex',flexDirection:'column'}}>
                <input type="file" name="file" id="file" class="inputfile" onChange={fileUpload}/>
                <label className='fileLable' for="file">Choose a file  </label>
                <span style={{color:'#303030',opacity:'50%',paddingLeft:'5px',paddingTop:'5px',fontSize:'11px'}}>( you can import a CSV file )</span>
              </div>
              <section hidden={uploadedFile ?false:true}>
                <Button
                  variant="contained"
                  color="primary"
                  size='small'
                  startIcon={<CloudUploadIcon fontSize="small"/>}
                >
                  Upload
                </Button>
              </section>
              
    <span style={{marginLeft:'7px'}}>{uploadedFile && uploadedFile.name}</span>
          </section>

          <OrdersContainer />
          
        </Grid>
    )
}

export default React.memo(Home)
