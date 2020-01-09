import React, {useState} from 'react';
import Model from './Component/Model/Model';
export default function CheckList(){
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
   
           <div className="d-flex flex-column align-items-center align-items-md-start">
             <h2 className="text-capitalize text-center text-danger mb-1">You project Checklist</h2>
            
             <div className="progress rounded-pill">
              <div className="progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
      
            <h5 className="text-muted mt-2">50% complete</h5>
           </div>
   
         </div>
   
        
         
   
       {/* <!-- History-Section-Start  --> */}
        <div className="history-section">
         
        {/* <!-- Toggle-Button-Start --> */}
        <div className="row mr-0 flex-column flex-md-row align-items-center justify-content-between">
         <div className="h4 col text-center text-md-left mb-0 mt-3 font-weight-bold">December 2019</div>
        
         <div className="col-7 col-md-5 col-lg-4 col-xl-3 p-1 mt-2 mt-md-0 text-capitalize border">
          
           <small className="text-muted ml-1">View By</small>
           
           <select className="form-control selectdiv p-0 border-0 font-weight-bold">
             <option selected="">All Months</option>
             <option>...</option>
           </select>
          
         </div>
         
        </div>
         {/* <!-- Toggle-Button-End --> */}
   
         {/* <!-- Toggle-Here-Start -->   */}
        <div>
          {/* <!-- History-Section-1  --> */}
         <section> 
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
       <span className="mr-3 cursor-pointer text-blue" onClick={ToggleModel}>
         View more
       </span>
       </div>
       {/* <div className="dropdown-menu">
         <a className="dropdown-item" href="#">Action</a>
       </div> */}
         </div>  
     
            </div>
     
          {/* <!--  --> */}
          <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
     
           <div className="form-check ml-3">
             <label className="form-check-label">
               <input className="form-check-input" type="checkbox" />
               <span className="form-check-sign custom-bg-gold"></span>
                 <h5 className="m-0">Schedule soil test</h5>
                 <p className="text-black-50"><span className="custom-text-gold">Past Due :</span> Due December 11</p>
              
             </label>
           </div>
           
         {/* <!-- Button-Start --> */}
       <div>
     <button type="button" className="btn btn-link dropdown-toggle custom-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i className="fas fa-ellipsis-h fa-2x"></i>
     </button>
     <div className="dropdown-menu">
       <a className="dropdown-item" href="#">Action</a>
     </div>
       </div>  
     
          </div>
          
          <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
     
           <div className="form-check ml-3">
             <label className="form-check-label">
               <input className="form-check-input" type="checkbox" />
               <span className="form-check-sign custom-bg-gold"></span>
                
               
                 <h5 className="m-0">Review Permitting Process</h5>
                 <p className="text-black-50"><span className="custom-text-gold">Past Due :</span> Due December 11</p>
              
             </label>
           </div>
           
         {/* <!-- Button-Start --> */}
       <div>
     <button type="button" className="btn btn-link dropdown-toggle custom-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i className="fas fa-ellipsis-h fa-2x"></i>
     </button>
     <div className="dropdown-menu">
       <a className="dropdown-item" href="#">Action</a>
     </div>
       </div>  
     
          </div>   
     
         </div>     
       </section>
           {/* <!-- History-Section-2  --> */}
         <section>
            
          <div className="h4 mb-0 mt-3 font-weight-bold d-flex justify-content-center justify-content-md-start">January 2019</div>
         
          <div className="border mt-3 text-capitalize">
            
          {/* <!--  --> */}
          <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
     
            <div className="form-check ml-3">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" />
                <span className="form-check-sign custom-bg-gold"></span>
                 
                
                  <h5 className="m-0">Sceptic System Evaluation</h5>
                  <p className="text-black-50">Due January 11</p>
               
              </label>
            </div>
     
          {/* <!-- Button-Start --> */}
        <div>
      <button type="button" className="btn btn-link dropdown-toggle custom-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-ellipsis-h fa-2x"></i>
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Action</a>
      </div>
        </div>  
     
           </div>
     
         {/* <!--  --> */}
         <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
     
          <div className="form-check ml-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />
              <span className="form-check-sign custom-bg-gold"></span>
               
              
                <h5 className="m-0">temprary Electric pole service</h5>
                <p className="text-black-50">Due January 11</p>
             
            </label>
          </div>
          
        {/* <!-- Button-Start --> */}
      <div>
     <button type="button" className="btn btn-link dropdown-toggle custom-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-ellipsis-h fa-2x"></i>
     </button>
     <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
     </div>
      </div>  
     
         </div>
         
         <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
     
          <div className="form-check ml-3">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" />
              <span className="form-check-sign custom-bg-gold"></span>
               
              
                <h5 className="m-0">review process</h5>
                <p className="text-black-50">Due January 11</p>
             
            </label>
          </div>
          
        {/* <!-- Button-Start --> */}
      <div>
     <button type="button" className="btn btn-link dropdown-toggle custom-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-ellipsis-h fa-2x"></i>
     </button>
     <div className="dropdown-menu">
      <a className="dropdown-item" href="#">Action</a>
     </div>
      </div>  
     
         </div>   
     
          </div>
           
        </section>
        {/* <!-- History-Section-3  --> */}
        <section>
            
         <div className="h4 mb-0 mt-3 font-weight-bold d-flex justify-content-center justify-content-md-start">February 2019</div>
        
         <div className="border mt-3 text-capitalize">
           
         {/* <!--  --> */}
         <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
     
           <div className="form-check ml-3">
             <label className="form-check-label">
               <input className="form-check-input" type="checkbox" />
               <span className="form-check-sign custom-bg-gold"></span>
                
               
                 <h5 className="m-0">Sceptic System evluation</h5>
                 <p className="text-black-50">Due february 11</p>
              
             </label>
           </div>
     
         {/* <!-- Button-Start --> */}
       <div>
     <button type="button" className="btn btn-link dropdown-toggle custom-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <i className="fas fa-ellipsis-h fa-2x"></i>
     </button>
     <div className="dropdown-menu">
       <a className="dropdown-item" href="#">Action</a>
     </div>
       </div>  
     
          </div>
     
        {/* <!--  --> */}
        <div className="history-section-box d-flex border-bottom align-items-center justify-content-between">
     
         <div className="form-check ml-3">
           <label className="form-check-label">
             <input className="form-check-input" type="checkbox" />
             <span className="form-check-sign custom-bg-gold"></span>
              
             
               <h5 className="m-0">Temporary Electric pole service</h5>
               <p className="text-black-50">Due february 11</p>
            
           </label>
         </div>
         
       {/* <!-- Button-Start --> */}
     <div>
     <button type="button" className="btn btn-link dropdown-toggle custom-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     <i className="fas fa-ellipsis-h fa-2x"></i>
     </button>
     <div className="dropdown-menu">
     <a className="dropdown-item" href="#">Action</a>
     </div>
     </div>  
     
        </div>
       </div>
          
       </section>
     </div>  
   {/* <!-- Toggle-Here-End --> */}
   
        </div>
      {/* <!-- History-Section-End  --> */}
  
      </div>
    )
}