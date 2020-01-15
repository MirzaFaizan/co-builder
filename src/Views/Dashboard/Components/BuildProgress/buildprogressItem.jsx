import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
const percentage = 30;
export default function item (){
    return(
        <div class="d-flex border-bottom pb-2 pt-3 flex-column align-items-center flex-lg-row align-items-lg-start">
        <div className="m-3 w-25">
               <CircularProgressbar value={percentage} text={`${percentage}%`}
                styles={buildStyles({
                 pathColor: 'pink',
               })}
               />
             </div>

          <div class="d-flex flex-column mt-auto text-center text-lg-left">
               <h5 class="mb-0 custom-height-line-small"> phase 1: plans & Permitting</h5>
               <h5 class="mb-0 text-black-50 custom-height-line-small"><small>in progress</small></h5>
             
                <div class="text-right custom-width-arrow">
                 <button class="custom-btn-pink custom-btn-pink-active btn btn-round py-1 px-3 my-0">
                     <i class="fas fa-long-arrow-alt-right fa-2x"></i>  
                   </button>   
                </div>
              
          </div>
         </div>
    )
}