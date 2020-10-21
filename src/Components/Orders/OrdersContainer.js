import React,{useState,useEffect} from 'react'
import Orders from './Orders'
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2'
//import logo from "../../assets/img/advisely-logo.svg";
import  storeImg from'../../Assets/img/icon-store.svg';
import { useHistory } from 'react-router-dom';


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function OrdersContainer({isMobile}) {

    const [active_tab, setactive_tab] = React.useState(0);
    const [searchValue, setsearchValue] = React.useState('');

    const [hasIntegration, sethasIntegration] = useState(!true)
    const history = useHistory();

    const handleChange_tab = (event, newValue) => {
        setactive_tab(newValue);
      };


      const status_enum = {
          0:'all_orders',
          1:'Pending',
          2:'Processing',
          3:'Shipped',
          4:'Received',
          5:'Canceled'
      }

    const data = [
        {oid:'234235235F',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shipped'},
        {oid:'234235235E',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shipped'},
        {oid:'234235235Z',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shipped'},

        {oid:'234235235F',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Pending'},
        {oid:'234235235E',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Pending'},
        {oid:'234235235Z',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Pending'},

        {oid:'234235235F',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Processing'},
        {oid:'234235235E',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Processing'},
        {oid:'234235235Z',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Processing'},

        {oid:'234235235F',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Received'},
        {oid:'234235235E',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Received'},
        {oid:'234235235Z',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Received'},

        {oid:'234235235F',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Canceled'},
        {oid:'234235235E',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Canceled'},
        {oid:'234235235Z',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Canceled'},
      ];

        const updateRow = (row,value)=>{
          let index = data.indexOf(row);
          data[index].custumer_name = value;
          console.log('update data',data)
        }

        const filtredData = data.filter(x=>{
          return x.name.includes(searchValue);
        })

        const handleChangeSearchValue = (value)=>{
            setsearchValue(value);
        }

      
       



    return (
   
            <Orders data={filtredData} active_tab={active_tab} handleChange={handleChange_tab} isMobile={isMobile} updateRow={updateRow} handleChangeSearchValue={handleChangeSearchValue}/>
         
    )
}

export default OrdersContainer
