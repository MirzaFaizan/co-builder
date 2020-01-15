import React from 'react';
import PhaseItem from './buildprogressItem';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const windowWidth = window.innerWidth;
const data = [1,1,1,1,1, 1];
const percentage = 30;
export default function Buildprogress ({toggle, setToggle}){
    return(
        <section class="col col-lg-5 col-xl-4 build-progress build-progress-position text-capitalize bg-light pr-4 pt-3 mr-0 rounded-lg" 
        style={{display:!toggle && windowWidth <=1000 ? 'none' : 'block'}}
        >
           
           <div>
                   
              <div class="d-flex justify-content-between align-items-center">
                <div class="mb-0 custom-heading-small custom-text-gold">build progress</div> 
                {windowWidth <= 1000 ? (
                    <button class="btn btn-primary btn-icon btn-round" onClick={()=>setToggle(!toggle)}>
                    <i class="fas fa-arrow-left"></i>
                   </button>
                ) : null}  
                
              </div>

               <div>
                    {data.map(value=>(
                      <PhaseItem />
                    ))}
               </div>

           </div>
        </section>
    )
}