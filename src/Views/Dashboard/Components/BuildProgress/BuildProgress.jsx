import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const windowWidth = window.innerWidth;
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
                    {/* <!-- Progress-Section-1 --> */}
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
                {/* <!-- Progress-SectionEnd --> */}
               </div>

           </div>
        </section>
    )
}