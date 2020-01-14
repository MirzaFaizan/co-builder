import React from 'react';
import {Link} from 'react-router-dom';
import Profile from '../Profiles/Profile';
export default function Navbar(){
  const [openProfile, setOpenProfile] = React.useState(false);
    return(
      <>
      {openProfile ? (
        <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        /> 
      ) : null}
 
        <nav class="navbar navbar-expand-md mb-0">
         
            <div class="container-fluid flex-nowrap flex-sm-wrap">
              <div class="navbar-translate d-flex align-items-center">
               <h3 className="m-0 text-light font-weight-bold font-familt-sofia">CO-Builders</h3>
              </div>
              
              <div>
                <ul class="navbar-nav flex-row">
                  <li class="nav-item">
                    <Link class="nav-link">
                      <i class="position-relative far fa-bell fa-2x">
                        <span class="header-notification-box badge-danger fixed-top position-absolute rounded-circle text-center">10</span>
                      </i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link">
                      <i class="position-relative far fa-comment fa-2x">
                       <span class="header-notification-box badge-danger fixed-top position-absolute rounded-circle text-center">3</span>
                      </i>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <span class="nav-link text-light" onClick={()=>setOpenProfile(true)}>
                      <i class="far fa-user fa-2x"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          </>
    )
}