import React,{useState} from 'react';
import Model from '../Checklist/Component/Model/Model';
import ProgressBar from '../Checklist/Component/Progressbar';
import MonthBasedChecklist from '../Checklist/Component/MonthBasedChecklist/Index';
export default function UpcomingMeeting(){
    const [openModel, setOpenModel] = useState(false);
 const ToggleModel = () => {
  setOpenModel(!openModel);
 }
    return(
        <div className="main-testing bg-white p-4">
   <Model openModel={openModel} setOpenModel={setOpenModel} />
        <div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center align-items-lg-baseline">
           <h3 className="mb-0"><span className="custom-text-gold font-weight-bold">427</span> Days to go</h3>
           
           <div className="text-center">
            <button className="btn btn-outline-info btn-round">Edit Checklist</button>
            <button className="btn btn-info btn-round">Create New To-Do</button>
           </div>
          </div>
   <ProgressBar />
         </div>
       {/* <!-- History-Section-Start  --> */}
        <div className="history-section">
         
        {/* <!-- Toggle-Button-Start --> */}
        <div className="row mr-0 flex-column flex-md-row align-items-center justify-content-between">
         <div className="h4 col text-center text-md-left mb-0 mt-3 font-weight-bold"></div>
        
         <div className="col-7 col-md-5 col-lg-4 col-xl-3 p-1 mt-2 mt-md-0 text-capitalize border">
          
           <small className="text-muted ml-1">View By</small>
           
           <select className="form-control selectdiv p-0 border-0 font-weight-bold">
             <option selected="">All Months</option>
             <option>...</option>
           </select>
          
         </div>
         
        </div>
        <div>
         
         <MonthBasedChecklist
         ToggleModel={ToggleModel}
         />
          </div>
        </div>
      </div>
    )
}