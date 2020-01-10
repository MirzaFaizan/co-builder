import React from 'react';
import ImagesLayout from './ImagesLayout';
export default function PintrestView(){
    return(
<section class="pinterest-boards-section pl-2 h-100 bg-white mt-2 ml-2 pt-3 overflow-auto">
             
             <div class="d-flex align-items-center">
                    
                 <div class="d-flex w-100 pr-4 mb-3 mb-md-0">
                     <div class="d-none d-sm-flex text-danger mr-4">
                         <i class="fab fa-pinterest fa-3x"></i>
                     </div>
                       
                     <div class="d-flex w-100">
                         <div class="input-group mb-0">
                             <div class="input-group-prepend">
                               <span class="input-group-text rounded-0 text-black-50"><i class="fas fa-search"></i></span>
                             </div>
                             <input type="search" class="form-control border-left-0 rounded-0 font-weight-bold" placeholder="tree house designs" />
                     </div>
         
                         <div class="input-group-append">
                             <button class="input-group-text border rounded-0 p-2 h6 text-capitalize">All pins<i class="fas fa-chevron-down ml-3"></i></button>
                           </div>
                       </div>
                 </div>
              
                 {/* <!-- Icons --> */}
              {/* <!-- <div class="d-flex flex-column flex-sm-row align-items-center  justify-content-center justify-content-md-start">
                       
                 <div class="d-flex align-items-center">
                     <button class="btn btn-outline-default border-0 custom-btn">
                         <i class="fas fa-user-friends fa-2x"></i>
                     </button>
                     
                     <button class="btn btn-round border-0 p-0 pinterrest-boards-section__icon-circle mr-4 custom-btn-bg">
                         <span class="h5 font-weight-bold my-0">A</span>
                     </button>
                 </div>
         
                 <span class="pinterest-boards-section__height border"></span>
         
                 <div class="d-flex">
                     <button class="btn btn-outline-default border-0 custom-btn">
                         <i class="fas fa-comment-dots fa-2x"></i>
                     </button>
                     
                     <button class="btn btn-outline-default border-0 custom-btn">
                         <i class="position-relative fas fa-bell fa-2x" aria-hidden="true">
                             <span class="header-notification-box pinterest-boards-notification-box badge-danger fixed-top position-absolute rounded-circle text-center">10</span>
                         </i>
                     </button>
         
                     <button type="button" class="btn btn-link custom-btn">
                         <i class="fas fa-ellipsis-h fa-2x"></i>
                       </button>   
         
                 </div>
         
             </div> --> */}
         
              </div>
         
              <div class="pinterest-boards-section-buttons">
                 <button class="btn btn-primary custom-color-tobacco-brown-bg text-capitalize font-weight-bold">Floor plans</button>
                 <button class="btn btn-primary custom-color-woodland-bg text-capitalize font-weight-bold">treehouse</button>
                 <button class="btn btn-primary  text-capitalize font-weight-bold">achitecture</button>
                 <button class="btn btn-primary  text-capitalize font-weight-bold">british columbia</button>
                 <button class="btn btn-primary  text-capitalize font-weight-bold">how to build</button>
                 <button class="btn btn-primary  text-capitalize font-weight-bold">ideas</button>
         
                 <button class="btn btn-outline-default border-0 p-0 m-0 custom-btn pinterest-boards-section-buttons__pos-fixed">
                     <i class="fas fa-chevron-right fa-2x"></i>
                 </button>
         
              </div>
         <div className="col-sm-12 py-2">
         <ImagesLayout />
         </div>
              </section>
         
        )
}

