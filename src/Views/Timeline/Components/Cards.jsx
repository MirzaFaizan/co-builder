import React from 'react';
export default function Card(){
    return(
<div>
<div class="col-sm-3 pl-0 pr-0 mr-4 mb-4 progressCard shadow">
{/* <!-- Post--> */}
<div class="post-module">
  {/* <!-- Thumbnail--> */}
  <div class="thumbnail">
    <img src={"https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/hotels/beach-resortcabana-bay-beach-resortorlandofl.png"} />
  </div>
  {/* <!-- Post Content--> */}
  <div class="post-content">
  <div class="category">Dirt Work</div>
<h1 class="title">Dirt work 14 feb</h1>
    <h2 class="sub_title text-truncate">
    It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
      </h2>
    <p class="description">
    It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout.
      </p>
  </div>
  
</div>
</div>
<div className="pl-0 pr-0 mb-4 d-flex align-items-center" style={{minWidth: '270px'}}>
  <span className="d-flex justify-content-center align-items-center" style={{background:'#E5349B', borderRadius:'50%', color:'white', height:'50px', width:'50px'}}>
    2016
  </span>
  <span className="d-flex justify-content-center align-items-center h-fit-content" style={{border:'3px solid #E5349B', width:'90%'}}>
  </span>
</div>
  </div>
    )
}
{/* <div className="col-sm-3 pl-0 pr-0 mb-4 d-flex justify-content-center align-items-center" style={{minWidth: '270px'}}>
    <div className="" style={{border:'4px solid #E5349B', height:'100px', borderRadius:10}}>

    </div>
  </div> */}