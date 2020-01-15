import React from 'react';
export default function card(props){
    return(
        <div class="pl-0 pr-0 mr-4 mb-4 progressCard shadow">
<div class="post-module">
  <div class="thumbnail">
    <img src={"https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/hotels/beach-resortcabana-bay-beach-resortorlandofl.png"} />
  </div>
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
    )
}