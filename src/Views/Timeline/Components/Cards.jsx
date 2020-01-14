import React from 'react';
export default function Card(props){
    return(
<div className="cursor-pointer">
<div class="pl-0 pr-0 mr-4 mb-4 progressCard shadow">
{/* <!-- Post--> */}
<div class="post-module">
  {/* <!-- Thumbnail--> */}
  <div class="thumbnail">
    <img src={"https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/hotels/beach-resortcabana-bay-beach-resortorlandofl.png"} />
  </div>
  {/* <!-- Post Content--> */}
  <div class="post-content">
    <div class="category" style={{background:props.color}}>{props.title}</div>
    <h1 class="title">{props.heading}</h1>
    <h3 class="m-0 sub_title text-truncate" style={{color:props.color}}>
      {props.description}
      </h3>
    <p class="description">
    {props.description}
      </p>
  </div>
  
</div>
</div>
<div className="pl-0 pr-0 mb-4 d-flex align-items-center text-center" style={{minWidth: '150px',}}>
  <span className="d-flex p-1 justify-content-center align-items-center flex-column shadow" style={{background:props.color, borderRadius:'50%', color:'white', height:'60px', width:'60px', border:'4px solid white'}}>
    22feb&nbsp;<span className="font-weight-bold">2016</span>
  </span>
  <span className="d-flex justify-content-center align-items-center h-fit-content shadow" style={{border:`4px solid ${props.color}`, width:'76%'}}>
  </span>
</div>
  </div>
    )
}