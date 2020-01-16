import React from 'react';
export default function ProgressPhotoCard ({setShowphoto, value}){
    return(
        <div className="col-sm-6 col-md-6 col-lg-4 cursor-pointer" onClick={()=>setShowphoto(true)}>
                         <div class="pl-0 pr-0 mr-3 mb-3 border-radius-0 shadow">
   <div class="post-module">
     <div class="thumbnail">
       <img src={"https://s3-us-west-1.amazonaws.com/cdn.tiptopvacation.com/offers/hotels/beach-resortcabana-bay-beach-resortorlandofl.png"} />
     </div>
     <div class="post-content border-radius-0 p-3">
       <div class="category" style={{background:value.color}}>{value.title}</div>
       <div className="custom-text-gold font-weight-bold">
           feb 22, 2019
           </div>
     </div>
     
   </div>
   </div>
                   </div>
    )
}