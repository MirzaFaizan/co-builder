import React from 'react';
export default function Progressbar(){
    return(
        <div className="d-flex flex-column align-items-center align-items-md-start">
             <h2 className="text-capitalize text-center text-danger mb-1">You project Checklist</h2>
            
             <div className="progress rounded-pill">
              <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      
            <h5 className="text-muted mt-2">50% complete</h5>
           </div>
    )
}