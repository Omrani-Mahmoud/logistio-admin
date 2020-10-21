import React from 'react'

function Badge({color,children}) {

    const colors={
        blue:'rgb(226,239,254)',
        green:'rgb(211,247,232)',
    }
    const text_color={
        blue:'rgb(42,77,161)',
        green:'rgb(51, 189, 129)',
    }

    return (
        <span style={{backgroundColor:colors[color] ,borderRadius:'3px',width:'100px',display:'block',textAlign:'center',color:text_color[color],margin:' 5px 5px 5px 0px',height:'21px'}}>
           <strong> {children}</strong>
        </span>
    )
}

export default Badge
