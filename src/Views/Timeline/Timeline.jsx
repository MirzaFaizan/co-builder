import React from 'react';
import './timeline.css';
import ProgressCard from './Components/Cards';
import ProgressBar from '../Checklist/Component/Progressbar';
export default function Timeline(){
    return(
        <div className="main-testing bg-white p-4">
             <div>
               
               <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-lg-baseline">
                <h3 className="mb-0"><span className="custom-text-gold font-weight-bold">Timeline</span> </h3> 
                
                <div className="text-center">
                 {/* <button className="btn btn-outline-info btn-round">Edit Checklist</button> */}
                 <button className="btn btn-info btn-round mr-2">Add new</button>
                </div>
               </div>
               <div className="col-sm-12 pt-3 d-flex flex-row overflow-auto">
               <ProgressCard />
               <ProgressCard />
               <ProgressCard />
               <ProgressCard />

               </div>
               <div>
               <h4 className="mb-0 mt-1"><span className="custom-text-gold font-weight-bold">Total Days : 500</span> </h4>
               <h4 className="m-0 mt-1"><span className="text-grey">Total days passed: 333</span> </h4>
        <ProgressBar />
        </div>
        </div>
        </div>
    )
}