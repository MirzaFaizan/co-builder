import React from 'react';
export default function CardLinesIndicator (props){
return(
    <div className="pl-0 pr-0 mb-4 d-flex align-items-center text-center" style={{minWidth: '150px',}}>
  <span className="d-flex p-1 justify-content-center align-items-center flex-column shadow" style={{background:props.color, borderRadius:'50%', color:'white', height:'60px', width:'60px', border:'4px solid white'}}>
    22feb&nbsp;<span className="font-weight-bold">2016</span>
  </span>
  <span className="d-flex justify-content-center align-items-center h-fit-content shadow" style={{border:`4px solid ${props.color}`, width:'76%'}}>
  </span>
</div>
)
}