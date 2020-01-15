import React from 'react';
export default function MonthBasedChecklist(props){
    return(
        <section> 
             <div className="h4 col text-center text-md-left mb-0 mt-3 font-weight-bold">December 2019</div>
        <div className="border mt-3 text-capitalize">
          
          {/* <!--  --> */}
          <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
    
            <div className="form-check ml-3">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                <span className="form-check-sign custom-bg-gold"></span>
                  <h5 className="m-0">Upload house plan</h5>
                  <p className="text-black-50">Completed December 11</p>
               
              </label>
            </div>
    
          {/* <!-- Button-Start --> */}
    
        <div className="d-flex flex-row align-items-center justify-content-center dialog_open__check">
      <button type="button" className="btn btn-link custom-btn">
        <i className="fas fa-ellipsis-h fa-2x"></i>
      </button>
      <div className="d-flex flex-row align-items-center justify-content-center view_more">
      <span className="mr-3 cursor-pointer">
      <i class="far fa-trash-alt text-blue"></i>
      </span>
      <span className="mr-3 cursor-pointer text-blue" onClick={props.ToggleModel}>
        View more
      </span>
      </div>
        </div>  
    
           </div>
    
         </div>
         </section>
    )
}