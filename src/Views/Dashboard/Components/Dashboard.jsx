import React from 'react';
import HomeSketch from '../Assets/HomeSketch.jpg';
import BuildProgress from './BuildProgress/BuildProgress';
import ChecklistCard from './DashboadCards/Checklist';
import Charts from './DashboadCards/Budger';
const windowWidth = window.innerWidth
export default function Dashboard(){
  const [toggle, setToggle] = React.useState(false);
  
    return(
        <div className="container-fluid row m-0 pr-0 pl-0">
            <main class="dashboard col ml-0 mr-lg-3 d-lg-block rounded-lg collapse show multi-collapse"
              style={{display:toggle && windowWidth <=1000 ? 'none' : 'block'}}
            >
              <div class="row dashboard-section">
                  <div class="col">
                      <div class="row flex-column">
                          <div class="bg-light rounded-lg col pt-3 pb-2 pr-4">
                              <div>
                                 <div class="d-flex justify-content-between align-items-center">
                                  <div class="my-0 custom-heading-small custom-light-pink-text">Welcome Back, Heather</div>
                                  {windowWidth <= 1000 ? (
                                  <button class="btn btn-primary btn-icon btn-round" type="button" onClick={()=>setToggle(!toggle)}>
                                      <i class="fas fa-arrow-right"></i>
                                     </button>
                                  ):null}
                                 </div>
                                  <div class="my-0 custom-heading">
                                      <span class="custom-text-gold font-weight-bold">427</span>
                                      Days until your project is complete!
                                          <i class="fas fa-share-alt font-30 ml-2 text-success"></i>
                                  </div>
                                  {/* <div class="text-center text-sm-right mb-2 mb-sm-0">
                                      <button class="btn btn-info btn-round" type="button">Update</button>
                                  </div> */}
                              </div>
                              <div class="shadow-sm">
                                  <img src={HomeSketch} alt="Sketch" />
                              </div>
      
                              <div class="d-flex justify-content-between flex-column flex-sm-row align-items-center pt-4 py-2">
                                  <div class="d-flex align-items-center mb-2 mb-sm-0">
                                      <div class="custom-svg-icon__small d-inline-block mr-1">
                                          <i class="fas fa-map-marker-alt font-30"></i>
                                      </div>
                                      <div class="text-black-50">Greenville, Tx</div>
                                  </div>
      
                                  <div class="d-flex align-items-baseline">
      
                                      <div class="custom-svg-icon__small d-inline-block mr-4">
                                          {/* <!-- Svg-icon --> */}
                                          <i class="fas fa-calendar-alt font-30"></i>
                                          {/* <!-- Svg-icon-end --> */}
                                      </div>
      
                                      <div class="row">
                                          <div class="datepicker-container">
                                              <div class="form-group">
                                             <span className="mr-2 font-weight-bold">
                                                 feb 22, 2019
                                             </span>
                                              </div>
                                          </div>
                                      </div>
      
                                  </div>
      
                              </div>
      
      
      
                          </div>
                          {/* <!-- Checklist card --> */}
      
                          <ChecklistCard />
                          <div className="col-sm-12 bg-light mt-3">
                              <h3 className="font-weight-bold mb-1 mt-2 custom-text-gold">
                                  Budger
                              </h3>
                          <Charts />
                          </div>
                          
                      </div>
                  </div>
              </div>
            {/* <!-- Dashboard-Section-End --> */}
          </main>
        <BuildProgress toggle={toggle}
        setToggle={setToggle}
        />
      </div>
    )
}