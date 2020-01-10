import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return(
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
                    <Link class="nav-link">
                      <i class="far fa-user fa-2x"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    )
}