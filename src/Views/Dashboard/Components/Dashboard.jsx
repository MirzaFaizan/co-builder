import React from 'react';
import HomeSketch from '../Assets/HomeSketch.jpg';
import BuildProgress from './BuildProgress/BuildProgress';
const windowWidth = window.innerWidth
export default function Dashboard(){
  const [toggle, setToggle] = React.useState(false);
  
    return(
        <div className="container-fluid row m-0 pr-0 pl-0">
            <main class="dashboard col ml-0 mr-lg-3 d-lg-block rounded-lg collapse show multi-collapse"
              style={{display:toggle && windowWidth <=1000 ? 'none' : 'block'}}
            >
            {/* <!-- Dashboard-Section --> */}
              <div class="row dashboard-section">
                  <div class="col">
                      <div class="row flex-column">
    
                          {/* <!-- Project-Section --> */}
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
                                      
                                          {/* <!-- Svg-icon --> */}
                                          <i class="fas fa-share-alt font-30 ml-2 text-success"></i>
                                          {/* <!-- Svg-icon-end --> */}
                                      
                                  </div>
      
                                  <div class="text-center text-sm-right mb-2 mb-sm-0">
                                      <button class="btn btn-info btn-round" type="button">Update</button>
                                  </div>
      
                              </div>
      
                              <div class="shadow-sm">
                                  <img src={HomeSketch} alt="Sketch" />
                              </div>
      
                              <div class="d-flex justify-content-between flex-column flex-sm-row align-items-center pt-4 py-2">
                                  <div class="d-flex align-items-center mb-2 mb-sm-0">
                                      <div class="custom-svg-icon__small d-inline-block mr-1">
                                          {/* <!-- Svg-icon --> */}
                                          <i class="fas fa-map-marker-alt font-30"></i>
                                          {/* <!-- Svg-icon-end --> */}
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
                                                  <input type="date" class="form-control date-picker text-black-50" value="02-10-2021"
                                                      data-datepicker-color="primary" onChange={(e)=>{console.log(e.target.value)}} />
                                              </div>
                                          </div>
                                      </div>
      
                                  </div>
      
                              </div>
      
      
      
                          </div>
                          {/* <!-- Project-Section-End --> */}
      
                          <div class="text-capitalize bg-light mt-3 py-3 pr-4 rounded-lg col">
                              <div class="d-flex align-items-center justify-content-between flex-column flex-sm-row">
                                  <div class="my-0 custom-heading custom-color-green">next on your checklist</div>
                                  <button class="btn btn-info btn-round" type="button">See All</button>
                              </div>
      
                              <div>
      
                                  <div class="dashboard-form-check form-check ml-3 pb-4 border-bottom">
                                      <label class="form-check-label">
                                          <input class="form-check-input" type="checkbox" checked="" />
                                          <span class="form-check-sign custom-bg-gold"></span>
                                          <h5 class="m-1">Permitting</h5>
                                      </label>
                                  </div>
      
                                  <div class="dashboard-form-check form-check ml-3 pb-4">
                                      <label class="form-check-label">
                                          <input class="form-check-input" type="checkbox" />
                                          <span class="form-check-sign custom-bg-gold"></span>
                                          <h5 class="m-1">Schedule soil test</h5>
                                      </label>
                                  </div>
      
                              </div>
      
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