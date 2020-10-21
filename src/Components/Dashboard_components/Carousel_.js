import React,{useState,useEffect} from 'react'
import Carousel_card from '../Other/Carousel_card'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import '../../Assets/CSS/Carousel.css'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const useStyles = makeStyles((theme)=>{
  return {
    button: {
      "&:hover": {
        backgroundColor: "transparent"
      },
      float:'right'
    }
}});

function Carousel_() {

  const classes = useStyles();

const [activeIndex, setactiveIndex] = useState(0);
const [res, setres] = useState([]);
const tab =[  <Carousel_card id={1} data={{img:'https://static.pullandbear.net/2/photos//2020/V/0/2/p/5234/778/250/5234778250_2_6_8.jpg?t=1589274635711&imwidth=1100',name:'T-shirt R & M',cart:34324}}/>,
              <Carousel_card id={2} data={{img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MR6E2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1511994825437',name:'Iphone X case ',cart:4324}}/>,
              <Carousel_card id={3} data={{img:'https://img.phonandroid.com/2019/10/razer-hammerhead-true-wireless-2.jpg',name:'Razer Airpods',cart:24}}/>,
              <Carousel_card id={4} data={{img:'https://static.pullandbear.net/2/photos//2020/V/0/2/p/5234/778/250/5234778250_2_6_8.jpg?t=1589274635711&imwidth=1100',name:'T-shirt R & M',cart:34324}}/>,
              <Carousel_card id={5} data={{img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MR6E2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1511994825437',name:'Iphone X case ',cart:4324}}/>,
              <Carousel_card id={6} data={{img:'https://img.phonandroid.com/2019/10/razer-hammerhead-true-wireless-2.jpg',name:'Razer Airpods',cart:24}}/>,
              <Carousel_card id={7} data={{img:'https://static.pullandbear.net/2/photos//2020/V/0/2/p/5234/778/250/5234778250_2_6_8.jpg?t=1589274635711&imwidth=1100',name:'T-shirt R & M',cart:34324}}/>,
              <Carousel_card id={8} data={{img:'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MR6E2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1511994825437',name:'Iphone X case ',cart:4324}}/>,
              <Carousel_card id={9} data={{img:'https://img.phonandroid.com/2019/10/razer-hammerhead-true-wireless-2.jpg',name:'Razer Airpods',cart:24}}/>,
              <Carousel_card id={10} data={{img:'https://static.pullandbear.net/2/photos//2020/V/0/2/p/5234/778/250/5234778250_2_6_8.jpg?t=1589274635711&imwidth=1100',name:'T-shirt R & M',cart:34324}}/>,
              <Carousel_card id={12} data={{img:'https://img.phonandroid.com/2019/10/razer-hammerhead-true-wireless-2.jpg',name:'Razer Airpods',cart:24}}/>,
          ]

//   const getNextItems = ()=>{
//     let res =[];
//     if(activeIndex>=tab.length){
//       setactiveIndex(0);
//       setres([tab[0],tab[1],tab[2]])
//     }
 
//     else {
//       setactiveIndex(activeIndex+3);
      
//     }


//     for (let index = activeIndex; index<activeIndex+3; index++) {
//           res.push(tab[index]);
//     }

//     setres(res)
//   }


//   const getPrevItems = ()=>{
//     let res =[];
//     setactiveIndex(activeIndex-6)
//     if(activeIndex<=0){
//       setactiveIndex(0);
//       setres([tab[0],tab[1],tab[2]])
//     }

//     for (let index = activeIndex; index<activeIndex+3; index++) {
//       console.log('index',index)
//       res.push(tab[index]);
// }
//     setres(res)
//   }


  useEffect(() => {
    let res =[];

  //   if(activeIndex === 0){
  //     console.log('here')
  //     setactiveIndex(3)
  //     setres([tab[0],tab[1],tab[2]])
  // }
  // else
    for (let index = activeIndex; index <activeIndex+3; index++) {
      res.push(tab[index]);
      
    }
    setres(res)
  }, [activeIndex]);


  useEffect(() => {
      setres([tab[0],tab[1],tab[2]]);

  } ,[]);




  const nextIndext = ()=>{
    setactiveIndex(activeIndex+3)
  }

  const prevIndext = ()=>{
    setactiveIndex(activeIndex-3)
  }

  return (
   <Grid item xs={12} md={12} style={{display:'flex',flexDirection:'row',width:'100%'}}>
      <IconButton   size='small' className={classes.button} onClick={prevIndext} disabled={activeIndex===0}>
          <NavigateBeforeIcon fontSize="small" />
      </IconButton>
      {
        res
      }
      <IconButton  size='small' className={classes.button} onClick={nextIndext} disabled={activeIndex>=tab.length-3}>
          <NavigateNextIcon fontSize="small" />
      </IconButton>
   </Grid>
  )
}

export default Carousel_
